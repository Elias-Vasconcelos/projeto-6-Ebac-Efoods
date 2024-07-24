import * as S from './styles'
import { BotaoAdicionar } from '../../Styles'
import Close from '../../assets/close.svg'
import { Cardapio } from '../../Pages/Home'

type Props = {
  Closer: () => void
  Content: Cardapio
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Modal = ({ Closer, Content }: Props) => {
  return (
    <S.ModalContainer>
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
          <img src={Content.foto} alt="Pizza" />
          <div>
            <h4>{Content.nome}</h4>
            <p>
              {Content.descricao}
              <br />
              <br />
              {Content.porcao}
            </p>
            <BotaoAdicionar>
              Adicionar ao carrinho - ${formataPreco(Content.preco)}
            </BotaoAdicionar>
          </div>
        </S.ModalContent>
      </div>
    </S.ModalContainer>
  )
}

export default Modal
