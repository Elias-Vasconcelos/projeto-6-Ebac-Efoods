import { TipoApi } from '../../Pages/Home'
import * as S from './styles'

import star from '../../assets/Star.svg'

type Props = TipoApi

const Restaurante = ({
  titulo,
  avaliacao,
  capa,
  descricao,
  tipo,
  destacado
}: Props) => (
  <S.Card>
    <div style={{ position: 'absolute', top: 16, right: 16 }}>
      <S.Teg> {tipo} </S.Teg>
      {destacado === true ? <S.Teg> Destaque da semana </S.Teg> : <div></div>}
    </div>
    <S.Imagem src={capa} />
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <S.Titulo> {titulo} </S.Titulo>
      <div style={{ display: 'flex' }}>
        <S.Nota> {avaliacao} </S.Nota>
        <img src={star} alt="star" />
      </div>
    </div>
    <S.Descricao> {descricao} </S.Descricao>
    <S.Button to={'/Perfil'}>Saiba mais</S.Button>
  </S.Card>
)

export default Restaurante
