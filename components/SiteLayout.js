import styled, { createGlobalStyle } from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

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
const NavLink = styled(Link)`
  color: #234156;
  display: inline-block;
  margin-right: 2rem;
  text-decoration: none;
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
  pre: (props) => <div {...props} />,
}

const activeIf = (route, router) => {
  return route === router.pathname ? activeNavItemClass : ''
}

const SiteWrap = styled.main`
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
  max-width: 45rem;
  padding-bottom: 2rem;
`

const Layout = ({ title, children }) => {
  const router = useRouter()

  return (
    <SiteWrap>
      <Head>
        <title>{title}</title>
      </Head>
      <GlobalStyle />
      <h2>
        <Link href="/">
          <GradientText>Jonathan Cutrell</GradientText>
        </Link>
      </h2>
      <Nav style={{ marginTop: '2rem' }}>
        <NavLink className={activeIf('/blog', router)} href="/blog">
          Blog
        </NavLink>
        <NavLink className={activeIf('/notes', router)} href="/notes">
          Notes
        </NavLink>
        <NavLink className={activeIf('/books', router)} href="/books">
          Books
        </NavLink>
        <NavLink className={activeIf('/episodes', router)} href="/episodes">
          Podcast
        </NavLink>
        <NavLink
          className={activeIf('/mental-models', router)}
          href="/mental-models"
        >
          Mental Models
        </NavLink>
        <NavLink
          className={activeIf('/testimonials', router)}
          href="/testimonials"
        >
          Testimonials
        </NavLink>
        <NavLink className={activeIf('/values', router)} href="/values">
          Values
        </NavLink>
      </Nav>
      <MDXProvider components={components}>{children}</MDXProvider>
    </SiteWrap>
  )
}

export default Layout
