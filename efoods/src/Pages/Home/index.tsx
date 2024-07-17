import Hero from '../../components/Hero'
import ListaDeRestaurantes from '../../components/ListaDeRestaurantes'
import Restaurantes from '../../modules/Restaurantes'
import { EstiloGlobal } from '../../Styles'
import Sushi from '../../assets/Sushi.png'
import Italiano from '../../assets/italiano.png'

const ApiRestaurant: Restaurantes[] = [
  {
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: Sushi,
    nota: '4.9',
    teg: ['Destaque da semana', 'Japonesa'],
    titulo: 'Hioki Sushi',
    id: 1
  },
  {
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: Italiano,
    nota: '4.6',
    teg: ['Italiana'],
    titulo: 'La Dolce Vita Trattoria',
    id: 2
  },
  {
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: Italiano,
    nota: '4.6',
    teg: ['Italiana'],
    titulo: 'La Dolce Vita Trattoria',
    id: 3
  },
  {
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: Italiano,
    nota: '4.6',
    teg: ['Italiana'],
    titulo: 'La Dolce Vita Trattoria',
    id: 4
  },
  {
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: Italiano,
    nota: '4.6',
    teg: ['Italiana'],
    titulo: 'La Dolce Vita Trattoria',
    id: 5
  },
  {
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: Italiano,
    nota: '4.6',
    teg: ['Italiana'],
    titulo: 'La Dolce Vita Trattoria',
    id: 6
  }
]

const Home = () => (
  <>
    <EstiloGlobal />
    <Hero />
    <ListaDeRestaurantes restaurantes={ApiRestaurant} />
  </>
)
export default Home
