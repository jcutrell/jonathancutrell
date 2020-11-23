import React from 'react'
import { Link, graphql } from 'gatsby'
import { LinkWithArrow } from '../components/shared';

import Bio from '../components/Bio'
import SiteLayout from '../components/SiteLayout'
import SEO from '../components/seo'
import Sidebar from '../components/Sidebar'
import Footer from '../components/footer'
import { rhythm } from '../utils/typography'


class PodcastIndex extends React.Component {
	constructor(props){
		super(props);
		this.state={ showEps: [] }
	}
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const episodes = data.allFeedDeveloperTea.edges
		const showCount = this.state.showAll ? episodes.length : 100;
    console.log(episodes);

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
				<p>I'm very thankful that we've been able to publish nearly 900 episodes of Developer Tea so far!</p>
				<p>P.S. If you want to give back and support Developer Tea, <a href="https://itunes.apple.com/us/podcast/developer-tea/id955596067?mt=2">leave a review on iTunes!</a> You can also email me at <a href="mailto:developertea@gmail.com">developertea@gmail.com</a> to talk about the show.</p>
        {episodes.slice(0, showCount).map(({ node }, i) => {
          const title = node.title
          return (
            <div key={node.guid}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
							{title}<br/>
              <small>{node.isoDate}</small>
              </h3><br/>
              <p><LinkWithArrow to={node.enclosure.url} target="blank">Listen to this episode</LinkWithArrow></p>
              <div
                dangerouslySetInnerHTML={{ __html: node.contentSnippet }}
              />
            </div>
          )
        })}
        <div 
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          {!this.state.showAll && <a onClick={e => this.setState({ showAll: true })}>Show All Episodes</a>}
        </div>
        <Footer />
      </SiteLayout>
    )
  }
}

export default PodcastIndex

export const pageQuery = graphql`
  query 
{
  site {
    siteMetadata {
      title
    }
  }
  allFeedDeveloperTea {
    edges {
      node {
        title
				isoDate(formatString: "MMMM Do, YYYY")
				guid
        contentSnippet
        fields {
          slug
        }
        enclosure {
          url
        } 
        content {
          encoded
        }
      }
    }
  }
}
`
