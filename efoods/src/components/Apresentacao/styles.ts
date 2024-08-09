import styled from 'styled-components'

import { cores } from '../../Styles'

export const ApresentacaoContainer = styled.div`
    position: relative;
    z-index: 1;
    margin-bottom: 56px;
    background-size: cover;
    background-repeat: no-repeat;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -2;
`

export const Content = styled.div`
  max-width: 1024px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${cores.Branco};
  font-size: 32px;
  font-weight: bold;
  p {
    margin-top: 24px;
  }

  h3 {
    margin: 156px 0 32px 0;
  }
`
