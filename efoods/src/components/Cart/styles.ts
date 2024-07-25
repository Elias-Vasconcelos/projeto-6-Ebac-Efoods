import styled from 'styled-components'
import { cores, BotaoAdicionar } from '../../Styles'

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
  width: 360px;
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
  margin: 24px 0;
`

export const card = styled.li`
  margin: 0 8px 16px 8px;
  width: 100%;
  background-color: ${cores.CorFooter};
  color: ${cores.Rosa};
  display: flex;
  position: relative;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    position: absolute;
    bottom: 8px;
    right: 16px;
    width: 16px;
    height: 16px;
    background: transparent;
  }
`
export const Total = styled.div`
  margin: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`
