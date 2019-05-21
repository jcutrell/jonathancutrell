import React from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import BlogLayout from '../components/BlogLayout'
import Sidebar from '../components/Sidebar'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'

const TestimonialWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 80rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40rem;
  margin: 0 auto;
`

const Testimonial = styled.div`
  padding: 2rem;
  margin-bottom: 2rem;
  width: 40rem;
  blockquote {
    overflow: hidden;
  }
  cite {
    margin-bottom: 0;
  }
  h5 {
    margin-top: 0;
  }
  p {
    margin: 0;
  }
`

const Tag = styled.a`
  display: inline-block;
  padding: 0.2rem 0.6rem;
  cursor: pointer;
  background: ${props => (props.active ? '#f4f8ff' : 'transparent')};
`

class PostFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'All',
    }
  }

  clickTag = tag => {
    this.setState({ filter: tag })
  }

  renderTag = (tag, onClick) => {
    return (
      <Tag onClick={() => this.clickTag(tag)} active={this.state.filter == tag}>
        {tag}
      </Tag>
    )
  }

  filterPosts = posts => {
    if (this.state.filter && this.state.filter !== 'All') {
      return posts.filter(post =>
        post.node.frontmatter.tags.includes(this.state.filter)
      )
    } else {
      return posts
    }
  }

  render() {
    const tags = Array.from(
      new Set(this.props.posts.flatMap(post => post.node.frontmatter.tags))
    )
    tags.unshift('All')
    const posts = this.filterPosts(this.props.posts)
    return (
      <React.Fragment>
        <Tags>{tags.map(this.renderTag)}</Tags>
        <TestimonialWrap>
          {this.props.children({ ...this.props, posts: posts })}
        </TestimonialWrap>
      </React.Fragment>
    )
  }
}

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <React.Fragment>
        <BlogLayout location={this.props.location} title={siteTitle}>
          <h3>Testimonials</h3>
          <p>
            Some people have said nice things about my work. Here's a few.
            (People have also had plenty of criticisms, so I'm certainly under
            no illusion that I'm the solution to all the world's problems.)
          </p>
        </BlogLayout>
        <div>
          <PostFilter {...this.props} posts={data.allMdx.edges}>
            {props =>
              props.posts.map(({ node }) => {
                const { title, subtitle } = node.frontmatter
                return (
                  <Testimonial key={node.fields.slug}>
                    <blockquote>
                      <MDXRenderer>{node.code.body}</MDXRenderer>
                    </blockquote>
                    <cite>
                      <strong>{title}</strong>
                      <br />
                    </cite>
                    <i>{subtitle}</i>
                  </Testimonial>
                )
              })
            }
          </PostFilter>
        </div>
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
      filter: { fields: { sourceName: { eq: "testimonials" } } }
    ) {
      edges {
        node {
          code {
            body
          }
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
