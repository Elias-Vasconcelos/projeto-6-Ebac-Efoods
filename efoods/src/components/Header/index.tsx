import { useSelector, useDispatch } from 'react-redux'

import Logo from '../../assets/logo.svg'
import * as S from './styles'
import Headerimg from '../../assets/Cabecalho.svg'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/CartSlice'

const Cabecalho = () => {
  const dispatch = useDispatch()
  const { Carrinho } = useSelector((state: RootReducer) => state.Carrinho)
  return (
    <S.CabecalhoContainer style={{ backgroundImage: `url(${Headerimg}) ` }}>
      <S.Content>
        <S.Links to={'/'}>Restaurantes</S.Links>
        <S.Links to={'/'}>
          <img src={Logo} alt="Logo" />
        </S.Links>
        <p onClick={() => dispatch(open())}>
          {Carrinho.length} produto(s) no carrinho
        </p>
      </S.Content>
      <S.tabletContent>
        <S.Links to={'/'}>
          <img src={Logo} alt="Logo" />
        </S.Links>
        <div>
          <S.Links to={'/'}>Restaurantes</S.Links>
          <p onClick={() => dispatch(open())}>
            {Carrinho.length} produto(s) no carrinho
          </p>
        </div>
      </S.tabletContent>
    </S.CabecalhoContainer>
  )
}
export default Cabecalho
