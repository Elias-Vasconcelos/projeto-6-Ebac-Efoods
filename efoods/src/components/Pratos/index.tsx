import * as S from './styles'
import { BotaoAdicionar } from '../../Styles'
import { useState } from 'react'
import Modal from '../Modal'
import { Cardapio } from '../../Pages/Home'

type Props = {
  Content: Cardapio
}

const Prato = ({ Content }: Props) => {
  const [viewModal, setviewModal] = useState(false)
  return (
    <>
      <S.PratoCard>
        <img src={Content.foto} alt="" />
        <h4>{Content.nome}</h4>
        <p>{Content.descricao}</p>
        <br />
        <br />
        <p> {Content.porcao} </p>
        <BotaoAdicionar onClick={() => setviewModal(true)}>
          Adicionar ao carrinho
        </BotaoAdicionar>
      </S.PratoCard>
      {viewModal === true ? (
        <Modal Closer={() => setviewModal(false)} Content={Content} />
      ) : (
        <div></div>
      )}
    </>
  )
}
export default Prato
