import React from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import * as humanizeString from 'humanize-string'

import BlogLayout from '../components/BlogLayout'
import Sidebar from '../components/Sidebar'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'

const TestimonialWrap = styled.section`
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

const Testimonial = styled.div`
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
        <BlogLayout location={this.props.location} title={siteTitle} />
        <TestimonialWrap>
          {data.allMdx.edges
            .filter(({ node }) => node.rawBody.length)
            .map(({ node }) => {
              const { subtitle } = node.frontmatter
              return (
                <Testimonial key={node.fields.slug}>
                  <h2>{humanizeString(node.fields.slug.replace(/\//g, ''))}</h2>
                  <blockquote>
                    <MDXRenderer>{node.code.body}</MDXRenderer>
                  </blockquote>
                  <cite>
                    <br />
                  </cite>
                  <i>{subtitle}</i>
                </Testimonial>
              )
            })}
        </TestimonialWrap>
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
      sort: { fields: [frontmatter___priority], order: ASC }
      filter: { fields: { sourceName: { eq: "mental-models" } } }
    ) {
      edges {
        node {
          rawBody
          code {
            body
          }
          fields {
            slug
          }
          frontmatter {
            subtitle
            tags
            priority
          }
        }
      }
    }
  }
`
