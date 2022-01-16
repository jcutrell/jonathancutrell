import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Foot = styled.footer`
  position: relative;
  z-index: 1000;
  text-align: center;
  padding: 1rem 0;
  a {
    display: inline-block;
    padding: 0 .3rem;
  }
`

const Footer = () => (
  <Foot>
    &nbsp; &copy; 2022 {' '}
    <Link to="/blog">Blog</Link>
    <Link to="/books">Books</Link>
    <Link to="/developer-tea">Podcast</Link>
    <Link to="/values">Values</Link>
    <Link to="https://linkedin.com/in/jcutrell">LinkedIn</Link>
    <Link to="https://twitter.com/jcutrell">Twitter</Link>
    <a href="mailto:jonathan.cutrell+footer@gmail.com">
      Contact
    </a>
  </Foot>
)

export default Footer;
