import * as S from './styles'
import Pratos from '../../modules/Pratos'
import { BotaoAdicionar } from '../../Styles'
import { useState } from 'react'
import Modal from '../Modal'

type Props = Pratos

const Prato = ({ imagem, titulo, descricao }: Props) => {
  const [viewModal, setviewModal] = useState(false)
  return (
    <>
      <S.PratoCard>
        <img src={imagem} alt="" />
        <h4>{titulo}</h4>
        <p>{descricao}</p>
        <BotaoAdicionar onClick={() => setviewModal(true)}>
          Adicionar ao carrinho
        </BotaoAdicionar>
      </S.PratoCard>
      {viewModal === true ? (
        <Modal Closer={() => setviewModal(false)} />
      ) : (
        <div></div>
      )}
    </>
  )
}
export default Prato
