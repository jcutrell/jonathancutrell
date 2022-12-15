import React from 'react'

import siteConfig from '../site-config'

import { getEpisodes, pubDate, duration } from '../helpers/content-helpers'

const SHOW_COUNT = 50

class PodcastIndex extends React.Component {
  render() {
    const { data, episodes = [] } = this.props
    const siteTitle = siteConfig.title

    return (
      <SiteLayout location={this.props.location} title={siteTitle}>
        <Wrap>
          <h2>Developer Tea Episodes</h2>
          <p>
            I'm very thankful that we've been able to publish over 1,000
            episodes of Developer Tea so far!{' '}
            <em>
              Note: Only the last 50 episodes of the show can be found here. The
              whole catalog can be found at{' '}
              <a href="https://developertea.com">DeveloperTea.com</a>
            </em>
          </p>
          <p>
            P.S. If you want to give back and support Developer Tea,{' '}
            <a href="https://itunes.apple.com/us/podcast/developer-tea/id955596067?mt=2">
              leave a review on iTunes!
            </a>{' '}
            You can also email me at{' '}
            <a href="mailto:developertea@gmail.com">developertea@gmail.com</a>{' '}
            to talk about the show.
          </p>
          {episodes.slice(0, SHOW_COUNT).map((node, i) => {
            return (
              <div key={node.guid}>
                <h3>
                  <Link href={`/episodes/${node.id}`}>{node.title}</Link>
                  <br />
                  <small>{pubDate(node.published_at)}</small>
                </h3>
                <span>Listen time: {duration(node.duration)}</span>
                <br />
                <div dangerouslySetInnerHTML={{ __html: node.description }} />
                <p>
                  <LinkWithArrow href={`/episodes/${node.id}`} target="blank">
                    Listen to this episode
                  </LinkWithArrow>
                </p>
              </div>
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
  const episodes = await getEpisodes({ pageSize: SHOW_COUNT })

  return {
    props: {
      episodes: episodes.collection,
    },
  }
}

export default PodcastIndex
