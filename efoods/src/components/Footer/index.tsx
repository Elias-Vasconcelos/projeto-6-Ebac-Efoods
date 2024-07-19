import * as S from './styles'

import Logo from '../../assets/logo.svg'
import Instagram from '../../assets/instagram.svg'
import Facebook from '../../assets/facebook.svg'
import Twitter from '../../assets/twitter.svg'

const Footer = () => {
    return (
        <S.rodape>
          <S.rodapeContainer>
            <img src={Logo} alt="Logo" />
            <S.RedesSociais>
                <li><a href="#"><img src={Instagram} alt="Instagram" /></a></li>
                <li><a href="#"><img src={Facebook} alt="Facebook" /></a></li>
                <li><a href="#"><img src={Twitter} alt="Twitter" /></a></li>
            </S.RedesSociais>
            <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.</p>
          </S.rodapeContainer>
        </S.rodape>
    )
  }
  export default Footer
  