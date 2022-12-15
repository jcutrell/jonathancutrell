import React from 'react'

import Bio from '../../components/Bio'
import SiteLayout from '../../components/SiteLayout'
import Footer from '../../components/footer'
import SEO from '../../components/seo'



class PodcastEpisodeTemplate extends React.Component {
  render() {
    const { data, episode } = this.props;
    const siteTitle = episode.title

    return (
      <SiteLayout location={this.props.location} title={siteTitle}>
        <h1>{episode.title}</h1>
          <iframe
            height="200px"
            width="100%"
            frameBorder="no"
            scrolling="no"
            seamless
            tw={"pt-2 pb-2 my-6"}
            src={`https://player.simplecast.com/${episode.id}?dark=false`}
          ></iframe>
        <hr/>
        <div dangerouslySetInnerHTML={{ __html: episode.result }} />
        <Footer />
      </SiteLayout>
    )
  }
}

export default PodcastEpisodeTemplate

/*
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
*/

export async function getStaticPaths() {
  const res = await fetch(
    `https://api.simplecast.com/podcasts/${process.env.PODCAST_ID}/episodes?limit=1500&offset=0`,
    {
      headers: {
        authorization: `Bearer ${process.env.SIMPLECAST_API_KEY}`,
      },
    }
  );
  const episodes = await res.json();
  return {
    paths: episodes.collection.map((ep) => `/episodes/${ep.id}`),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const episode_id = context.params.id;
  const res = await fetch(`https://api.simplecast.com/episodes/${episode_id}`, {
    headers: {
      authorization: `Bearer ${process.env.SIMPLECAST_API_KEY}`,
    },
  });
  const episode = await res.json();

  const result = (episode.long_description || episode.description || "<div />")

  //episode.mdxSource = await serialize(result, { parseFrontmatter: false });
  episode.result = result;

  return {
    props: {
      episode,
    },
  };
}


