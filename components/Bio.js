import siteConfig from '../site-config'

function Bio() {
  const { author, social } = siteConfig
  return (
    <div>
      <p style={{ margin: 0, maxWidth: '32rem' }}>
        Written by <strong>{author.name}</strong>, Engineering Manager at{' '}
        <a href="https://guildeducation.com">Guild Education</a> and podcast
        host at <a href="https://developertea.com">Developer Tea</a>.{` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          You can follow him on Twitter at @jcutrell.
        </a>
      </p>
    </div>
  )
}

export default Bio
