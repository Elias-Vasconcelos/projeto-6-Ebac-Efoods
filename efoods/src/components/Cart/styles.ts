import styled from 'styled-components'
import { cores } from '../../Styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`
export const CartContent = styled.div`
  width: 360px ; 
  height: 100%;
  background-color: ${cores.Rosa};
  font-size: 14px;

 ${BotaoAdicionar} {
    max-width: 340px;
    width: 100%;
    padding: 4px 16px;
  }
`

export const cardList = styled.ul`
  max-height: 928px;
  overflow: hidden;
  overflow-y: scroll;
  margin-bottom: 24px;
`

export const card = styled.li`
  margin: 0 8px 16px 8px;
  width: 100%;
  background-color: ${cores.CorFooter};
  color: ${cores.Rosa};
  display: flex;

  img {
    width: 80px ; 
    height: 80px;
  }

  h3 {
    font-size: 18px;
    font-Weight: bold;
  }
`
export const Total = styled.div`
  margin: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-Weight: bold;
`
