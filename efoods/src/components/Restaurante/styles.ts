import styled from 'styled-components'
import { cores } from '../../Styles'

export const Card = styled.div`
  background-color: ${cores.Branco};
  position: relative;
  color: ${cores.Rosa};
`
export const Imagem = styled.img`
  width: 100%;
  border: 1px solid ${cores.Rosa};
  margin-bottom: 8px;
`
export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`
export const Nota = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-right: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px 16px;
`
export const Teg = styled.div`
  margin-left: 16px;
  background-color: ${cores.Rosa};
  color: ${cores.Branco};
  padding: 6px 4px;
  font-size: 12px;
  display: inline-block;
  font-weight: bold;
`
export const Button = styled.span`
  display: inline-block;
  padding: 4px 6px;
  background-color: ${cores.Rosa};
  color: ${cores.Branco};
  margin: 8px;
`
