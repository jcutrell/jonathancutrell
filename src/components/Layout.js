import React from 'react'
import { Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from './CodeBlock'

import { rhythm, scale } from '../utils/typography'

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
}

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = null
    if (location.pathname !== rootPath) {
      header = (
        <h3
          style={{
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
        }}
      >
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    )
  }
}

export default Layout
