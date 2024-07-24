import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Apresentacao from '../../components/Apresentacao'
import ListaPratos from '../../components/ListaDePratos'
import { TipoApi } from '../Home'
import Cabecalho from '../../components/Header'
import Footer from '../../components/Footer'

const Perfil = () => {
  const { id } = useParams()
  const [api, Setapi] = useState<TipoApi>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => Setapi(res))
  }, [id])
  if (!id) {
    return <div>Carregando....</div>
  }
  if (!api) {
    return <div>Carregando....</div>
  }
  return (
    <>
      <Cabecalho />
      <Apresentacao Content={api} />
      <ListaPratos ApiPratos={api.cardapio} />
      <Footer />
    </>
  )
}
export default Perfil
