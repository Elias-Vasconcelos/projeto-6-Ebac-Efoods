import styled from 'styled-components'

import { cores } from '../../Styles'

export const Baner = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  color: ${cores.Rosa};
  background-color: ${cores.CorFooter};
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 64px;
  }
`
export const Title = styled.h2`
  margin-top: 138px;
  width: 536px;
  font-size: 36px;
  line-height: 42.19px;
  margin-botton: 40px;
  margin-bottom: 40px;
  text-align: center;
`
