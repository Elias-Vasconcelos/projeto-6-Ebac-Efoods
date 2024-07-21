import Pratos from '../../modules/Pratos'
import Prato from '../Pratos'
import { ListaContainer } from './styles'

type Props = {
  ApiPratos: Pratos[]
}
const ListaPratos = ({ ApiPratos }: Props) => {
  return (
    <ListaContainer>
      {ApiPratos.map((Item) => (
        <li key={Item.id}>
          <Prato
            imagem={Item.imagem}
            titulo={Item.titulo}
            descricao={Item.descricao}
            id={Item.id}
          />
        </li>
      ))}
    </ListaContainer>
  )
}

export default ListaPratos
