import * as S from './styles'
import { TipoApi } from '../../Pages/Home'

type Props = {
  Content: TipoApi
}

const Apresentacao = ({ Content }: Props) => {
  return (
    <S.ApresentacaoContainer style={{ backgroundImage: `url(${Content.}) ` }}>
      <S.Content>
        <p> {Content.tipo} </p>
        <h3> {Content.titulo} </h3>
      </S.Content>
    </S.ApresentacaoContainer>
  )
}
export default Apresentacao
