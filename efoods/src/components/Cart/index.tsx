import * as S from './styles'
import { BotaoAdicionar } from '../../Styles'


const Cart = () => {

    return(
        <S.CartContainer>
          <S.CartContent>
            <S.cardList>
              <S.card>
                <img src="" alt="" />
                <div>
                    <h3></h3>
                    <p></p>
                </div>
              </S.card>
            </S.cardList>
            <S.Total>
                <p>Valor total</p>
                <p>R$ 182,70</p>
            </S.Total>
              <BotaoAdicionar>Continuar com a entrega</BotaoAdicionar>
          </S.CartContent>
        </S.CartContainer>
    )
}

export default Cart