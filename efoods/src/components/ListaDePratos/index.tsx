import { Cardapio } from '../../Pages/Home'
import Prato from '../Pratos'
import { ListaContainer } from './styles'

type Props = {
  ApiPratos: Cardapio[]
}
const ListaPratos = ({ ApiPratos }: Props) => {
  return (
    <ListaContainer>
      {ApiPratos.map((Item) => (
        <li key={Item.id}>
          <Prato Content={Item} />
        </li>
      ))}
    </ListaContainer>
  )
}

export default ListaPratos
