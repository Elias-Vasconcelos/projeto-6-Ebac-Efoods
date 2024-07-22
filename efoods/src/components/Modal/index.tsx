import * as S from './styles'
import { BotaoAdicionar } from '../../Styles'
import Pizza from '../../assets/Pizza.png'

const Modal = () => (
    <S.ModalContainer>
        <div style={{ width: 100% ; justifyContent: end }} >
            <span>X</span>
        </div>
        <S.ModalContent>
            <img src={Pizza} alt="Pizza" />
            <div>
                <h4>Pizza Marguerita</h4>
                <p>A pizza Margherita e uma pizza classica da culinaria italiana, reconhecida por sua simplicidade e sabor inigualavel. Ela e feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericao fresco e azeite de oliva extra-virgem. A combinacao de sabores e perfeita, com o molho de tomate suculento e ligeiramente acido, o queijo derretido e cremoso e as folhas de manjericao frescas, que adicionam um toque de sabor herbaceo. E uma pizza simples, mas deliciosa, que agrada a todos os paladares e e uma otima opcao para qualquer ocasiao.
                 <br />
                 <br />
                 Serve: de 2 a 3 pessoas 
                 </p>
                 <BotaoAdicionar> Adicionar ao carrinho - R$ 60,90 </BotaoAdicionar>
            </div>
        </S.ModalContent>
    </S.ModalContainer>
)

export default Modal