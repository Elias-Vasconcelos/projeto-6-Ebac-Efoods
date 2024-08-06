import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import * as S from './styles'
import { BotaoAdicionar, Overlay } from '../../Styles'
import Lixeira from '../../assets/lixeira.jpg'
import * as enums from '../../utis/enums/index'

import { RootReducer } from '../../store'
import { remove, close } from '../../store/reducers/CartSlice'
import { formataPreco } from '../Modal'
import Delivery from '../Delivery'

const Cart = () => {
  const { Carrinho } = useSelector((state: RootReducer) => state.Carrinho)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return Carrinho.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }
  const [Payment, setPayment] = useState(enums.SetPayment.Order)

  return (
    <S.CartContainer>
      <Overlay onClick={() => dispatch(close())} />
      <S.CartContent>
        <S.SetrContent show={Payment === enums.SetPayment.Order}>
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
          <BotaoAdicionar onClick={() => setPayment(enums.SetPayment.Delivery)}>
            Continuar com a entrega
          </BotaoAdicionar>
        </S.SetrContent>
        <S.SetrContent show={Payment === enums.SetPayment.Delivery}>
          <Delivery />
          <div>
            <BotaoAdicionar> Continuar com o pagamento </BotaoAdicionar>
            <BotaoAdicionar style={{ marginTop: 8 }}>
              Voltar para o carrinho
            </BotaoAdicionar>
          </div>
        </S.SetrContent>
      </S.CartContent>
    </S.CartContainer>
  )
}

export default Cart
