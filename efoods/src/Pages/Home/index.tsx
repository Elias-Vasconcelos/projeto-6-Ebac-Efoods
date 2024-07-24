import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import ListaDeRestaurantes from '../../components/ListaDeRestaurantes'
import { useEffect, useState } from 'react'

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
  const [Api, SetApi] = useState<TipoApi[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => SetApi(res))
  }, [])
  return (
    <>
      <Hero />
      <ListaDeRestaurantes restaurantes={Api} />
      <Footer />
    </>
  )
}
export default Home
