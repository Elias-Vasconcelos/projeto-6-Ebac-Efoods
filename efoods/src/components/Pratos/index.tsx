import * as S from './styles'
import Pratos from '../../modules/Pratos'
import { BotaoAdicionar } from '../../Styles'

type Props = Pratos

const Prato = ({ imagem, titulo, descricao }: Props) => {
  return (
    <S.PratoCard>
      <img src={imagem} alt="" />
      <h4>{titulo}</h4>
      <p>{descricao}</p>
      <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>
    </S.PratoCard>
  )
}
export default Prato
