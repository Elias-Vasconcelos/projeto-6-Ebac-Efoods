import styled from 'styled-components'
import { BotaoAdicionar, cores } from '../../Styles'

export const Rodape = styled.footer`
  background-color: ${cores.CorFooter};
  margin-top: 120px;
`

export const RodapeContainer = styled.div`
  margin: 0 auto;
  color: ${cores.Rosa};
  font-size: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;

  img {
    margin-top: 40px;
  }

  p {
    margin-top: 80px;
    line-height: 12px;
    margin-bottom: 40px;
    text-align: center;
    font-size: 10px;
  }

  ${BotaoAdicionar} {
    max-width: 340px;
    width: 100%;
    padding: 4px 16px;
  }
`

export const RedesSociais = styled.ul`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 24px);
  column-gap: 8px;
`
