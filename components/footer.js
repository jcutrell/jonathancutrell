import styled from 'styled-components'
import Link from 'next/link'

const Foot = styled.footer`
  position: relative;
  z-index: 1000;
  text-align: center;
  padding: 1rem 0;
  a {
    display: inline-block;
    padding: 0 0.3rem;
  }
`

const Footer = () => (
  <Foot>
    &nbsp; &copy; 2022 <Link href="/blog">Blog</Link>
    <Link href="/books">Books</Link>
    <Link href="/episodes">Podcast</Link>
    <Link href="/values">Values</Link>
    <Link href="https://linkedin.com/in/jcutrell">LinkedIn</Link>
    <Link href="https://twitter.com/jcutrell">Twitter</Link>
    <a href="mailto:jonathan.cutrell+footer@gmail.com">Contact</a>
  </Foot>
)

export default Footer
