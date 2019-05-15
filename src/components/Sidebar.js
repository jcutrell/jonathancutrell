import React from 'react'
import styled from 'styled-components'

const StyledSidebar = styled.div`
  position: relative;
  width: 200px;
  margin-left: -200px;
`

const Sidebar = ({ children }) => <StyledSidebar>{children}</StyledSidebar>

export default Sidebar
