import Restaurantes from '../../modules/Restaurantes'
import * as S from './styles'

import star from '../../assets/Star.svg'

type Props = Restaurantes

const Restaurante = ({ descricao, imagem, nota, teg, titulo }: Props) => (
  <S.Card>
    <div style={{ position: 'absolute', top: 16, right: 16 }}>
      {teg.map((Tegs) => (
        <S.Teg key={Tegs}> {Tegs} </S.Teg>
      ))}
    </div>
    <S.Imagem src={imagem} />
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <S.Titulo> {titulo} </S.Titulo>
      <div style={{ display: 'flex' }}>
        <S.Nota> {nota} </S.Nota>
        <img src={star} alt="star" />
      </div>
    </div>
    <S.Descricao> {descricao} </S.Descricao>
    <S.Button to={'/Perfil'}>Saiba mais</S.Button>
  </S.Card>
)

export default Restaurante
