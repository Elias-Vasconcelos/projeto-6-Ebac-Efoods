import styled, { createGlobalStyle } from 'styled-components'

type Props = {
  valid: boolean
}

export const cores = {
  Rosa: '#E66767',
  CorFundo: '#FFF8F2',
  CorFooter: '#FFEBD9',
  Branco: '#fff',
  Red: '#FF1A1A'
}

export const SetForm = styled.div<Props>`
  font-size: 14px;
  color: ${cores.CorFooter};

  label {
    marginb-bottom: 8px;
  }

  input {
    width: 100%;
    background-color: ${cores.CorFooter};
    padding: 8px;
    border: 4px solid ${(Props) => (Props.valid ? cores.Red : cores.CorFooter)};
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

export const BotaoAdicionar = styled.button`
  width: 94%;
  margin: 3%;
  color: ${cores.Rosa};
  background-color: ${cores.CorFooter};
  text-align: center;
  display: inline-block;
  font-weight: bold;
  cursor: pointer;
  border: none;
  padding: 4px;
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
      height: 100%;
    }
`
