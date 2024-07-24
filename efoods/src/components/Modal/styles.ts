import styled from 'styled-components'
import { BotaoAdicionar, cores } from '../../Styles'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const ModalContent = styled.div`
  padding: 32px;
  display: grid;
  grid-template-columns: repeat(1, 280px 1fr);
  justify-content: center;
  max-width: 1024px;
  width: 100%;
  column-gap: 24px;
  font-size: 14px;
  color: ${cores.Branco};
  background-color: ${cores.Rosa};

  img {
    display: block;
    max-width: 280px;
    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    line-height: 22px;
    height: 176px;
  }

  ${BotaoAdicionar} {
    max-width: 340px;
    width: 100%;
    padding: 4px 16px;
  }
`
