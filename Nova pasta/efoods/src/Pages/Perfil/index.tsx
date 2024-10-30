import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useGetCardapioQuery } from '../../services/api'
import Presentation from '../../components/presentation'
import DishList from '../../components/DishList'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { RootReducer } from '../../store'
import Cart from '../../components/Cart'

const Perfil = () => {
  const { View } = useSelector((state: RootReducer) => state.Cart)
  const { id } = useParams()
  const { data: api } = useGetCardapioQuery(id!)
  if (api && id) {
    return (
      <>
        <Header />
        <Presentation Content={api} />
        {View === true && <Cart />}
        <DishList Api={api.cardapio} />
        <Footer />
      </>
    )
  }
  return <div>Carregando....</div>
}
export default Perfil
