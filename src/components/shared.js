import { Link } from 'gatsby'
import styled from 'styled-components';

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
