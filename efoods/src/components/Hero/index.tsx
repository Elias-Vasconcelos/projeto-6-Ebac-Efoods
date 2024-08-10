import { Baner, Title } from './style'

import Logo from '../../assets/logo.svg'
import Banerimg from '../../assets/Cabecalho.svg'

const Hero = () => {
  return (
    <Baner style={{ backgroundImage: `url(${Banerimg}) ` }}>
      <img src={Logo} alt="Logo" />
      <Title> Viva experiências gastronômicas no conforto da sua casa </Title>
    </Baner>
  )
}
export default Hero
