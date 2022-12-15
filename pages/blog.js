import React from 'react'

import { getAllContentIn, pubDate } from '../helpers/content-helpers'
import siteConfig from '../site-config'
import styled from 'styled-components'

import SiteLayout from '../../components/SiteLayout'
import { Wrap } from '../../components/shared'
import Link from 'next/link'
import Footer from '../../components/Footer'

const BlogPost = styled.section`
  margin-bottom: 1rem;
`

class BlogIndex extends React.Component {
  render() {
    const { posts } = this.props
    const siteTitle = siteConfig.title

    return (
      <SiteLayout location={this.props.location} title={siteTitle}>
        <Wrap>
          <h2>Blog</h2>
          {posts.map((post) => {
            const title = post.title || post.slug
            return (
              <BlogPost key={post.slug}>
                <h3>
                  <Link
                    style={{ boxShadow: `none` }}
                    href={`/blog/${post.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{pubDate(post.date)}</small> -{' '}
                <small>{post.readingTime}</small>
                <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              </BlogPost>
            )
          })}
          <Footer />
        </Wrap>
      </SiteLayout>
    )
  }
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  const posts = await getAllContentIn({ folder: 'blog' })

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
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { sourceName: { eq: "blog" } }
        frontmatter: { tags: { nin: ["Personal"] } }
      }
    ) {
      edges {
        node {
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
*/
