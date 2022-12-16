import React from 'react'
import * as humanizeString from 'humanize-string'

import styled from 'styled-components'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import SiteLayout from '../../components/SiteLayout'
import Link from 'next/link'

import {
  getAllContentIn,
  getContentBySlug,
} from '../../helpers/content-helpers'
import siteConfig from '../../site-config'

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

class BlogIndex extends React.Component {
  render() {
    const { post } = this.props
    const siteTitle = siteConfig.title
    const { subtitle } = post

    return (
      <>
        <SiteLayout location={this.props.location} title={siteTitle} />
        <Wrap>
          <Model key={post.slug}>
            <h2>
              <Link href={`/mental-models/${post.slug}`}>
                {humanizeString(post?.title || '') ||
                  humanizeString(post.slug.replace(/\//g, '')) ||
                  ''}
              </Link>
            </h2>
            <blockquote>
              <MDXRemote {...post.mdxSource} />
            </blockquote>
            <i>{subtitle}</i>
          </Model>
        </Wrap>
      </>
    )
  }
}

export default BlogIndex

export async function getStaticPaths() {
  const articles = await getAllContentIn({
    folder: 'mental-models',
    extension: 'mdx',
  })
  const slugs = articles.map((article) => article.slug)
  const paths = slugs.map((s) => ({ params: { slug: s } }))
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  const { params } = context
  const post = await getContentBySlug({
    folder: 'mental-models',
    extension: 'mdx',
    slug: params.slug,
  })

  post.mdxSource = await serialize(post.content, { parseFrontmatter: false })

  return {
    props: {
      post,
    },
  }
}
