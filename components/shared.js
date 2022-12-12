import styled from 'styled-components';
import Link from 'next/link'

export const LinkWithArrow = styled(Link)`
  &:after {
    content: '→';
    display: inline-block;
    margin-left: 4px;
    transition: all .1s;
  }
  &:hover:after {
    margin-left: 6px;
  }
`
