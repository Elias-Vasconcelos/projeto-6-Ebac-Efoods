import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  Rosa: '#E66767',
  CorFundo: '#FFF8F2',
  CorFooter: '#FFEBD9',
  Branco: '#fff'
}

export const SetForm = styled.div`
  font-size: 14px;
  color: ${cores.CorFooter};

  label {
    marginb-bottom: 8px;
  }

  input {
    width: 100%;
    background-color: ${cores.CorFooter};
    padding: 8px;
    border: 1px solid ${cores.CorFooter};
    margin: 8px 0;
  }
`

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
  cursor: pointer;
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
