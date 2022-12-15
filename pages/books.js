import styled from 'styled-components'
import SiteLayout from '../../components/SiteLayout'
import { Wrap } from '../../components/shared'
import { MDXRemote } from 'next-mdx-remote'

import siteConfig from '../site-config'

import { serialize } from 'next-mdx-remote/serialize'
import { getAllContentIn } from '../helpers/content-helpers'

const Book = styled.div`
  padding-top: 2rem;
  display: flex;
  a {
    display: block;
    width: 25%;
    min-width: 25%;
    margin-right: 2rem;
    img {
      width: 100%;
      margin: 0;
    }
  }
  h5 {
    margin-top: 0;
  }
`

class Books extends React.Component {
  render() {
    const { posts } = this.props
    const siteTitle = siteConfig.title

    return (
      <SiteLayout location={this.props.location} title={siteTitle}>
        <Wrap>
          <h2>Books</h2>
          <p>
            Note: This page is woefully under-utilized. I am leaving it here
            because I want it to be a full virtual bookshelf soon.
          </p>
          {posts.map((book) => {
            return (
              <Book key={book.title}>
                <a href={book.url} aria-label={`Buy ${book.title}`}>
                  <img src={book.img} alt="" /> Purchase on Amazon
                </a>
                <div>
                  <h5>{book.title}</h5>
                  <p>{book.subtitle}</p>
                  <p>Author: {book.author}</p>
                  <p>Published: {book.publish_year}</p>
                  <summary>{book.rating} / 5</summary>
                  <div className="notes">
                    <MDXRemote {...book.mdxSource} />
                  </div>
                </div>
              </Book>
            )
          })}
        </Wrap>
      </SiteLayout>
    )
  }
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time

  const posts = await getAllContentIn({ folder: 'books' })

  await Promise.all(
    posts.map(async (post) => {
      post.mdxSource = await serialize(post.content, {
        parseFrontmatter: false,
      })
      return
    })
  )

  return {
    props: {
      posts,
    },
  }
}

export default Books

/*

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
*/
