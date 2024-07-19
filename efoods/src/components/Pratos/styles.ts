import styled from 'styled-components'
import { cores } from '../../Styles'

export const PratoCard = styled.div`
  background-color: ${cores.Rosa};
  position: relative;
  color: ${cores.CorFooter};

  img {
    width: 100%;
    margin: 8px;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-left: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 8px 8px 0 8px;
  }

  span {
    width: 100%;
    margin: 8px;
    color: ${cores.Rosa};
    background-color: ${cores.CorFooter};
    text-align: center;
  }
`