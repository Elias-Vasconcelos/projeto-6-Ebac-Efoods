import { useParams } from 'react-router-dom'

import { useGetCardapioQuery } from '../../services/api'
import Apresentacao from '../../components/Apresentacao'
import ListaPratos from '../../components/ListaDePratos'
import Cabecalho from '../../components/Header'
import Footer from '../../components/Footer'

const Perfil = () => {
  const { id } = useParams()
  const { data: api } = useGetCardapioQuery(id!)
  if (api && id) {
    return (
      <>
        <Cabecalho />
        <Apresentacao Content={api} />
        <ListaPratos ApiPratos={api.cardapio} />
        <Footer />
      </>
    )
  }
  return <div>Carregando....</div>
}
export default Perfil
