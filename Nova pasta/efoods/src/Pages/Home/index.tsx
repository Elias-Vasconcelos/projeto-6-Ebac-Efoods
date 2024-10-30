import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestautentQuery } from '../../services/api'

export interface Menu {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type TypeApi = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Menu[]
}

const Home = () => {
  const { data: Api } = useGetRestautentQuery()
  if (Api) {
    console.log(Api)
    return (
      <>
        <Hero />
        <RestaurantList Restaurants={Api} />
        <Footer />
      </>
    )
  }
  return <div>loading...</div>
}
export default Home
