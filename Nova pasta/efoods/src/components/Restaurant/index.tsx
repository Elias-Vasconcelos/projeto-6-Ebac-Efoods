import { TypeApi } from '../../Pages/Home'
import * as S from './styles'

import star from '../../assets/Star.svg'

type Props = TypeApi

const Restaurant = ({
  titulo,
  avaliacao,
  capa,
  descricao,
  tipo,
  destacado,
  id
}: Props) => {
  const sliceDescription = (descricao: string) =>
    descricao.slice(0, 272) + '...'
  return (
    <S.Card>
      <div style={{ position: 'absolute', top: 16, right: 16 }}>
        <S.Teg> {tipo} </S.Teg>
        {destacado === true ? <S.Teg> Destaque da semana </S.Teg> : <div></div>}
      </div>
      <S.Image src={capa} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '97%'
        }}
      >
        <S.Title> {titulo} </S.Title>
        <div style={{ display: 'flex' }}>
          <S.Score> {avaliacao} </S.Score>
          <img src={star} alt="star" />
        </div>
      </div>
      <S.Description> {sliceDescription(descricao)} </S.Description>
      <S.Button to={`/Perfil/${id}`}>Saiba mais</S.Button>
    </S.Card>
  )
}

export default Restaurant
