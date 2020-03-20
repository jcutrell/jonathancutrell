import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components';

import Bio from '../components/Bio'
import SiteLayout from '../components/SiteLayout'
import SEO from '../components/seo'
import Sidebar from '../components/Sidebar'
import { rhythm } from '../utils/typography'

const Book = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    display: block;
  }
`

class Books extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allBooksYaml.edges

    return (
      <SiteLayout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[
            `Jonathan Cutrell`,
            `Developer Tea`,
            `spec.fm`,
            `clearbit`,
          ]}
        />
        <h3>Books</h3>
        {posts.map(({ node: book }) => {
          return (
            <Book>
                <a href={ book.url } aria-label={`Buy ${book.title}`}>
                    <img src={ book.img } alt=""/>
                </a>
                <div>
                  <h5>{ book.title }</h5>
                  <p>{ book.subtitle }</p>
                  <p>{ book.author }</p>
                  <details>
                      <summary>{ book.rating }</summary>
                      <div className="notes">{ book.notes }</div>
                  </details>
                  <p>{ book.rating }</p>
                </div>
            </Book>
          )
        })}
      </SiteLayout>
    )
  }
}

export default Books

export const pageQuery = graphql`
query MyQuery {
  site {
    siteMetadata {
      title
    }
  }
  allBooksYaml {
    edges {
      node {
        id
        title
        url
        img
        author
      }
    }
  }
}
`
