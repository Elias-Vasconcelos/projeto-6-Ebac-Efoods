import * as S from './styles'
import { TypeApi } from '../../Pages/Home'

type Props = {
  Content: TypeApi
}

const Presentation = ({ Content }: Props) => {
  return (
    <S.presentationcaoContainer
      style={{ backgroundImage: `url(${Content.capa}) ` }}
    >
      <S.Content>
        <p> {Content.tipo} </p>
        <h3> {Content.titulo} </h3>
      </S.Content>
    </S.presentationcaoContainer>
  )
}
export default Presentation
