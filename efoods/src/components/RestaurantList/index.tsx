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
          description={Restaurant.description}
          id={Restaurant.id}
          cover={Restaurant.cover}
          title={Restaurant.title}
          score={Restaurant.score}
          highlighted={Restaurant.highlighted}
          type={Restaurant.type}
          Menu={Restaurant.Menu}
        />
      </li>
    ))}
  </ListContainer>
)

export default RestaurantList
