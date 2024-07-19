import * as S from './style'
import Pratos from '../../modules/Pratos'

type Props = Pratos

const Prato = ( { imagem, titulo, descricao }: Props) => {
  return (
    <S.PratoCard>
    <img src={imagem} alt="" />
    <h4>{titulo}</h4>
    <p>{descricao}</p>
    <span>Adicionar ao carrinho</span>
    </S.PratoCard>
  )
}
export default Prato
