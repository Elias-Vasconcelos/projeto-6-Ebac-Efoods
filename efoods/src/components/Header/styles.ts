import styled from 'styled-components'

import { breakpoints, cores } from '../../Styles'
import { Link } from 'react-router-dom'

export const Content = styled.div`
  max-width: 960px;
  width: 100%;
  padding: 60px;
  paddi-botton: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`

export const tabletContent = styled(Content)`
  display: none;
  flex-direction: column;

  div {
    margin: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin: 8px;
    }
  }
`

export const Links = styled(Link)`
  font-size: 18px;
  color: ${cores.Rosa};
`
export const HeaderContainer = styled.header`
  color: ${cores.Rosa};
  font-size: 18px;
  display: flex;
  align-items: center;
  max-height: 200px;

  @media (max-width: ${breakpoints.desktop}) {
    ${Content} {
      display: none;
    }
    ${tabletContent} {
      display: flex;
    }
  }
`
