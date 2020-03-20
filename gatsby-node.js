const path = require(`path`)
const slugify = require(`slug`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blog = graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                subtitle
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })

  const podcastEpisode = path.resolve(`./src/templates/episode-page.js`)
  const podcast = graphql(
    `
      {
        allFeedDeveloperTea {
          edges {
            node {
              title
              isoDate(formatString: "MMMM Do, YYYY")
              guid
              contentSnippet
              fields {
                slug
              }
              enclosure {
                url
              } 
              content {
                encoded
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allFeedDeveloperTea.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: podcastEpisode,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })

  return Promise.all([blog, podcast])
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    const parent = getNode(node.parent)
    createNodeField({
      name: `sourceName`,
      node,
      value: parent.sourceInstanceName,
    })
  }

  if (node.internal.type === `FeedDeveloperTea`) {
    const value = slugify(`${node.title}`, {lower: true})
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

}
