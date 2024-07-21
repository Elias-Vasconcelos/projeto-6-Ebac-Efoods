import * as S from './styles'
import Imgfundo from '../../assets/apresentacao.png'

const Apresentacao = () => {
  return (
    <S.ApresentacaoContainer style={{ backgroundImage: `url(${Imgfundo}) ` }}>
      <S.Content>
        <p>Italiana</p>
        <h3>La Dolce Vita Trattoria</h3>
      </S.Content>
    </S.ApresentacaoContainer>
  )
}
export default Apresentacao
