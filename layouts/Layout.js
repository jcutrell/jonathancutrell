import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import code from '../components/code'
import { useRouter } from 'next/router'

const components = {
  pre: props => <div {...props} />,
  code
}

const Layout = (props) => {
  const { location, title, children } = props
  const router = useRouter()
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

export default Layout
