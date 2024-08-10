import { TypeApi } from '../../Pages/Home'
import * as S from './styles'

import star from '../../assets/Star.svg'

type Props = TypeApi

const Restaurant = ({
  title,
  score,
  cover,
  description,
  type,
  highlighted,
  id
}: Props) => (
  <S.Card>
    <div style={{ position: 'absolute', top: 16, right: 16 }}>
      <S.Teg> {type} </S.Teg>
      {highlighted === true ? <S.Teg> Destaque da semana </S.Teg> : <div></div>}
    </div>
    <S.Image src={cover} />
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <S.Title> {title} </S.Title>
      <div style={{ display: 'flex' }}>
        <S.Score> {score} </S.Score>
        <img src={star} alt="star" />
      </div>
    </div>
    <S.Score> {description} </S.Score>
    <S.Button to={`/Perfil/${id}`}>Saiba mais</S.Button>
  </S.Card>
)

export default Restaurant
