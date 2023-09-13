const wikiLinkPlugin = require('remark-wiki-link')

export default {
  title: 'JonathanCutrell.com',
  author: {
    name: 'Jonathan Cutrell',
  },
  social: {
    twitter: 'jcutrell',
  },
}

const mdxOptions = {
  parseFrontmatter: false,
  mdxOptions: { remarkPlugins: [wikiLinkPlugin] },
}

export { mdxOptions }
