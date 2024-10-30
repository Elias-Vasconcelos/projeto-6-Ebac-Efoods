import RestaurantCard from '../Restaurant'
import { ListContainer } from './styles'
import { TypeApi } from '../../Pages/Home'

type Props = {
  Restaurants: TypeApi[]
}

const RestaurantList = ({ Restaurants }: Props) => (
  <ListContainer>
    {Restaurants.map((Restaurant) => (
      <li key={Restaurant.id}>
        <RestaurantCard
          descricao={Restaurant.descricao}
          id={Restaurant.id}
          capa={Restaurant.capa}
          titulo={Restaurant.titulo}
          avaliacao={Restaurant.avaliacao}
          destacado={Restaurant.destacado}
          tipo={Restaurant.tipo}
          cardapio={Restaurant.cardapio}
        />
      </li>
    ))}
  </ListContainer>
)

export default RestaurantList
