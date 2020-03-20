import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"

import Bio from '../components/Bio'
import SiteLayout from '../components/SiteLayout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

const PlayerUrl = (audioUrl) => audioUrl.replace('audio.', 'embed.').replace('.mp3', '');

const Player = ({ url }) => (
	<div>
		<iframe frameBorder='0' height='200px' scrolling='no' seamless src={`${PlayerUrl(url)}?color=f5f5f5`} width='100%'></iframe>
	</div>
)

class PodcastEpisodeTemplate extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const { data } = this.props;
    const episode = data.feedDeveloperTea;

    return (
      <SiteLayout location={this.props.location} title={siteTitle}>
        <SEO title={episode.title} description={episode.contentSnippet} />
        <h1>{episode.title}</h1>
        {<Player url={episode.enclosure.url} />}
        <hr
          style={{
            marginBottom: rhythm(2),
            marginTop: rhythm(2),
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: episode.content.encoded}} />
      </SiteLayout>
    )
  }
}

export default PodcastEpisodeTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    feedDeveloperTea(fields: { slug: { eq: $slug }}) {
      id
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
`
