import styled from 'styled-components';
import { cores } from '../../Styles';

export const ModalContainer = styled.div`
  background-color: ${cores.Rosa};
  width: 1024px;
  position: fixed;
  top: 50vh;
  left: 50vw;
  `;
  // transform: translate(-50%, -50%); // Para centralizar corretamente o modal
  
export const ModalContent = styled.div`
  margin: 32px;
  display: grid;
  grid-template-columns: repeat(2, 280px 1fr);
  justify-content: center;
  width: 100%;
  column-gap: 24px;
  font-size: 14px;
  color: ${cores.Branco};

  img {
    display: block;
    max-width: 280px;
    width: 100%;
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    line-height: 22px;
  }


 ${BotaoAdicionar} {
     max-width: 218px;
     width: 100%;
   }
`