import siteConfig from '../site-config'

function Bio() {
  const { author } = siteConfig
  return (
    <div>
      <p style={{ margin: 0, maxWidth: '32rem' }}>
        Written by <strong>{author.name}</strong>, Engineering Manager at{' '}
        <a href="https://getgarner.com">Garner Health</a> and podcast host at{' '}
        <a href="https://developertea.com">Developer Tea</a>.
      </p>
    </div>
  )
}

export default Bio
