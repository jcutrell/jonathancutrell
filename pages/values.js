import React from 'react'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { getAllContentIn } from '../helpers/content-helpers'
import siteConfig from '../site-config'
import { mdxOptions } from '../site-config'
import Bio from '../components/Bio'
import SiteLayout from '../components/SiteLayout'
import { Wrap } from '../components/shared'
import { createAndSaveValuesAPI } from '../helpers/api-helpers'

class Values extends React.Component {
  render() {
    const { posts } = this.props
    const siteTitle = siteConfig.title

    return (
      <SiteLayout location={this.props.location} title={siteTitle}>
        <Wrap>
          <h1>My values</h1>
          {posts.map((val) => (
            <MDXRemote {...val.mdxSource} key={val.title} />
          ))}
          <hr />
          <Bio />
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

  const posts = await getAllContentIn({ folder: 'values' })

  createAndSaveValuesAPI({ items: posts })

  await Promise.all(
    posts.map(async (post) => {
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

export default Values
