import styled from 'styled-components'
import { cores, BotaoAdicionar } from '../../Styles'

type GrupProps = {
  col1: string
  col2: string
}

type Props = {
  show: boolean
}

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  ${BotaoAdicionar} {
    display: inline-block;
    width: 320px;
    padding: 4px 16px;
  }
`

export const FormTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  color: ${cores.CorFooter};
`

export const SetGrup = styled.div<GrupProps>`
  display: grid;
  grid-template-columns: ${({ col1, col2 }) => `repeat(1, ${col1} ${col2})`};
  justify-content: space-between;
`

export const SetrContent = styled.div<Props>`
  display: ${(Props) => (Props.show === true ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin: 8px;
  padding-right: 16px;
`

export const CartContent = styled.div`
  height: 100%;
  background-color: ${cores.Rosa};
  font-size: 14px;
  z-index: 1;
  padding-top: 8px;
  width: 360px;
  color: ${cores.CorFooter};
  position: relative;
`

export const cardList = styled.ul`
  margin: 24px 0;
  width: 95%;
`

export const card = styled.li`
  height: 100px;
  width: 100%;
  background-color: ${cores.CorFooter};
  color: ${cores.Rosa};
  display: flex;
  align-items: center;
  position: relative;
  margin: 8px;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 0 8px;
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
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`
