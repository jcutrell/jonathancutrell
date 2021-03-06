import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import PBSLogo from '../components/icons/pbs-logo'
import DtLogo from '../components/icons/dt-logo'
import SpecLogo from '../components/icons/spec-logo'
import Footer from '../components/footer';
import { LinkWithArrow } from '../components/shared';

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
  width: 100vw;
  background-position: left center;
  background-size: 120%;
  z-index: -1;
  height: 70%;
  @media only screen and (min-width: 80rem) {
    height: 100%;
    z-index: 400;
    padding: 0 10rem;
    width: 50vw;
    background-position: center center;
    border-radius: 820px 0 610px 300px / 500px 0 230px 460px;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      display: block;
      animation: ${rotateHue} 10s infinite linear;
      border-radius: 820px 0 610px 300px / 500px 0 230px 460px;
      box-shadow: 0 -35px rgba(0, 148, 255, 0.42),
        20px 30px rgba(0, 255, 198, 0.52),
        -24px 0 rgba(255, 0, 163, 0.52),
        -54px -10px 0 -10px rgba(225, 10, 220, 0.52),
        -20px -25px 0 40px rgba(255, 198, 33, 0.52);
    }
  }
`
const Lead = styled.h3`
  margin-top: 0;
  padding-top: 1rem;
`
const Value = styled.h4``

const WorkItem = styled.div`
  @media only screen and (min-width: 100rem) {
    display: flex;
  }
`
const HomeHeader = styled.div`
  position: relative;
  z-index: 100;
  padding: 6rem 0;
  min-height: 40vh;
  margin-bottom: 3rem;
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 50vw;
    height: 100%;
    display: block;
    background: linear-gradient(
      225deg,
      rgba(179, 95, 255, .7),
      rgba(0, 138, 237, .95)
    );
    width: 100vw;
    opacity: 1;
    @media only screen and (min-width: 80rem) {
      opacity: 0.4;
      background: linear-gradient(
        225deg,
        rgba(179, 95, 255, .7),
        rgba(0, 138, 237, .5)
      );
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
  color: #fff;
  display: inline-block;
  @media only screen and (min-width: 60rem) {
    padding-top: 8rem;
  }
  @media only screen and (min-width: 80rem) {
    color: #234156;
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
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  a {
    color: #FFF;
    display: block;
    margin-right: 2rem;
    display: inline-block;
    position: relative;
    z-index: 500;
    &:after {
      content: '→';
      display: inline-block;
      margin-left: 4px;
      transition: all .1s;
    }
    &:hover:after {
      margin-left: 6px;
    }
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

const Header = ({ data, picRef }) => {
  return (
    <HomeHeader>
      <HeaderContent>
        <HeaderTitle>
          Hello, I'm Jonathan&nbsp;Cutrell.
        </HeaderTitle>
        <SubHeader>Engineering manager with a chosen bias for long-term thinking.</SubHeader>
        <Nav style={{ marginTop: '2rem' }}>
          <Link to="/blog">
            Blog Posts
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
        Long-term thinking is a forcing function that powerfully aligns organizations and individuals.
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

      <div>
        <div>
          <h5>My Values</h5>
          <Value>Optimize for the Long-Term</Value>
          <Value>Cultivate Understanding</Value>
          <Value>Fearless Bravery</Value>
          <Value>Go Happy</Value>
          <LinkWithArrow to="/values">Read more about my values</LinkWithArrow>
        </div>
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
  max-width: 50rem;
  ul {
    columns: 2;
  }
  @media only screen and (min-width: 80rem){
    padding-left: 6rem;
  }
`

const FlexWrap = styled(Wrap)`
  @media only screen and (min-width: 80rem){
    display: flex;
  }
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
    <div style={{ position: 'relative',
      overflow: 'hidden',
      maxWidth: '600px' }}>
      <a
        style={{ position: 'relative', display: 'block', zIndex: 100 }}
        href={post.fields.slug}
      >
        <Lead style={{ marginTop: 0, paddingTop: '1rem'}}>{post.frontmatter.title}</Lead>
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
            <PBSLogo />
          </IconWrap>
          <div style={{ position: 'relative', zIndex: 100 }}>
            <h4>
              Director of Technology,{' '}
              <a href="https://pbs.org" target="_blank">
                PBS
              </a>
            </h4>
            Supporting engineers responsible for content delivery services for millions of end users.
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
    </ExperienceWrap>
  )
}

class BlogIndex extends React.Component {
  constructor() {
    super()
    this.state = {}
    this.headerPicRef = React.createRef()
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
          <div>
            <h5>Recent Posts</h5>
            <RecentPost post={data.allMdx.edges[0].node} />
            <RecentPost post={data.allMdx.edges[1].node} />
            <RecentPost post={data.allMdx.edges[2].node} />
            <RecentPost post={data.allMdx.edges[3].node} />
            <RecentPost post={data.allMdx.edges[4].node} />
            <LinkWithArrow to="/blog">View All Posts</LinkWithArrow>
          </div>
          <LongTerm />
        </FlexWrap>
        <Experience scroll={this.state.scroll} data={data} />
        <Footer />
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
      limit: 5
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
