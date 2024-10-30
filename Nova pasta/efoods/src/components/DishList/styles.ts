import styled from 'styled-components'
import { breakpoints } from '../../Styles'

export const ListContainer = styled.ul`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 320px);
  gap: 2%;
  justify-content: center;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 320px 320px;
    gap: 16px 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 320px;
  }
`
