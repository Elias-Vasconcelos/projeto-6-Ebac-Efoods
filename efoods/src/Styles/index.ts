import { createGlobalStyle } from 'styled-components'

export const cores = {
  Rosa: '#E66767',
  CorFundo: '#FFF8F2',
  CorFooter: '#FFEBD9',
  Branco: '#fff'
}
export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
}
  body {
    background-color:${cores.CorFundo};
    }
`
