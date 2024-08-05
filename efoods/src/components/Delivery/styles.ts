import styled from 'styled-components'
import { cores } from '../../Styles'

export const SetForm = styled.div`
  font-size: 14px;
  color: ${cores.CorFooter};

  input {
    width: 100%;
    background-color: ${cores.CorFooter};
  }
`
export const SetGrup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 40%);
  column-gap: 5%;
`