import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import SiteLayout from '../components/SiteLayout'
import SEO from '../components/seo'
import Sidebar from '../components/Sidebar'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showEps: [] }
  }
  showPlayerForEpisode(guid) {
    const shownEps = this.state.showEps
    shownEps.push(guid)
    this.setState({ showEps: shownEps })
  }
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const episodes = data.allFeedTeaBreakChallenge.edges
    const showCount = episodes.length

    return (
      <SiteLayout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[
            `Jonathan Cutrell`,
            `Developer Tea`,
            `spec.fm`,
            `clearbit`,
          ]}
        />
        <h3>Developer Tea Episodes</h3>
        <p>
          I'm very thankful that we've been able to publish {episodes.length}{' '}
          episodes of Developer Tea so far!
        </p>
        <p>
          P.S. If you want to give back and support Developer Tea,{' '}
          <a href="https://itunes.apple.com/us/podcast/developer-tea/id955596067?mt=2">
            leave a review on iTunes!
          </a>
        </p>
        {episodes.slice(0, showCount).map(({ node }, i) => {
          const title = node.title
          return (
            <div key={node.guid}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                {title}
              </h3>
              <small>{node.isoDate}</small>
              <br />
              <div
                dangerouslySetInnerHTML={{ __html: node.content }}
                style={{ marginBottom: rhythm(3) }}
              />
            </div>
          )
        })}
      </SiteLayout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFeedTeaBreakChallenge {
      edges {
        node {
          title
          isoDate(formatString: "MMMM Do, YYYY")
          content
        }
      }
    }
  }
`
