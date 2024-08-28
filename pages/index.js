import React from 'react'

import styled, { keyframes } from 'styled-components'
import {
  getAllContentIn,
  getAllContent,
} from '../helpers/content-helpers'

import Layout from '../layouts/Layout'
import Footer from '../components/footer'
import { LinkWithArrow } from '../components/shared'
import Link from 'next/link'
import Image from 'next/image'
import GuildLogo from '../components/icons/guild-logo'
import DtLogo from '../components/icons/dt-logo'

import siteConfig from '../site-config'

const rotateHue = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(720deg);
  }
`

const PicHeader = styled.div`
  position: absolute;
  //overflow: hidden;
  right: 0;
  top: 0;
  width: 100vw;
  background-position: left center;
  background-size: 120%;
  z-index: -1;
  height: 100%;
  box-sizing: border-box;
  img {
    object-fit: cover;
    height: 100%;
    @media only screen and (min-width: 80rem) {
      border-radius: 1002px 0 649px 298px / 264px 0 382px 496px;
    }
  }
  @media only screen and (min-width: 80rem) {
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
      border-radius: 1002px 0 649px 298px / 264px 0 382px 496px;
      box-shadow: 0 -35px rgba(0, 148, 255, 0.42),
        20px 30px rgba(0, 255, 198, 0.52), -24px 0 rgba(255, 0, 163, 0.52),
        -54px -10px 0 -10px rgba(225, 10, 220, 0.52),
        -20px -25px 0 40px rgba(255, 198, 33, 0.52);
    }
  }
`
const Lead = styled.h5`
  margin-top: 0;
  padding-top: 1rem;
`
const Value = styled.h4`
  font-weight: lighter;
`

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
  max-width: 500px;
  font-weight: 200;
  margin-top: 0.8rem;
  color: #fff;
  @media only screen and (min-width: 80rem) {
    color: #234156;
  }
`
const Nav = styled.nav`
  position: relative;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  a {
    color: #fff;
    display: block;
    margin-right: 2rem;
    display: inline-block;
    position: relative;
    z-index: 500;
    &:after {
      content: '→';
      display: inline-block;
      margin-left: 4px;
      transition: all 0.1s;
    }
    &:hover:after {
      margin-left: 6px;
      margin-right: -2px;
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

const Header = ({ picRef }) => {
  return (
    <HomeHeader>
      <HeaderContent>
        <HeaderTitle>Hello, I&apos;m Jonathan&nbsp;Cutrell.</HeaderTitle>
        <SubHeader>
          Engineering manager with a chosen bias for long-term thinking.
        </SubHeader>
        <Nav style={{ marginTop: '2rem' }}>
          <Link href="/blog">
            Blog Posts
            <SlantButton />
          </Link>
          <Link href="/testimonials">
            What People Say
            <SlantButton />
          </Link>
        </Nav>
      </HeaderContent>
      <PicHeader ref={picRef} backgroundImageUrl={null}>
        <Image
          priority
          src="/header.jpg"
          alt="Picture of the author"
          fill
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                  33vw"
        />
      </PicHeader>
    </HomeHeader>
  )
}

const LongTerm = ({ values }) => (
  <LongTermWrap>
    <h4>Why Long-Term?</h4>
    <div>
      <Lead>Long-term thinking requires a paradigm shift.</Lead>
      <p>
        Long-term thinking is a forcing function that powerfully aligns
        organizations and individuals. Thinking long term means valuing:
      </p>
      <ul style={{ marginTop: '1rem' }}>
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
      <p>
        Most people have a bias for short-term execution. This can be necessary
        for survival. Only exceptional ventures optimize for the long-term.
      </p>
    </div>

    <div>
      <div>
        <h5>My Values</h5>
        <ValueWrap>
          <ValueWrapInner>
            {values.map((value) => (
              <Value key={value.id}>{value.title}</Value>
            ))}
          </ValueWrapInner>
        </ValueWrap>
        <LinkWithArrow href="/values">Read more about my values</LinkWithArrow>
      </div>
    </div>
  </LongTermWrap>
)
const ValueWrap = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  margin: 1rem 0;
`
const ValueWrapInner = styled.div`
  padding: 0.5rem 1.6rem;
  border-left-style: solid;
  border-width: 6px;
  border-image: linear-gradient(
      0deg,
      rgba(179, 95, 255, 1),
      rgba(0, 138, 237, 1)
    )
    1 100%;
  background: #fafafa;
`
const LongTermWrap = styled.div`
  max-width: 50rem;
  ul {
    columns: 2;
  }
  @media only screen and (min-width: 80rem) {
    padding-left: 6rem;
  }
`
const Wrap = styled.section`
  padding: 2rem;
  @media only screen and (min-width: 80rem) {
    padding: 2rem 10rem;
  }
`

const FlexWrap = styled(Wrap)`
  @media only screen and (min-width: 80rem) {
    display: flex;
  }
`

const ExperienceWrap = styled(Wrap)`
  background: #fff;
  padding: 2rem;
  color: #888;
  position: relative;
  z-index: 1000;
  @media only screen and (min-width: 80rem) {
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
    margin-top: 0px;
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 80rem) {
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
    <a
      style={{
        position: 'relative',
        marginBottom: '1rem',
        display: 'block',
        zIndex: 100,
      }}
      href={`${post.permalink}`}
    >
      {post.title}
    </a>
  )
}

const Experience = ({ episodes = [] }) => {
  return (
    <ExperienceWrap>
      <h5>Current Work</h5>
      <CurrentWork>
        <WorkItem>
          <IconWrap>
            <GuildLogo />
          </IconWrap>
          <div style={{ position: 'relative', zIndex: 100 }}>
            <h4>
              Engineering Manager,{' '}
              <a
                href="https://guildeducation.com"
                target="_blank"
                rel="noreferrer"
              >
                Guild Education
              </a>
            </h4>
            Supporting engineers responsible for content delivery services for
            millions of end users.
          </div>
        </WorkItem>
        <WorkItem>
          <IconWrap>
            <DtLogo />
          </IconWrap>
          <div style={{ position: 'relative', zIndex: 100 }}>
            <h4>
              Host, <a href="https://developertea.com">Developer Tea</a>
            </h4>
            A top-100 tech podcast with over 15m all-time downloads by listeners
            in over 200 countries.
            <br />
            <Link href={'/episodes'}>
              Latest episode: {episodes.length ? episodes[0].title : ''}
            </Link>
          </div>
        </WorkItem>
      </CurrentWork>
    </ExperienceWrap>
  )
}

class BlogIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.headerPicRef = React.createRef()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { posts, episodes, values } = this.props
    const siteTitle = siteConfig.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Header picRef={this.headerPicRef} />
        <FlexWrap>
          <div>
            <h5>Recent Posts</h5>
            {posts.slice(0, 20).map((post) => (
              <RecentPost post={post} key={post.slug} />
            ))}
            <LinkWithArrow href="/blog">View All Posts</LinkWithArrow>
          </div>
          <LongTerm values={values} />
        </FlexWrap>
        <Experience scroll={this.state.scroll} episodes={episodes} />
        <Footer />
      </Layout>
    )
  }
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  const posts = await getAllContent()
  const values = await getAllContentIn({ folder: 'values' })

  return {
    props: {
      posts,
      values,
    },
  }
}

export default BlogIndex
