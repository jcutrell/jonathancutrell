import { useRouter } from 'next/router'

import siteConfig from '../../site-config'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import styled from 'styled-components'
import {
  getArticle,
  getAllArticles,
  getSlugsIn,
  pubDate,
} from '../../helpers/content-helpers'
import { mdxOptions } from '../../site-config'
import SiteLayout from '../../components/SiteLayout'
import { Wrap } from '../../components/shared'
import Link from 'next/link'
import Footer from '../../components/footer'
import Bio from '../../components/Bio'

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
  const { post, next, prev } = props

  return (
    <SiteLayout location={slug} title={siteTitle}>
      <Wrap>
        <Article>
          <h1>{post.title}</h1>
          <p>{pubDate(post.date)}</p>
          <MDXRemote {...post.mdxSource} />
          <ul>
            <li>
              {prev && (
                <Link href={`/blog/${prev.slug}`} rel="prev">
                  ← Previous: {prev.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link href={`/blog/${next.slug}`} rel="next">
                  Next: {next.title} →
                </Link>
              )}
            </li>
          </ul>
          <hr />
          <Bio />
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

  const slugs = getSlugsIn({ folder: 'blog' })
  const currInd = slugs.indexOf(params.slug)
  const nextInd = currInd + 1
  const nextSlug = slugs[nextInd % slugs.length]
  const prevInd = nextInd == 1 ? slugs.length - 1 : nextInd - 2
  const prevSlug = slugs[prevInd]

  const post = await getArticle(params.slug)
  const next = await getArticle(nextSlug)
  const prev = await getArticle(prevSlug)
  post.mdxSource = await serialize(post.content, mdxOptions)

  return {
    props: {
      post,
      next,
      prev,
    },
  }
}

export default BlogPostTemplate
