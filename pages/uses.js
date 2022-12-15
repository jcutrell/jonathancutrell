

import { serialize } from 'next-mdx-remote/serialize'

import { getAllContentIn } from '../helpers/content-helpers'
import siteConfig from '../site-config'
import { mdxOptions } from '../site-config'

const Uses = props => {
  const siteTitle = siteConfig.title
  const posts = props.posts

  return (
    <SiteLayout location={props.location} title={siteTitle}>
      <SEO title="Jonathan Cutrell :: Uses" />
      <Wrap>
        <h1>Uses</h1>
        {posts.map(val => (
          <MDXRemote {...val.mdxSource} />
        ))}
        <hr />
        <Bio />
      </Wrap>
    </SiteLayout>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time

  const posts = await getAllContentIn({ folder: 'uses' })

  await Promise.all(
    posts.map(async post => {
      post.mdxSource = await serialize(post.content, mdxOptions)
      return
    })
  )

  return {
    props: {
      posts,
    },
  }
}

export default Uses
