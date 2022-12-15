import React from 'react'

import Bio from '../components/Bio'
import SiteLayout from '../components/SiteLayout'
import SEO from '../components/seo'

class Values extends React.Component {
  render() {
    const {data} = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    console.log(posts);

    return (
      <SiteLayout location={this.props.location} title={siteTitle}>
        <SEO title="Jonathan Cutrell :: Uses" />
        <h1>Uses</h1>
        {posts.map(({node}) => (
          <MDXRenderer>{node.body}</MDXRenderer>
        ))}
        <hr
          style={{
            marginBottom: rhythm(2),
            marginTop: rhythm(2),
          }}
        />
        <Bio />
      </SiteLayout>
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
      sort: { fields: [frontmatter___date], order: ASC }
      filter: {
        fields: { sourceName: { eq: "uses" } }
        frontmatter: { tags: { nin: ["Personal"] } }
      }
    ) {
      edges {
        node {
          body
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
