import { useDispatch } from 'react-redux'

import * as S from './styles'
import { BotaoAdicionar, Overlay } from '../../Styles'
import Close from '../../assets/close.svg'
import { Menu } from '../../Pages/Home'
import { add } from '../../store/reducers/CartSlice'

type Props = {
  Closer: () => void
  Content: Menu
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Modal = ({ Closer, Content }: Props) => {
  const dispatch = useDispatch()
  return (
    <S.ModalContainer>
      <Overlay onClick={() => Closer()} />
      <div style={{ position: 'relative' }}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute'
          }}
        >
          <span style={{ margin: 8 }} onClick={() => Closer()}>
            <img src={Close} alt="" />
          </span>
        </div>
        <S.ModalContent>
          <img src={Content.photo} alt="Pizza" />
          <div>
            <h4>{Content.name}</h4>
            <p>
              {Content.Menudescription}
              <br />
              <br />
              {Content.portion}
            </p>
            <BotaoAdicionar onClick={() => dispatch(add(Content))}>
              Adicionar ao carrinho - ${formataPreco(Content.price)}
            </BotaoAdicionar>
          </div>
        </S.ModalContent>
      </div>
    </S.ModalContainer>
  )
}

export default Modal
