import * as S from './styles'
import { BotaoAdicionar } from '../../Styles'
import { useState } from 'react'
import Modal from '../Modal'
import { Menu } from '../../Pages/Home'

type Props = {
  Content: Menu
}

const Dish = ({ Content }: Props) => {
  const [viewModal, setviewModal] = useState(false)
  const sliceDescription = (descricao: string) =>
    descricao.slice(0, 132) + '...'
  return (
    <>
      <S.DishCard>
        <img src={Content.foto} alt="" />
        <h4>{Content.nome}</h4>
        <p>{sliceDescription(Content.descricao)}</p>
        <BotaoAdicionar onClick={() => setviewModal(true)}>
          Adicionar ao carrinho
        </BotaoAdicionar>
      </S.DishCard>
      {viewModal === true ? (
        <Modal Closer={() => setviewModal(false)} Content={Content} />
      ) : (
        <div></div>
      )}
    </>
  )
}
export default Dish
