import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { rhythm, scale } from '../utils/typography'

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

class Layout extends React.Component {
  isActive = ({ isCurrent }) => {
    return isCurrent ? { isActive: true } : { isActive: false }
  }

  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
    } else {
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
          padding: '0 2rem',
          maxWidth: '45rem',
        }}
      >
        <h2>
          <Link to="/">Jonathan Cutrell</Link>
        </h2>
        <Nav style={{ marginTop: '2rem' }}>
          <NavLink activeClassName={activeNavItemClass} to="/writing">
            Writing
          </NavLink>
          <NavLink activeClassName={activeNavItemClass} to="/developer-tea">
            Podcast
          </NavLink>
          <NavLink activeClassName={activeNavItemClass} to="/testimonials">
            Testimonials
          </NavLink>
        </Nav>
        {children}
      </div>
    )
  }
}

export default Layout
