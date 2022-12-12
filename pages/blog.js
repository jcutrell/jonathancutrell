import React from 'react'

import Link from 'next/link'
import Bio from '../components/Bio'
import Footer from '../components/footer'
import SiteLayout from '../components/SiteLayout'
import SEO from '../components/seo'
import Sidebar from '../components/Sidebar'

import {getAllArticles} from '../helpers/content-helpers';

import siteConfig from '../site-config';


class BlogIndex extends React.Component {
  render() {
    const { posts } = this.props
    const siteTitle = siteConfig.title;

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
        <h3>Blog</h3>
        {posts.map((post) => {
          const title = post.title || post.slug 
          return (
            <div key={post.slug}>
              <h3>
                <Link style={{ boxShadow: `none` }} href={`/blog/${post.slug}`}>
                  {title}
                </Link>
              </h3>
              <small>{post.date}</small>
              <p
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            </div>
          )
        })}
        <Footer />
      </SiteLayout>
    )
  }
}

export async function getStaticProps() {
	// Call an external API endpoint to get posts.
	// You can use any data fetching library

	// By returning { props: { posts } }, the Blog component
	// will receive `posts` as a prop at build time
  const posts = await getAllArticles();

	return {
		props: {
			posts,
		},
	}
}

export default BlogIndex

/*
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { sourceName: { eq: "blog" } }
        frontmatter: { tags: { nin: ["Personal"] } }
      }
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
            tags
          }
        }
      }
    }
  }
`
*/
