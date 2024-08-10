import * as S from './styles'
import { TypeApi } from '../../Pages/Home'

type Props = {
  Content: TypeApi
}

const Presentation = ({ Content }: Props) => {
  return (
    <S.presentationcaoContainer
      style={{ backgroundImage: `url(${Content.cover}) ` }}
    >
      <S.Content>
        <p> {Content.type} </p>
        <h3> {Content.title} </h3>
      </S.Content>
    </S.presentationcaoContainer>
  )
}
export default Presentation
