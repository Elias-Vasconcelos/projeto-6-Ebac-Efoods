import Logo from '../../assets/logo.svg'
import CabecalhoContainer from './styles'
import Headerimg from '../../assets/Cabecalho.svg'
const Cabecalho = () => {
  return (
    <CabecalhoContainer style={{ backgroundImage: `url(${Headerimg}) ` }} > 
        <h3>Restaurantes</h3>
        <img src={Logo} alt="Logo" />
        <p>0 produto(s) no carrinho</p>
    </CabecalhoContainer> 
  )
}
export default Cabecalho
