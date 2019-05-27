import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import ClearbitLogo from '../components/icons/clearbit-logo'
import DtLogo from '../components/icons/dt-logo'
import SpecLogo from '../components/icons/spec-logo'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Sidebar from '../components/Sidebar'
import Testimonials from '../components/Testimonials'
import { rhythm } from '../utils/typography'
import styled, { keyframes } from 'styled-components'

const PicHeader = styled.div`
  width: 150vw;
  height: 100vh;
  position: fixed;
  background-position: 45% 20%;
  @media only screen and (min-width: 80rem) {
    background-position: 0% 20%;
  }
  top: 0;
  left: 0;
  z-index: -1;
  background-image: url(${props => props.backgroundImageUrl});
  filter: grayscale(50%);
`
const HomeHeader = styled.div`
  height: 80vh;
`

const wave = keyframes`
  0%, 25%, 50%, 75%, 100% {
    transform: rotateZ(0deg);
  }
  12.5%, 37.5%, 62.5%, 87.5%  {
    transform: rotateZ(30deg);
  }
`

const Hand = styled.span`
  display: inline-block;
  margin-right: 1rem;
  animation: ${wave} 3s ease-in-out;
  animation-iteration-count: 1;
`

const HeaderContent = styled.div`
  position: relative;
  padding: 0 5vw;
  @media only screen and (min-width: 80rem) {
    padding: 0 10rem;
  }
`
const HeaderTitle = styled.h1`
  position: relative;
  padding-top: 25vh;
  margin-top: 0;
  font-size: 3rem;
  @media only screen and (min-width: 60rem) {
    font-size: 5rem;
  }
  color: #184258;
`

const SubHeader = styled.h2`
  font-size: 2rem;
  color: #184258;
  max-width: 400px;
  font-weight: 200;
`
const Skill = styled.span`
  display: inline-block;
  padding: 0 2rem 1rem 0;
  font-size: 1.2rem;
`

const Nav = styled.nav`
  position: relative;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  a {
    color: #234156;
    display: inline-block;
    margin-right: 2rem;
  }
`

const Footer = styled.footer`
  text-align: center;
  padding: 1rem 0;
`

const Header = ({ data, picRef }) => {
  return (
    <HomeHeader>
      <HeaderContent>
        <HeaderTitle>
          <Hand>👋</Hand> I'm Jonathan.
        </HeaderTitle>
        <SubHeader>
          I help developers find clarity, perspective, and purpose in their
          careers.
          <Nav style={{ marginTop: '2rem' }}>
            <Link to="/writing">Writing</Link>
            <Link to="/testimonials">Testimonials</Link>
          </Nav>
        </SubHeader>
      </HeaderContent>
      <PicHeader
        ref={picRef}
        backgroundImageUrl={data.avatar.childImageSharp.fixed.src}
      />
    </HomeHeader>
  )
}

const ExperienceWrap = styled.section`
  background: #fff;
  padding: 4rem 2rem;
  color: #888;
  @media only screen and (min-width: 40rem){
    padding: 5rem;
  }
  @media only screen and (min-width: 60rem){
    & > div {
      display: flex;
    }
    & > div > div {
      margin-right: 2rem;
      padding-right: 3rem;
      min-width: 30%;
      max-width: 45%;
    }
    h5 {
      margin-top: 5rem;
      margin-bottom: 3rem;
    }
  }
  h4 {
    font-size: 1.4rem;
    margin-top: 0px;
  }
  }
  @media only screen and (min-width: 80rem){
    padding: 5rem 10rem;
  }
`

const IconWrap = styled.div`
  position: absolute;
  opacity: 0.14;
  top: -3rem;
  left: -6rem;
  z-index: 50;
  width: 75%;
  transform: rotateZ(-20deg);
  transition: transform 0.2s;
  transform-origin: top left;
  @media only screen and (min-width: 60rem) {
    top: 2rem;
    left: -8rem;
    width: 100%;
  }
`
const CurrentWork = styled.div`
  & > div {
    color: #234156;
    border: 1px solid #f0f0f0;
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.01);
    transition: box-shadow 0.3s;
    margin-bottom: 1rem;
    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      ${IconWrap} {
        transform: rotateZ(-25deg) scale(0.8);
      }
    }
  }
`

const Experience = ({ data }) => {
  return (
    <ExperienceWrap>
      <h5>Current Work</h5>
      <CurrentWork>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 100 }}>
            <h4>
              Senior Engineer,{' '}
              <a href="https://clearbit.com/about" target="_blank">
                Clearbit
              </a>
            </h4>
            Building next-generation business data interfaces and world-class
            user experiences.
            <br />
            <a href="https://connect.clearbit.com">
              Here's a project I worked on recently.
            </a>
          </div>
          <IconWrap>
            <ClearbitLogo />
          </IconWrap>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 100 }}>
            <h4>
              Host,{' '}
              <a href="https://spec.fm/pocdasts/developer-tea">Developer Tea</a>
            </h4>
            Developer Tea is a top-100 podcast in the Technology category on
            iTunes. The podcast is approaching 13m all-time downloads by
            listeners in over 200 countries.
            <br />
            <Link to={'/developer-tea'}>
              Latest episode: {data.allFeedDeveloperTea.edges[0].node.title}
            </Link>
          </div>
          <IconWrap>
            <DtLogo />
          </IconWrap>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', zIndex: 100 }}>
            <h4>
              Co-founder, <a href="https://spec.fm">Spec.fm</a>
            </h4>
            I co-founded a podcast network called Spec for designers and
            developers who want to level up in their careers. Spec hosts
            episodes from 13 different podcasts today, with millions of listens.
            <IconWrap>
              <SpecLogo />
            </IconWrap>
          </div>
        </div>
      </CurrentWork>

      <h5>Skills</h5>
      <section>
        <Skill>Leadership and Coaching</Skill>
        <Skill>Speaking / Presentation</Skill>
        <Skill>Technical Writing</Skill>
        <Skill>Software Design</Skill>
        <Skill>JavaScript (React, ES6)</Skill>
        <Skill>Ruby (Sinatra, Rails)</Skill>
        <Skill>Front-end Development (SCSS, build processes)</Skill>
        <Skill>Decision Science</Skill>
      </section>

      <div>
        <div>
          <h5>Previously</h5>I helped grow{' '}
          <a href="https://whitebaord.is">Whiteboard</a>, an agency servicing
          clients with web projects all over the spectrum. As CTO at the agency,
          I worked with companies from non-profit to Fortune 500 to pre-funding
          startup. Before that, I started building digital products in 2007.
          (Those first ones weren't very good though.) I helped start a music
          company and then{' '}
          <a href="https://tutsplus.com/authors/jonathan-cutrell">
            freelanced as a technical writer
          </a>{' '}
          and frontend developer.
          <br />
        </div>
        <div>
          <h5>Notable experiences:</h5>
          <ul>
            <li>
              Architected an app to power a conference experience for over 5,000
              attendees
            </li>
            <li>
              Help build a startup to reimagine the experience around memories
              captured in old VHS home movies
            </li>
            <li>
              Built{' '}
              <a href="https://whiteboard.is/case-studies/understory/">
                proof-of-concept experience for an ed-tech startup
              </a>{' '}
              (and earned a patent for it)
            </li>
            <li>
              Strategize and build system powering{' '}
              <a href="https://purposity.com">Purposity</a>, a donor-to-need
              matching platform
            </li>
          </ul>{' '}
        </div>
        <div>
          <h5>Education</h5>
          <div>
            <div>
              <ul>
                <li>
                  B.A. Communications, Graduated Magna Cum Laude, Lee University
                </li>
                <li>
                  M.S. Digital Media, Georgia Institute of Technology, 4.0 GPA
                </li>
                <li>
                  Certificate, Management of Technology, Georgia Institute of
                  Technology
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </ExperienceWrap>
  )
}

class BlogIndex extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.headerPicRef = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    window.requestAnimationFrame(() => {
      const scroll = window.scrollY
      this.headerPicRef.current.style.opacity = 1 - scroll / window.innerHeight
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Header data={data} picRef={this.headerPicRef} />
        <Experience scroll={this.state.scroll} data={data} />
        <Footer>
          &copy; 2019 -{' '}
          <a href="mailto:jonathan.cutrell+footer@gmail.com">
            Contact Jonathan
          </a>
        </Footer>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/bb_jc.jpg/" }) {
      childImageSharp {
        fixed(width: 2020, height: 1420) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allFeedDeveloperTea(limit: 1) {
      edges {
        node {
          title
        }
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
