import { useEffect, useState } from 'react'

import { EstiloGlobal } from '../../Styles'
import Footer from '../../components/Footer'
import Cabecalho from '../../components/Header'
import Apresentacao from '../../components/Apresentacao'
import ListaPratos from '../../components/ListaDePratos'
import { Cardapio } from '../Home'

const Perfil = () => {
  const [ApiPratos, SetApiPratos] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => SetApiPratos(res))
  }, [])
  return (
    <>
      <EstiloGlobal />
      <Cabecalho />
      <Apresentacao />
      <ListaPratos ApiPratos={ApiPratos} />
      <Footer />
    </>
  )
}
export default Perfil
