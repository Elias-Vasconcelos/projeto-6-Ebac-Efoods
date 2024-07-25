import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import { BotaoAdicionar } from '../../Styles'
import Lixeira from '../../assets/lixeira.jpg'

import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/CartSlice'
import { formataPreco } from '../Modal'

const Cart = () => {
  const { Carrinho } = useSelector((state: RootReducer) => state.Carrinho)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return Carrinho.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <S.CartContainer>
      <S.CartContent>
        <S.cardList>
          {Carrinho.map((Item) => (
            <S.card key={Item.id}>
              <img src={Item.foto} alt="" />
              <div>
                <h3> {Item.nome} </h3>
                <p> {formataPreco(Item.preco)} </p>
              </div>
              <span>
                <img
                  src={Lixeira}
                  alt="Lixeira"
                  onClick={() => dispatch(remove(Item))}
                />
              </span>
            </S.card>
          ))}
        </S.cardList>
        <S.Total>
          <p>Valor total</p>
          <p> {formataPreco(getTotalPrice())} </p>
        </S.Total>
        <BotaoAdicionar>Continuar com a entrega</BotaoAdicionar>
      </S.CartContent>
    </S.CartContainer>
  )
}

export default Cart
