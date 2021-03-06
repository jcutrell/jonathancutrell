import React from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import code from './code'

import { rhythm, scale } from '../utils/typography'

const GlobalStyle = createGlobalStyle`
	blockquote {
    border: none;
		border-image: linear-gradient(180deg,#008aed,#b35fff) 1;
		border-width: 0;
		border-left-width: 5px;
		border-left-style: solid;
	}
`

const Nav = styled.nav`
  @media only screen and (min-width: 60rem) {
    position: absolute;
    top: 2.2rem;
    right: 2rem;
  }
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
`

const activeNavItemClass = 'active-nav-item'
const NavLink = styled(Link).attrs({ activeNavItemClass })`
  color: #234156;
  display: inline-block;
  margin-right: 2rem;
  &.${activeNavItemClass} {
    border-bottom: 2px solid #234156;
  }
`

const GradientText = styled.span`
  background: -webkit-linear-gradient(0deg, #008aed, #b35fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const components = {
  pre: props => <div {...props} />,
  code: code,
}

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = null

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          padding: '0 2rem',
          maxWidth: '45rem',
        }}
      >
        <GlobalStyle />
        <h2>
          <Link to="/">
            <GradientText>Jonathan Cutrell</GradientText>
          </Link>
        </h2>
        <Nav style={{ marginTop: '2rem' }}>
          <NavLink activeClassName={activeNavItemClass} to="/blog">
            Blog
          </NavLink>
          <NavLink activeClassName={activeNavItemClass} to="/books">
            Books
          </NavLink>
          <NavLink activeClassName={activeNavItemClass} to="/developer-tea">
            Podcast
          </NavLink>
          <NavLink activeClassName={activeNavItemClass} to="/mental-models">
            Mental Models
          </NavLink>
          <NavLink activeClassName={activeNavItemClass} to="/testimonials">
            Testimonials
          </NavLink>
        </Nav>
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    )
  }
}

export default Layout
