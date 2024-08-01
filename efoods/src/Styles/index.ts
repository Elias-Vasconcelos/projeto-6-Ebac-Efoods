import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  Rosa: '#E66767',
  CorFundo: '#FFF8F2',
  CorFooter: '#FFEBD9',
  Branco: '#fff'
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const BotaoAdicionar = styled.span`
  width: 94%;
  margin: 3%;
  color: ${cores.Rosa};
  background-color: ${cores.CorFooter};
  text-align: center;
  display: inline-block;
  font-weight: bold;
`

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
}
  body {
    background-color:${cores.CorFundo};
    }
`
