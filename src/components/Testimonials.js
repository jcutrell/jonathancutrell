import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Sidebar from '../components/Sidebar'
import Testimonials from '../components/Testimonials'
import { rhythm } from '../utils/typography'
import styled, { keyframes } from 'styled-components'

const Testimonial = styled.div`
  padding: 4rem;
`

const TestimonialContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 33% 33% 33%;
  grid-auto-flow: row;
  width: 80rem;
`

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { fields: { sourceName: { eq: "testimonials" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          code {
            body
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

class BlogIndex extends React.Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => {
          const posts = data.allMdx.edges.map(edge => edge.node)
          return (
            <TestimonialContainer>
              {posts.map(post => {
                return (
                  <Testimonial>
                    <MDXRenderer>{post.code.body}</MDXRenderer>
                  </Testimonial>
                )
              })}
            </TestimonialContainer>
          )
        }}
      />
    )
  }
}

export default BlogIndex
