import React from 'react'
import * as humanizeString from 'humanize-string'

import SiteLayout from '../components/SiteLayout'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'

const Wrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 45rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  blockquote {
    border: none;
    border-image: linear-gradient(180deg, #eb9d6e, #c86dd7) 1;
    border-width: 0;
    border-left-width: 5px;
  }
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 40rem;
  margin: 0 auto;
`

const Model = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  blockquote {
    overflow: hidden;
  }
  cite {
    margin-bottom: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 0;
  }
  p {
  }
`

const Tag = styled.a`
  display: inline-block;
  padding: 0.2rem 0.6rem;
  cursor: pointer;
  background: ${props => (props.active ? '#f4f8ff' : 'transparent')};
`

const flatMap = (f, xs) => xs.reduce((acc, x) => acc.concat(f(x)), [])

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <React.Fragment>
        <SiteLayout location={this.props.location} title={siteTitle} />
        <Wrap>
          {data.allMdx.edges
            .filter(({ node }) => node.rawBody.length)
            .map(({ node }) => {
              const { subtitle } = node.frontmatter
              return (
                <Model key={node.fields.slug}>
                  <h2>{humanizeString(node.frontmatter?.title) || humanizeString(node.fields.slug.replace(/\//g, ''))}</h2>
                  <blockquote>
                    <MDXRenderer>{node.body}</MDXRenderer>
                  </blockquote>
                  <cite>
                    <br />
                  </cite>
                  <i>{subtitle}</i>
                </Model>
              )
            })}
        </Wrap>
      </React.Fragment>
    )
  }
}

export default BlogIndex 
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [fields___slug, frontmatter___title], order: ASC }
      filter: { fields: { sourceName: { eq: "mental-models" } } }
    ) {
      edges {
        node {
          rawBody
          body
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            tags
            priority
          }
        }
      }
    }
  }
`
