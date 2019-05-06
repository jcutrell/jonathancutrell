import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
              alignItems: 'center',
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1),
                marginBottom: 0,
                minWidth: 100,
                width: 100,
                height: 100,
                borderRadius: `100%`,
              }}
            />
            <p style={{ margin: 0, maxWidth: '32rem' }}>
              Written by <strong>{author}</strong>, engineer at{' '}
              <a href="https://clearbit.com/">Clearbit</a> and podcast host at{' '}
              <a href="https://spec.fm/podcasts/developer-tea">Developer Tea</a>
              , amongst other things.
              {` `}
              <a href={`https://twitter.com/${social.twitter}`}>
                You can follow him on Twitter at @jcutrell.
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
