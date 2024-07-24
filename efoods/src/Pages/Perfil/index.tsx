import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { EstiloGlobal } from '../../Styles'
import Footer from '../../components/Footer'
import Cabecalho from '../../components/Header'
import Apresentacao from '../../components/Apresentacao'
import ListaPratos from '../../components/ListaDePratos'
import { TipoApi, Cardapio } from '../Home'

const Perfil = () => {
  const { id } = useParams()
  const [Api, SetApi] = useState<TipoApi>({})
  const [ApiPratos, SetApiPratos] = useState<Cardapio[]>([])
  

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => SetApi(res))
  }, [])

  const Cardapio = SetApiPratos(Api.cardapio)
  return (
    <>
      <Apresentacao  Content={Api} />
      <ListaPratos ApiPratos={ApiPratos} />
    </>
  )
}
export default Perfil
