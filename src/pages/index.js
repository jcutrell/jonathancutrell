import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

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
  background-position: 30% 20%;
  @media only screen and (min-width: 80rem) {
    background-position: 0% 20%;
  }
  background-size: cover;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: url(${props => props.backgroundImageUrl});
  opacity: 0.7;
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
  font-size: 1.3rem;
`

const Header = ({ data }) => {
  return (
    <HomeHeader>
      <HeaderContent>
        <HeaderTitle>
          <Hand>👋</Hand> I'm Jonathan.
        </HeaderTitle>
        <SubHeader>
          I help developers find clarity, perspective, and purpose in their
          careers.
        </SubHeader>
      </HeaderContent>
      <PicHeader backgroundImageUrl={data.avatar.childImageSharp.fixed.src} />
    </HomeHeader>
  )
}

const Experience = styled.section`
  background: #fff;
  padding: 5rem 10rem;
  color: #888;
  @media only screen and (min-width: 60rem){
    & > div {
      display: flex;
    }
    & > div > div {
      margin-right: 2rem;
      padding-right: 3rem;
      min-width: 30%;
      max-width: 38%;
    }
    h5 {
      margin-top: 2rem;
    }
  }
  h4 {
    margin-top: 0px;
  }
}`

class BlogIndex extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Header data={data} />
        <Experience>
          <h5>Current Work</h5>
          <div>
            <div>
              <h4>
                Senior Engineer,{' '}
                <a href="https://clearbit.com/about" target="_blank">
                  Clearbit
                </a>
              </h4>
              Building next-generation business data platforms and world-class
              user experiences.
              <a
                href="#clearbit"
                onClick={e => {
                  e.preventDefault()
                  this.setState({ showClearbit: !this.state.showClearbit })
                }}
              >
                {this.state.showClearbit ? ' Hide' : ' Show More'}
              </a>
              {this.state.showClearbit && (
                <div>
                  <ul style={{ marginTop: '2rem' }}>
                    <li>
                      Migrated the{' '}
                      <a href="https://connect.clearbit.com/">
                        Clearbit Connect
                      </a>{' '}
                      extension to a modern React codebase.
                    </li>
                    <li>
                      Primary responsible person for Connect extension front and
                      back end.
                    </li>
                    <li>
                      Built an embeddable snippet that allows users to
                      dynamically configure complex data mappings
                    </li>
                    <li>Documentation restructuring efforts</li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <h4>
                Host,{' '}
                <a href="https://spec.fm/pocdasts/developer-tea">
                  Developer Tea
                </a>
              </h4>
              Developer Tea is a top-100 podcast in the Technology category on
              iTunes. The podcast is approaching 13m all-time downloads by
              listeners in over 200 countries.
            </div>
            <div>
              <h4>
                Co-founder, <a href="https://spec.fm">Spec.fm</a>
              </h4>
              I co-founded a podcast network called Spec targeting designers and
              developers who want to level up in their careers. Spec hosts
              episodes from 13 different podcasts today, with millions of
              cumulative listens.
            </div>
          </div>

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

          <h5>Previously</h5>
          <div>
            <div>
              I started building digital products in 2007. (Those first ones
              weren't very good though.) I helped start a music company and then{' '}
              <a href="https://tutsplus.com/authors/jonathan-cutrell">
                freelanced as a technical writer
              </a>{' '}
              and frontend developer. I helped grow Whiteboard, an agency
              servicing clients with web projects all over the spectrum. As CTO,
              I worked with companies from non-profit to Fortune 500 to
              pre-funding startup.
              <br />
            </div>
            <div>
              Notable experiences:
              <ul>
                <li>
                  Architecting an app to power a conference experience for over
                  5,000 attendees
                </li>
                <li>
                  Bootstrapping a startup to provide a platform for hosting
                  family memories captured in their home movies
                </li>
              </ul>
              Each of these experiences came with their own technical and human
              challenges, and I'm grateful to have learned from them all.
            </div>
          </div>
          <h5>Education</h5>
          <div>
            <div>
              B.A. Communications, Graduated Magna Cum Laude, Lee University
              <br />
              M.S. Digital Media, Georgia Institute of Technology, 4.0 GPA
            </div>
          </div>
        </Experience>
        <Testimonials />
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
