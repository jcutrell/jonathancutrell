import React from 'react'

import Bio from '../components/Bio'
import SiteLayout from '../components/SiteLayout'
import Footer from '../components/footer'
import SEO from '../components/seo'



class PodcastEpisodeTemplate extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const { data } = this.props;
    const episode = data.feedDeveloperTea;

    return (
      <SiteLayout location={this.props.location} title={siteTitle}>
        <SEO title={episode.title} description={episode.contentSnippet} />
        <h1>{episode.title}</h1>
        <hr
          style={{
            marginBottom: rhythm(2),
            marginTop: rhythm(2),
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: episode?.content?.encoded}} />
        <Footer />
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
    }
  }
`
