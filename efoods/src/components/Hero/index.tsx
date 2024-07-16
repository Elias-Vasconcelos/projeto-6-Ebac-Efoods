import { Baner, Titulo } from './style'

import Logo from '../../assets/logo.svg'
import Banerimg from '../../assets/Cabecalho.svg'

const Hero = () => {
  return (
    <Baner style={{ backgroundImage: `url(${Banerimg}) ` }}>
      <img src={Logo} alt="Logo" />
      <Titulo> Viva experiências gastronômicas no conforto da sua casa </Titulo>
    </Baner>
  )
}
export default Hero
