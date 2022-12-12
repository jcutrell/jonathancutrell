import React from 'react'
import styled from 'styled-components';

import Bio from '../components/Bio'
import SiteLayout from '../components/SiteLayout'
import SEO from '../components/seo'
import Sidebar from '../components/Sidebar'

const Book = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  a {
    display: block;
    min-width: 25%;
    margin-right: 2rem;
    img {
      margin: 0;
    }
  }
  h5 {
    margin-top: 0;
  }
`

class Books extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allBooksYaml.edges
    console.log(posts);

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
        <p>Note: This page is woefully under-utilized. I am leaving it here because I want it to be a full virtual bookshelf soon.</p>
        {posts.map(({ node: book }) => {
          return (
            <Book>
                <a href={ book.url } aria-label={`Buy ${book.title}`}>
                    <img src={ book.img } alt="" /> Purchase on Amazon
                </a>
                <div>
                  <h5>{ book.title }</h5>
                  <p>{ book.subtitle }</p>
                  <p>Author: { book.author }</p>
                  <p>Published: {book.publish_year}</p>
                  <summary>{ book.rating } / 5</summary>
                  <div className="notes">{ book.notes }</div>
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
        rating
        img
        author
        notes
        publish_year
      }
    }
  }
}
`
