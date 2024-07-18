import styled from 'styled-components'

import { cores } from '../../Styles'

export const ApresentacaoContainer = styled.div`
  background-image: 
  
  
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5)
`

export const Content = styled.div`
  margin: 32px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${cores.Branco}
  font-size: 32px;

  p {
  font-weight: 100;
  }

  h3 {
  font-weight: 900;
  }
`