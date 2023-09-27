import React from 'react'

import { getAllContentIn, pubDate } from '../helpers/content-helpers'
import { createAndSaveRSS } from '../helpers/rss-helpers'
import siteConfig from '../site-config'
import styled from 'styled-components'

import SiteLayout from '../components/SiteLayout'
import { Wrap } from '../components/shared'
import Link from 'next/link'
import Footer from '../components/footer'

const Note = styled.section`
  margin-bottom: 1rem;
`

class NoteIndex extends React.Component {
  render() {
    const { posts } = this.props
    const siteTitle = siteConfig.title

    return (
      <SiteLayout location={this.props.location} title={siteTitle}>
        <Wrap>
          <h2>Notes</h2>
          {posts.map((post) => {
            const title = post.title || post.slug
            return (
              <Note key={post.slug}>
                <h3>
                  <Link
                    style={{ boxShadow: `none` }}
                    href={`/notes/${post.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{pubDate(post.date)}</small> -{' '}
                <small>{post.readingTime}</small>
                <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              </Note>
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
  const posts = await getAllContentIn({ folder: 'notes' })

  createAndSaveRSS({ items: posts, itemType: 'Note' })

  return {
    props: {
      posts,
    },
  }
}

export default NoteIndex
