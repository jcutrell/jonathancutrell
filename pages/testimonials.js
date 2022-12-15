import React, { useState } from 'react'

import SiteLayout from '../components/SiteLayout'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import { Wrap } from '../components/shared'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { getAllContentIn } from '../helpers/content-helpers'
import siteConfig from '../site-config'

const TestimonialWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 45rem;
  margin: 0 auto;
  blockquote {
    border: none;
    border-image: linear-gradient(180deg, #008aed, #b35fff) 1;
    border-width: 0;
    border-left-width: 5px;
    border-left-style: solid;
    padding-left: 1rem;
    margin-left: 0;
  }
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 40rem;
`

const Testimonial = styled.div`
  padding: 2rem;
  padding-left: 0;
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

const PostFilter = props => {
  const [filter, setFilter] = useState('All')

  const clickTag = tag => {
    setFilter(tag)
  }

  const renderTag = (tag, onClick) => {
    return (
      <Tag onClick={() => clickTag(tag)} active={filter == tag}>
        {tag}
      </Tag>
    )
  }

  const filterPosts = posts => {
    if (filter && filter !== 'All') {
      return posts.filter(post => post.tags.includes(filter))
    } else {
      return posts
    }
  }

  const tags = Array.from(
    new Set(
      [].concat.apply(
        [],
        (props.posts || []).map(post => post.tags)
      )
    )
  )
  tags.unshift('All')
  const posts = filterPosts(props.posts)
  return (
    <>
      <Tags>{tags.map(renderTag)}</Tags>
      <TestimonialWrap>
        {props.children({ ...props, posts: posts })}
      </TestimonialWrap>
    </>
  )
}

class BlogIndex extends React.Component {
  render() {
    const { data, posts } = this.props
    const siteTitle = siteConfig.title

    return (
      <>
        <SiteLayout location={this.props.location} title={siteTitle}>
          <Wrap>
            <h3>What People Say</h3>
            <p>Here's what some people have said about working with me.</p>
            <PostFilter {...this.props} posts={posts}>
              {props =>
                props.posts.map(post => {
                  const { title, subtitle } = post
                  return (
                    <Testimonial key={post.slug}>
                      <blockquote>
                        <MDXRemote {...post.mdxSource} />
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
          </Wrap>
        </SiteLayout>
      </>
    )
  }
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time

  const posts = await getAllContentIn({ folder: 'testimonials' })

  await Promise.all(
    posts.map(async post => {
      post.mdxSource = await serialize(post.content, {
        parseFrontmatter: false,
      })
      return
    })
  )

  return {
    props: {
      posts,
    },
  }
}

export default BlogIndex

/*
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
*/
