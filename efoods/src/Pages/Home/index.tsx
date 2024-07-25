import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ListaDeRestaurantes from '../../components/ListaDeRestaurantes'
import { useGetRestautentQuery } from '../../services/api'

export interface Cardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type TipoApi = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { data: Api } = useGetRestautentQuery()
  if (Api) {
    return (
      <>
        <Hero />
        <ListaDeRestaurantes restaurantes={Api} />
        <Footer />
      </>
    )
  }
  return <div>Carregando...</div>
}
export default Home
