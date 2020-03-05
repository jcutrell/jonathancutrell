import React from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Bio from '../components/Bio'
import BlogLayout from '../components/BlogLayout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

class Values extends React.Component {
  render() {
    const {data} = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    console.log(posts);

    return (
      <BlogLayout location={this.props.location} title={siteTitle}>
        <SEO title="Jonathan Cutrell :: My Values" />
        <h1>My values</h1>
        {posts.map(({node}) => (
          <MDXRenderer>{node.code.body}</MDXRenderer>
        ))}
        <hr
          style={{
            marginBottom: rhythm(2),
            marginTop: rhythm(2),
          }}
        />
        <Bio />
      </BlogLayout>
    )
  }
}

export default Values

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { sourceName: { eq: "values" } }
        frontmatter: { tags: { nin: ["Personal"] } }
      }
    ) {
      edges {
        node {
          code {
            body
          }
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
