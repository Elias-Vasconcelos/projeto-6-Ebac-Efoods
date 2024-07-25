import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useGetCardapioQuery } from '../../services/api'
import Apresentacao from '../../components/Apresentacao'
import ListaPratos from '../../components/ListaDePratos'
import Cabecalho from '../../components/Header'
import Footer from '../../components/Footer'
import { RootReducer } from '../../store'
import Cart from '../../components/Cart'

const Perfil = () => {
  const { View } = useSelector((state: RootReducer) => state.Carrinho)
  const { id } = useParams()
  const { data: api } = useGetCardapioQuery(id!)
  if (api && id) {
    return (
      <>
        <Cabecalho />
        <Apresentacao Content={api} />
        {View === true && <Cart />}
        <ListaPratos ApiPratos={api.cardapio} />
        <Footer />
      </>
    )
  }
  return <div>Carregando....</div>
}
export default Perfil
