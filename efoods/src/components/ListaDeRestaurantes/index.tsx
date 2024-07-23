import Restaurante from '../Restaurante'
import { ListContainer } from './styles'
import { TipoApi } from '../../Pages/Home'

type Props = {
  restaurantes: TipoApi[]
}

const ListaDeRestaurantes = ({ restaurantes }: Props) => (
  <ListContainer>
    {restaurantes.map((restaurante) => (
      <li key={restaurante.id}>
        <Restaurante
          descricao={restaurante.descricao}
          id={restaurante.id}
          capa={restaurante.capa}
          titulo={restaurante.titulo}
          avaliacao={restaurante.avaliacao}
          destacado={restaurante.destacado}
          tipo={restaurante.tipo}
          cardapio={restaurante.cardapio}
        />
      </li>
    ))}
  </ListContainer>
)

export default ListaDeRestaurantes
