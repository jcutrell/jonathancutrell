import React from 'react'
import siteConfig from '../site-config'

function Bio() {
  const { author, social } = siteConfig
  return (
    <div>
      <p style={{ margin: 0, maxWidth: '32rem' }}>
        Written by <strong>{author.name}</strong>, Director of Engineering at{' '}
        <a href="https://www.pbs.org/about/careers/current-openings/">PBS</a>{' '}
        and podcast host at{' '}
        <a href="https://spec.fm/podcasts/developer-tea">Developer Tea</a>.{` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          You can follow him on Twitter at @jcutrell.
        </a>
      </p>
    </div>
  )
}

export default Bio
