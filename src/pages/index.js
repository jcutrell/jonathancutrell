import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import TesorioLogo from '../components/icons/tesorio-logo'
import DtLogo from '../components/icons/dt-logo'
import SpecLogo from '../components/icons/spec-logo'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Sidebar from '../components/Sidebar'
import Testimonials from '../components/Testimonials'
import { rhythm } from '../utils/typography'
import styled, { keyframes } from 'styled-components'

const rotateHue = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(720deg);
  }
`

const PicHeader = styled.div`
  background-size: cover;
  background-image: url(/header.jpg);
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100vw;
  background-position: left center;
  background-size: 160%;
  @media only screen and (min-width: 80rem) {
    padding: 0 10rem;
    width: 50vw;
    background-position: center center;
    border-radius: 500px/650px 0 0 800px;
    box-shadow: 0 -35px rgba(0, 148, 255, 0.52),
      20px 30px rgba(0, 255, 198, 0.52),
      -24px 0 rgba(255, 0, 163, 0.52),
      -54px -10px 0 -10px rgba(225, 10, 220, 0.52),
      -30px -25px 0 40px rgba(255, 198, 33, 0.52);
    &:after {
      animation: ${rotateHue} 8s infinite;
      content: '';
      display: block;
      border-radius: 50%;
      transform: rotateZ(-15deg);
      width: 70vh;
      height: 70vh;
      background-color: rgba(255, 30, 30, 0.22);
      position: absolute;
      right: 13vh;
      top: 8vh;
      box-shadow: 5vh 100px 0 20px rgba(133, 67, 218, 0.35),
                  -90px 80px 0 -20px rgba(159, 218, 67, 0.62);
    }
  }
`
const Lead = styled.div`
  font-size: 2rem;
  font-weight: 200;
`

const WorkItem = styled.div`
  @media only screen and (min-width: 100rem) {
    display: flex;
  }
`
const HomeHeader = styled.div`
  position: relative;
  z-index: 100;
  padding: 4rem 0;
  min-height: 78vh;
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 50vw;
    height: 100%;
    display: block;
    background: linear-gradient(
      270deg,
      rgba(179, 95, 255, .5),
      rgba(0, 138, 237, 1)
    );
    width: 100vw;
    opacity: 1;
    @media only screen and (min-width: 80rem) {
      opacity: 0.4;
    }
  }
}
`

const HeaderContent = styled.div`
  position: relative;
  padding: 0 5vw;
  z-index: 100;
  @media only screen and (min-width: 80rem) {
    padding: 0 10rem;
    width: 45vw;
  }
`
const HeaderTitle = styled.h1`
  position: relative;
  padding-top: 5rem;
  margin-top: 0;
  font-size: 3rem;
  color: #fff;
  @media only screen and (min-width: 60rem) {
    padding-top: 5rem;
    font-size: 3.6rem;
  }
  @media only screen and (min-width: 80rem) {
    color: #234156;
    font-size: 3rem;
  }
`

const SubHeader = styled.h2`
  font-size: 1.6rem;
  max-width: 500px;
  font-weight: 200;
  margin-top: .8rem;
  color: #fff;
  @media only screen and (min-width: 80rem) {
    color: #234156;
  }
`
const Skill = styled.span`
  padding: 0 2rem 1rem 0;
`

const Nav = styled.nav`
  position: relative;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  a {
    color: #FFF;
    display: block;
    margin-right: 2rem;
    display: inline-block;
    position: relative;
    z-index: 500;
    @media only screen and (min-width: 80rem) {
      color: #234156;
    }
  }
`
const SlantButton = styled.span`
  text-align: center;
  display: block;
  position: relative;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: skewY(-1deg) scaleX(0.95);
  transition: transform 0.2s;
  z-index: -1;
`

const Footer = styled.footer`
  position: relative;
  z-index: 1000;
  text-align: center;
  padding: 1rem 0;
`

const Header = ({ data, picRef }) => {
  return (
    <HomeHeader>
      <HeaderContent>
        <HeaderTitle>
          Hello, I'm Jonathan Cutrell.
        </HeaderTitle>
        <SubHeader>
          I am an empathetic engineering manager with over 10 years of experience and a chosen bias for long-term thinking.
        </SubHeader>
        <Nav style={{ marginTop: '2rem' }}>
          <Link to="/blog">
            Posts
            <SlantButton />
          </Link>
          <Link to="/testimonials">
            What People Say
            <SlantButton />
          </Link>
        </Nav>
      </HeaderContent>
      <PicHeader
        ref={picRef}
        backgroundImageUrl={data.avatar.childImageSharp.fixed.src}
      />
    </HomeHeader>
  )
}

const LongTerm = () => (
  <LongTermWrap>
    <h5>Why Long-Term?</h5>
    <div>
      <Lead>Long-term thinking requires a paradigm shift.</Lead>
      <p>
        Long-term thinking is a forcing function that powerfully aligns organizations and individuals.<br/>
        Thinking long term means valuing:</p>
        <ul style={{ marginTop: '1rem'}}>
          <li>People over products</li>
          <li>Character over skills</li>
          <li>Trends over spikes</li>
          <li>Norms over exceptions</li>
          <li>Teaching over showing</li>
          <li>Philosophy over tactics</li>
          <li>Habits over heroics</li>
          <li>Smooth over fast</li>
          <li>Data over anecdotes</li>
          <li>Impact over hype</li>
          <li>Causes over symptoms</li>
        </ul>
      <p>Most people have a bias for short-term execution. This can be necessary for survival. Only exceptional ventures optimize for the long-term.</p>
    </div>
  </LongTermWrap>
)

const Wrap = styled.section`
  padding: 2rem;
  @media only screen and (min-width: 80rem){
    padding: 2rem 10rem;
  }
`

const LongTermWrap = styled.div`
  max-width: 55rem;
  padding-right: 6rem;
  ul {
    columns: 2;
  }
`

const FlexWrap = styled(Wrap)`
  display: flex;
`

const ExperienceWrap = styled(Wrap)`
  background: #fff;
  padding: 2rem;
  color: #888;
  position: relative;
  z-index: 1000;
  @media only screen and (min-width: 80rem){
    & > div {
      display: flex;
    }
    & > div > div {
      margin-right: 2rem;
      padding-right: 3rem;
      min-width: 30%;
      max-width: 45%;
      align-items: center;
      justify-content: center;
    }
    h5 {
      margin: 4rem 0 2rem 0;
    }
  }
  h4 {
    font-size: 1.4rem;
    margin-top: 0px;
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 80rem){
    padding: 2rem 10rem;
  }
`

const IconWrap = styled.div`
  position: relative;
  z-index: 50;
  min-width: 110px;
  height: 80px;
  box-sizing: border-box;
  padding-right: 30px;
  transition: transform 0.2s;
  margin-bottom: 2rem;
  svg {
    max-width: 100%;
    width: 80px;
    height: 80px;
  }
  @media only screen and (min-width: 100rem) {
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
    }
  }
`

const RecentPost = ({ post }) => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', maxWidth: '600px' }}>
      <a
        style={{ position: 'relative', display: 'block', zIndex: 100 }}
        href={post.fields.slug}
      >
        <h4>{post.frontmatter.title}</h4>
        <p>{post.excerpt}</p>
      </a>
    </div>
  )
}

const Experience = ({ data }) => {
  return (
    <ExperienceWrap>
      <h5>Current Work</h5>
      <CurrentWork>
        <WorkItem>
          <IconWrap>
            <TesorioLogo />
          </IconWrap>
          <div style={{ position: 'relative', zIndex: 100 }}>
            <h4>
              Engineering Manager,{' '}
              <a href="https://clearbit.com/about" target="_blank">
                Tesorio
              </a>
            </h4>
            Building a fearless team of developers focused on creating the world's best cashflow management platform.
          </div>
        </WorkItem>
        <WorkItem>
            <IconWrap>
              <DtLogo />
            </IconWrap>
          <div style={{ position: 'relative', zIndex: 100 }}>
            <h4>
              Host,{' '}
              <a href="https://spec.fm/podcasts/developer-tea">Developer Tea</a>
            </h4>
            A top-100 tech podcast
            with over 15m all-time downloads by
            listeners in over 200 countries.
            <br />
            <Link to={'/developer-tea'}>
              Latest episode: {data.allFeedDeveloperTea.edges[0].node.title}
            </Link>
          </div>
        </WorkItem>
        <WorkItem>
          <IconWrap>
            <SpecLogo />
          </IconWrap>
          <div style={{ position: 'relative', zIndex: 100 }}>
            <h4>
              Co-founder, <a href="https://spec.fm">Spec.fm</a>
            </h4>
            I co-founded a podcast network called Spec for designers and
            developers who want to level up in their careers. Spec hosts
            episodes from 13 different podcasts today, with millions of listens.
          </div>
        </WorkItem>
      </CurrentWork>

      <div>
        <div>
          <h5>My Values</h5>
          Optimize for the Long-Term<br/>
          Cultivate Understanding<br/>
          Go Happy
        </div>
        <div>
          <h5>A Brief History</h5>
          <ul>
            <li><a href="https://clearbit.com">Clearbit, Senior Engineer</a><br/><em>Aug 2018 &mdash; Oct 2019</em></li>
            <li><a href="https://whiteboard.is">Whiteboard, CTO</a> <br/><em>May 2010 &mdash; Aug 2018</em></li>
            <li>Medium (now-defunct agency), Frontend Engineer <br/><em>Jan 2010 &mdash; Jan 2011</em></li>
            <li>Managing Editor, FuelYourInterface.com<br/><em>Jul 2009 &mdash; Jan 2010</em></li>
            <li>Freelance Frontend Engineer / Designer<br/><em>2008 &mdash; 2011</em></li>
          </ul>
        </div>
        <div>
          <h5>Education</h5>
          <div>
            <div>
              <ul>
                <li>
                  M.S. Digital Media, Georgia Institute of Technology, 4.0 GPA
                </li>
                <li>
                  B.A. Communications, Graduated Magna Cum Laude, Lee University
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
      <h5>Skills</h5>
      <section>
        <Skill>Mentorship</Skill>
        <Skill>Speaking</Skill>
        <Skill>Front-end Architecture</Skill>
        <Skill>Technical Writing</Skill>
        <Skill>Software Architecture</Skill>
        <Skill>JavaScript (React, ES6)</Skill>
        <Skill>Ruby (Sinatra, Rails)</Skill>
        <Skill>Decision Science</Skill>
      </section>
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
        <FlexWrap>
          <LongTerm />
          <div>
            <h5>Recent Posts</h5>
            <RecentPost post={data.allMdx.edges[0].node} />
            <RecentPost post={data.allMdx.edges[1].node} />
            <RecentPost post={data.allMdx.edges[2].node} />
          </div>
        </FlexWrap>
        <Experience scroll={this.state.scroll} data={data} />
        <Footer>
          <Link to="/blog">Blog</Link>&nbsp;
          <Link to="/testimonials">Testimonials</Link>&nbsp; &copy; 2019 -{' '}
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
    avatar: file(absolutePath: { regex: "/jc-ethereal.jpg/" }) {
      childImageSharp {
        fixed(width: 2000, height: 1400, quality: 100) {
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
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { sourceName: { eq: "blog" } }
        frontmatter: { tags: { nin: ["Personal"] } }
      }
      limit: 3
    ) {
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
