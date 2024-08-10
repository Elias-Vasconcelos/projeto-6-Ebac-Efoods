import { Menu } from '../../Pages/Home'
import Dish from '../dish'
import { ListContainer } from './styles'

type Props = {
  Api: Menu[]
}
const DishList = ({ Api }: Props) => {
  return (
    <ListContainer>
      {Api.map((Item) => (
        <li key={Item.id}>
          <Dish Content={Item} />
        </li>
      ))}
    </ListContainer>
  )
}

export default DishList
