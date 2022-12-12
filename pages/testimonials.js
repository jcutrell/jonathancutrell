import React from 'react'

import SiteLayout from '../components/SiteLayout'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'

const TestimonialWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 45rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  blockquote {
    border: none;
    border-image: linear-gradient(180deg, #008aed, #b35fff) 1;
    border-width: 0;
    border-left-width: 5px;
    border-left-style: solid;
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
  max-width: 40rem;
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

const flatMap = (f, xs) => xs.reduce((acc, x) => acc.concat(f(x)), [])

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
      new Set(
        [].concat.apply(
          [],
          (this.props.posts || []).map(post => post.node.frontmatter.tags)
        )
      )
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
        <SiteLayout location={this.props.location} title={siteTitle}>
          <h3>What People Say</h3>
          <p>Here's what some people have said about working with me.</p>
        </SiteLayout>
        <div>
          <PostFilter {...this.props} posts={data.allMdx.edges}>
            {props =>
              props.posts.map(({ node }) => {
                const { title, subtitle } = node.frontmatter
                return (
                  <Testimonial key={node.fields.slug}>
                    <blockquote>
                      <MDXRenderer>{node.body}</MDXRenderer>
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
