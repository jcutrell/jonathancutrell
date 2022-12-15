import styled from 'styled-components'
import Link from 'next/link'

export const LinkWithArrow = styled(Link)`
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
`

export const Wrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 45rem;
  margin: 0 auto;
  padding-top: 4rem;
  blockquote {
    border: none;
    border-image: linear-gradient(180deg, #eb9d6e, #c86dd7) 1;
    border-width: 0;
    border-left-width: 5px;
  }
`
