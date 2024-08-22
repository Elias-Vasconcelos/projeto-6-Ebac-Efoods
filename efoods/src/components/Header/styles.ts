import styled from 'styled-components'

import { breakpoints, cores } from '../../Styles'
import { Link } from 'react-router-dom'

export const Content = styled.div`
  max-width: 1140px;
  width: 100%;
  padding: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  position: relative;

  img {
    position: absolute;
    top: 40px;
  }
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
  display: flex;
  justify-content: center;

  @media (max-width: ${breakpoints.desktop}) {
    ${Content} {
      display: none;
      img {
        position: relative;
      }
    }
    ${tabletContent} {
      display: flex;
    }
  }
`
