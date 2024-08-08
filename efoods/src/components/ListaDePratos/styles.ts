import styled from 'styled-components'

export const ListaContainer = styled.ul`
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 320px);
  grid-template-rows: repeat(338px);
  gap: 32px;


  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 320px 320px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 320px;
  }

`
