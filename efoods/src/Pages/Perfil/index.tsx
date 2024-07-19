import { EstiloGlobal } from '../../Styles'

import Footer from '../../components/Footer'
import Cabecalho from '../../components/Header'
import Apresentacao from '../../components/Apresentacao'
import ListaPratos from '../../components/ListaDePratos'
import Pratos from '../../modules/Pratos'

import Pizza from '../../assets/Pizza.png'

const Api: Pratos[] = [
    {
        imagem: {Pizza} , 
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' ,
        id: 1
    }
    {
        imagem: {Pizza} , 
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' ,
        id: 2
    }
    {
        imagem: {Pizza} , 
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' ,
        id: 3
    }
    {
        imagem: {Pizza} , 
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' ,
        id: 4
    }
    {
        imagem: {Pizza} , 
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' ,
        id: 5
    }
    {
        imagem: {Pizza} , 
        titulo: 'Pizza Marguerita',
        descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' ,
        id: 6
    }
]

const Perfil = () => (
    <>
      <EstiloGlobal />
      <Cabecalho />
      <Apresentacao />
      <ListaPratos ApiPratos={Api}  />
      <Footer />
    </>
  )
  export default Perfil