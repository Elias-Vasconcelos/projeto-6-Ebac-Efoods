import styled from 'styled-components'
import { breakpoints } from '../../Styles'

export const ListContainer = styled.ul`
  margin: 80px auto;
  max-width: 1080px;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 472px;
  gap: 48px 80px;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 472px;
    grid-template-rows: 472px;
    justify-content: center;
    gap: 40 0;
  }
  @media (max-width: ${breakpoints.smartphone}) {
    grid-template-columns: 70%;
    justify-content: center;
  }
`
