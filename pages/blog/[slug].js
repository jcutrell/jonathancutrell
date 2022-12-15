import React from 'react'

import { useRouter } from 'next/router'

import matter from 'gray-matter'
import Link from 'next/link'
import Bio from '../../components/Bio'
import SiteLayout from '../../components/SiteLayout'
import SEO from '../../components/seo'
import Footer from '../../components/footer'
import { Wrap } from '../../components/shared'
import siteConfig from '../../site-config'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import styled from 'styled-components'
import {
  getArticle,
  getAllArticles,
  pubDate,
} from '../../helpers/content-helpers'
import { mdxOptions } from '../../site-config'

const Article = styled.article`
  width: 100%;
  h2 {
    margin-top: 2.6rem;
  }
  p {
    margin-bottom: 2.2rem;
  }
`

const BlogPostTemplate = (props) => {
  const router = useRouter()
  const { slug } = router.query
  const siteTitle = siteConfig.title
  const { post } = props
  const previous = false
  const next = false

  return (
    <SiteLayout location={slug} title={siteTitle}>
      <Wrap>
        <Article>
          <h1>{post.title}</h1>
          <p>{pubDate(post.date)}</p>
          <MDXRemote {...post.mdxSource} />
          <hr />
          <Bio />

          <ul>
            <li>
              {previous && (
                <Link href={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link href={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </Article>
      </Wrap>
      <Footer />
    </SiteLayout>
  )
}

export async function getStaticPaths() {
  const articles = await getAllArticles()
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
  const post = await getArticle(params.slug)
  post.mdxSource = await serialize(post.content, mdxOptions)

  return {
    props: {
      post,
    },
  }
}

export default BlogPostTemplate
