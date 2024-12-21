import { useRouter } from 'next/router'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import styled from 'styled-components'
import {
  getAllContentIn,
  getContentItem,
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
  width: 80%;
  h2 {
    margin-top: 2.6rem;
  }
  p {
    margin-bottom: 2.2rem;
  }
`

const components = {
  Blockquote: (props) => (
    <blockquote>
      <div className="inner">{props.children}</div>
    </blockquote>
  ),
}

const NoteTemplate = (props) => {
  const router = useRouter()
  const { slug } = router.query
  const { post, next, prev } = props

  return (
    <SiteLayout location={slug} title={post.title}>
      <Wrap>
        <Article>
          <h1>{post.title}</h1>
          <p>{pubDate(post.date)}</p>
          <MDXRemote {...post.mdxSource} components={components} />
          <ul>
            <li>
              {prev && (
                <Link href={`/notes/${prev.slug}`} rel="prev">
                  ← Previous: {prev.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link href={`/notes/${next.slug}`} rel="next">
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
  const notes = await getAllContentIn({ folder: 'notes' })
  const slugs = notes.map((note) => note.slug)
  const paths = slugs.map((s) => ({ params: { slug: s } }))
  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Note component
  // will receive `posts` as a prop at build time
  const { params } = context

  const slugs = getSlugsIn({ folder: 'notes' })
  const currInd = slugs.indexOf(params.slug)
  const nextInd = currInd + 1
  const nextSlug = slugs[nextInd % slugs.length]
  const prevInd = nextInd == 1 ? slugs.length - 1 : nextInd - 2
  const prevSlug = slugs[prevInd]

  const post = await getContentItem(params.slug, 'notes')
  const next = await getContentItem(nextSlug, 'notes')
  const prev = await getContentItem(prevSlug, 'notes')
  post.mdxSource = await serialize(post.content, mdxOptions)

  return {
    props: {
      post,
      next,
      prev,
    },
  }
}

export default NoteTemplate
