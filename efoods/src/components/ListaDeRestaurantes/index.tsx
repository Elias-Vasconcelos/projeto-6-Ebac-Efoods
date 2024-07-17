import Restaurantes from '../../modules/Restaurantes'
import Restaurante from '../Restaurante'
import { ListContainer } from './styles'

type Props = {
  restaurantes: Restaurantes[]
}

const ListaDeRestaurantes = ({ restaurantes }: Props) => (
  <ListContainer>
    {restaurantes.map((restaurante) => (
      <li key={restaurante.id}>
        <Restaurante
          descricao={restaurante.descricao}
          id={restaurante.id}
          imagem={restaurante.imagem}
          nota={restaurante.nota}
          teg={restaurante.teg}
          titulo={restaurante.titulo}
        />
      </li>
    ))}
  </ListContainer>
)

export default ListaDeRestaurantes
