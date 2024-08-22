import styled from 'styled-components'
import { cores } from '../../Styles'

export const DishCard = styled.div`
  background-color: ${cores.Rosa};
  position: relative;
  color: ${cores.CorFooter};
  height: 100%;
  img {
    width: 94%;
    margin: 3%;
    height: 167px;
    object-fit: cover;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin: 0 8px 8px 8px;
  }

  p {
    height: 88px;
    margin-left: 8px;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    width: 94%;
  }
  span {
    width: 94%;
    margin: 3%;
    color: ${cores.Rosa};
    background-color: ${cores.CorFooter};
    text-align: center;
    display: inline-block;
    font-weight: bold;
    img {
    }
  }
`
