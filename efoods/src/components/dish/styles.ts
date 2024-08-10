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
    height: 217px;
    object-fit: cover;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-left: 8px;
  }

  p:first-of-type {
    height: 64px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
    margin: 8px 8px 0 8px;
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
