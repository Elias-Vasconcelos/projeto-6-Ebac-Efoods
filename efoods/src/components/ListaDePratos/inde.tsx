import Pratos from '../../modules/Pratos'
import {ListaContainer} from './styles'

type Props = {
    ApiPratos = Pratos[]
}

const ListaPratos = ( {ApiPratos}: Props ) => {

    return (
        <ListaContainer>
           {ApiPratos.map(Item => (
            
           ))}
        </ListaContainer>
    )
}