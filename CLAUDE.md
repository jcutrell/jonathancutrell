# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JonathanCutrell.com is a personal website and content platform built with Next.js. It serves blog posts, podcast episodes, mental models, notes, and other content types, primarily using MDX for content management.

## Development Commands

```bash
# Fetch content from external repository
npm run fetch-content

# Development server (does not auto-fetch content)
npm run dev

# Production build (automatically fetches content via prebuild script)
npm run build

# Start production server
npm start

# Linting
npm run lint
```

**Note:** This project requires Node 20 or higher. Install dependencies with `npm install --legacy-peer-deps` due to some older dependencies that haven't updated their peer dependency declarations.

### Content Management

Content is stored in a separate private repository (`github.com/jcutrell/jonathancutrell-content`) and automatically fetched during the build process:

- **Local Development**: Uses SSH authentication by default (requires SSH keys configured)
- **CI/CD**: Set `GITHUB_TOKEN` or `GH_TOKEN` environment variable for HTTPS authentication
- **Manual Fetch**: Run `npm run fetch-content` to update content without building

The build script (`scripts/fetch-content.js`) pulls content from the `external/web-content` subfolder of the content repository into the local `content/` directory. The `content/` directory is gitignored and should not be committed to this repository.

## Architecture

### Content Management System

The site uses a file-based CMS where content lives in the `content/` directory:
- `content/blog/` - Blog posts (`.md` files)
- `content/mental-models/` - Mental model articles
- `content/notes/` - Note entries
- `content/episodes/` - Podcast episodes (fetched from Simplecast API)
- `content/assets/` - Images and media files

All content files use frontmatter (parsed via `gray-matter`) with fields like `title`, `date`, `author`, and `templateKey`.

### Content Helpers (`helpers/content-helpers.js`)

Core functions for content management:
- `getAllContentIn({ folder, extension })` - Reads all content from a folder
- `getContentBySlug({ folder, extension, slug })` - Gets single content item
- `getSlugsIn({ folder, extension })` - Returns all slugs for static path generation
- `getEpisodes({ page, pageSize })` - Fetches podcast episodes from Simplecast API

These helpers handle:
1. Reading markdown files from the filesystem
2. Parsing frontmatter metadata
3. Calculating reading time
4. Generating permalinks

### Dynamic Routes & Static Generation

The site uses Next.js static site generation with dynamic routes:
- `/blog/[slug].js` - Blog post pages
- `/mental-models/[slug].js` - Mental model pages
- `/notes/[slug].js` - Note pages
- `/episodes/[slug].js` - Podcast episode pages

Each dynamic route:
1. Uses `getStaticPaths()` to generate all paths at build time
2. Uses `getStaticProps()` to fetch content for each path
3. Pre-processes Obsidian-style image syntax (`![[image.png]]`) to standard markdown before MDX serialization

### MDX Processing

Content is processed using `next-mdx-remote`:
1. Content is read from markdown files
2. Obsidian-style image references are converted to markdown syntax
3. Content is serialized with `serialize()` using remark-wiki-link plugin
4. Rendered with `<MDXRemote>` component

Custom MDX components (defined in blog post templates):
- `img` - Custom Image component that rewrites asset paths to `/assets/` API route
- `Blockquote` - Styled blockquote wrapper

### Asset Serving

Assets in `content/assets/` are served via an API route at `/api/assets/[...path].js`:
- Rewrites `/assets/*` to `/api/assets/*` (configured in `next.config.js`)
- Streams files from `content/assets/` directory
- Returns 404 for missing files

### Podcast Integration

Podcast episodes are fetched from Simplecast API:
- Requires environment variables: `PODCAST_ID` and `SIMPLECAST_API_KEY`
- Episodes are fetched server-side during build
- Helper functions: `getEpisodes()`, `getAllEpisodes()`

### Styling

Uses multiple styling approaches:
- Tailwind CSS (configured in `tailwind.config.js`)
- styled-components (via `twin.macro` with styled-components preset)
- Custom brand colors: `brandBlue.600` and `brandBlue.800`
- Tailwind Typography plugin for prose styling

## Key Files

- `helpers/content-helpers.js` - All content reading/parsing logic
- `site-config.js` - Site metadata and MDX options
- `next.config.js` - Next.js configuration, redirects, rewrites, MDX setup
- `pages/api/assets/[...path].js` - Asset serving API route
- `components/SiteLayout.js` - Main layout wrapper
- `wrap-root-element.js` - Root element wrapper for providers

## Important Patterns

### Adding New Content Types

1. Create directory in `content/`
2. Add page in `pages/` with list view
3. Add dynamic route in `pages/[content-type]/[slug].js`
4. Use content helpers to read/parse files
5. Implement `getStaticPaths()` and `getStaticProps()`

### Image Handling

Images use Obsidian-style syntax in markdown (`![[image.png]]`) which gets pre-processed to standard markdown before MDX serialization. The custom `img` component in MDX rewrites paths from `../assets/` to `/assets/` for the API route.

### Environment Variables

Required for podcast functionality:
- `PODCAST_ID` - Simplecast podcast ID
- `SIMPLECAST_API_KEY` - Simplecast API authentication token
