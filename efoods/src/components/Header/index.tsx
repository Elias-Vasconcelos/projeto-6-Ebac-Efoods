import { useSelector, useDispatch } from 'react-redux'

import Logo from '../../assets/logo.svg'
import * as S from './styles'
import Headerimg from '../../assets/Cabecalho.svg'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/CartSlice'

const Header = () => {
  const dispatch = useDispatch()
  const { Cart } = useSelector((state: RootReducer) => state.Cart)
  return (
    <S.HeaderContainer style={{ backgroundImage: `url(${Headerimg}) ` }}>
      <S.Content>
        <S.Links to={'/'}>Restaurantes</S.Links>
        <S.Links to={'/'}>
          <img src={Logo} alt="Logo" />
        </S.Links>
        <p onClick={() => dispatch(open())}>
          {Cart.length} produto(s) no carrinho
        </p>
      </S.Content>
      <S.tabletContent>
        <S.Links to={'/'}>
          <img src={Logo} alt="Logo" />
        </S.Links>
        <div>
          <S.Links to={'/'}>Restaurantes</S.Links>
          <p onClick={() => dispatch(open())}>
            {Cart.length} produto(s) no carrinho
          </p>
        </div>
      </S.tabletContent>
    </S.HeaderContainer>
  )
}
export default Header
