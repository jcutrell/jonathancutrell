import React from 'react'
import * as humanizeString from 'humanize-string'

import styled from 'styled-components'

import { serialize } from 'next-mdx-remote/serialize'

import { getAllContentIn } from '../helpers/content-helpers'
import siteConfig from '../site-config'

import SiteLayout from '../components/SiteLayout'
import { Wrap } from '../components/shared'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'

const Model = styled.div`
  width: 100%;
  margin-bottom: 2rem;
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

class BlogIndex extends React.Component {
  render() {
    const { posts } = this.props
    const siteTitle = siteConfig.title

    return (
      <>
        <SiteLayout location={this.props.location} title={siteTitle} />
        <Wrap>
          {posts
            .filter((post) => post.content.length)
            .map((post) => {
              const { subtitle } = post
              return (
                <Model key={post.slug}>
                  <h2>
                    <Link href={`/mental-models/${post.slug}`}>
                      {humanizeString(post?.title || '') ||
                        humanizeString(post.slug.replace(/\//g, ''))}
                    </Link>
                  </h2>
                  <blockquote>
                    <MDXRemote {...post.mdxSource} />
                  </blockquote>
                  <i>{subtitle}</i>
                </Model>
              )
            })}
        </Wrap>
      </>
    )
  }
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time

  const posts = await getAllContentIn({
    folder: 'mental-models',
    extension: 'mdx',
  })

  await Promise.all(
    posts.map(async (post) => {
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
