// next.config.js
const config = {
  async redirects() {
    return [
      {
        source: '/square',
        destination:
          'https://squareup.com/t/f_online/d_podcast/p_developertea/l_us/dt_alldevice/pr_developers/?route=us/en/developers',
        permanent: true,
      },
      {
        source: '/developer-tea',
        destination: '/episodes',
        permanent: true,
      },
    ]
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    //if (!isServer) {
    //config.node = { fs: 'empty' }
    //}
    config.resolve.fallback = { fs: false }

    return config
  },
  experimental: {
    // This is experimental but can
    // be enabled to allow parallel threads
    // with nextjs automatic static generation
    workerThreads: false,
    cpus: 1,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    roviderImportSource: '@mdx-js/react',
  },
})

module.exports = withBundleAnalyzer(withMDX(config))
