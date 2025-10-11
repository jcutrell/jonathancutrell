#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CONTENT_REPO_HTTPS = 'https://github.com/jcutrell/jonathancutrell-content.git';
const CONTENT_REPO_SSH = 'git@github.com:jcutrell/jonathancutrell-content.git';
const TEMP_DIR = path.join(__dirname, '..', '.content-temp');
const CONTENT_DIR = path.join(__dirname, '..', 'content');
const SOURCE_SUBFOLDER = 'external/web-content';

console.log('📦 Fetching content from external repository...');

try {
  // Create temp directory if it doesn't exist
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
  }

  // Determine which authentication method to use
  const githubToken = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  let repoUrl;

  if (githubToken) {
    // Use token for authentication in CI/CD
    repoUrl = CONTENT_REPO_HTTPS.replace('https://', `https://${githubToken}@`);
    console.log('🔑 Using GitHub token for authentication');
  } else if (process.env.USE_SSH !== 'false') {
    // Use SSH by default for local development (can be disabled with USE_SSH=false)
    repoUrl = CONTENT_REPO_SSH;
    console.log('🔑 Using SSH for authentication');
  } else {
    repoUrl = CONTENT_REPO_HTTPS;
    console.log('⚠️  Using HTTPS without authentication (may fail for private repos)');
  }

  // Clone or pull the repository using sparse checkout
  const repoPath = path.join(TEMP_DIR, 'repo');

  if (fs.existsSync(repoPath)) {
    console.log('📥 Updating existing content repository...');
    execSync('git pull origin main', { cwd: repoPath, stdio: 'inherit' });
  } else {
    console.log('📥 Cloning content repository (sparse checkout)...');

    // Initialize repo
    fs.mkdirSync(repoPath, { recursive: true });
    execSync('git init', { cwd: repoPath, stdio: 'inherit' });
    execSync(`git remote add origin ${repoUrl}`, { cwd: repoPath, stdio: 'inherit' });

    // Enable sparse checkout
    execSync('git config core.sparseCheckout true', { cwd: repoPath, stdio: 'inherit' });

    // Specify which directory to checkout
    const sparseCheckoutFile = path.join(repoPath, '.git', 'info', 'sparse-checkout');
    fs.writeFileSync(sparseCheckoutFile, `${SOURCE_SUBFOLDER}/*\n`);

    // Pull only the specified directory
    execSync('git pull --depth 1 origin main', {
      cwd: repoPath,
      stdio: 'inherit',
      env: { ...process.env, GIT_TERMINAL_PROMPT: '0' }
    });
  }

  // Copy the content from the subfolder to the content directory
  const sourcePath = path.join(repoPath, SOURCE_SUBFOLDER);

  if (!fs.existsSync(sourcePath)) {
    console.error(`❌ Error: Source path ${SOURCE_SUBFOLDER} not found in repository`);
    process.exit(1);
  }

  console.log(`📋 Copying content from ${SOURCE_SUBFOLDER}...`);

  // Create content directory if it doesn't exist
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  // Copy contents
  execSync(`cp -r "${sourcePath}"/* "${CONTENT_DIR}"/`, { stdio: 'inherit' });

  console.log('✅ Content fetched successfully!');

  // Clean up in CI environments to save space
  if (process.env.CI) {
    console.log('🧹 Cleaning up temporary files...');
    execSync(`rm -rf "${TEMP_DIR}"`, { stdio: 'inherit' });
  }

} catch (error) {
  console.error('❌ Error fetching content:', error.message);

  // If content directory doesn't exist and we failed, this is a critical error
  if (!fs.existsSync(CONTENT_DIR) || fs.readdirSync(CONTENT_DIR).length === 0) {
    console.error('❌ No content available and fetch failed. Cannot proceed with build.');
    process.exit(1);
  }

  console.warn('⚠️  Using existing content directory (fetch failed but content exists locally)');
}
