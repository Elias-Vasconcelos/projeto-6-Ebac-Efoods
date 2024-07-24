import Logo from '../../assets/logo.svg'
import * as S from './styles'
import Headerimg from '../../assets/Cabecalho.svg'

const Cabecalho = () => {
  return (
    <S.CabecalhoContainer style={{ backgroundImage: `url(${Headerimg}) ` }}>
      <S.Content>
        <S.Links to={'/'}>Restaurantes</S.Links>
        <S.Links to={'/'}>
          <img src={Logo} alt="Logo" />
        </S.Links>
        <p>0 produto(s) no carrinho</p>
      </S.Content>
    </S.CabecalhoContainer>
  )
}
export default Cabecalho
