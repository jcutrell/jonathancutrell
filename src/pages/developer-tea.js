import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import BlogLayout from '../components/BlogLayout'
import SEO from '../components/seo'
import Sidebar from '../components/Sidebar'
import { rhythm } from '../utils/typography'

const PlayerUrl = (audioUrl) => audioUrl.replace('audio.', 'embed.').replace('.mp3', '');

const Player = ({ url }) => (
	<div>
		<iframe frameBorder='0' height='200px' scrolling='no' seamless src={`${PlayerUrl(url)}?color=f5f5f5`} width='100%'></iframe>
	</div>
)

class BlogIndex extends React.Component {
	constructor(props){
		super(props);
		this.state={ showEps: [] }
	}
	showPlayerForEpisode(guid){
	  const shownEps = this.state.showEps 
		shownEps.push(guid);
		this.setState({showEps: shownEps})
	}
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const episodes = data.allFeedDeveloperTea.edges
		const showCount = this.state.showAll ? episodes.length : 100;

    return (
      <BlogLayout location={this.props.location} title={siteTitle}>
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
				<p>I'm very thankful that we've been able to publish {episodes.length} episodes of Developer Tea so far!</p>
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
							{title}
              </h3>
              <small>{node.isoDate}</small>
              <br />
							{(i < 20 || this.state.showEps.includes(node.guid)) && <Player url={node.enclosure.url} />}
							{(i >= 20 && !this.state.showEps.includes(node.guid)) && <a onClick={() => this.showPlayerForEpisode(node.guid)}>Show Player</a>}
              <div
                dangerouslySetInnerHTML={{ __html: node.contentSnippet }}
                style={{ marginBottom: rhythm(3) }}
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
      </BlogLayout>
    )
  }
}

export default BlogIndex

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
