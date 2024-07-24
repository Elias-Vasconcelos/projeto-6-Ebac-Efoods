import styled from 'styled-components'

import { cores } from '../../Styles'
import { Link } from 'react-router-dom'

export const CabecalhoContainer = styled.header`
  color: ${cores.Rosa};
  font-size: 18px;
`
export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  padding: 60px;
  paddi-botton: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`
export const Links = styled(Link)`
  font-size: 18px;
  color: ${cores.Rosa};
`
