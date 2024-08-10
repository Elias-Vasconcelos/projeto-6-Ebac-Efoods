import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestautentQuery } from '../../services/api'

export interface Menu {
  photo: string
  price: number
  id: number
  name: string
  Menudescription: string
  portion: string
}

export type TypeApi = {
  id: number
  title: string
  highlighted: boolean
  type: string
  score: number
  description: string
  cover: string
  Menu: Menu[]
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
