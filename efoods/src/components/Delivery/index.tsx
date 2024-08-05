import { SetGrup } from "./styles"
import { BotaoAdicionar, SetForm } from '../../Styles'

const Delivery = () => (
<form>
    <SetForm>
        <label htmlFor="receive"> Quem ira receber </label>
        <input required type="text" id="receive" />
    </SetForm>
    <SetForm>
        <label htmlFor="Endereco"> Endereco </label>
        <input required type="text" id="Endereco" />
    </SetForm>
    <SetForm>
        <label htmlFor="Cidade"> Cidade </label>
        <input required type="text" id="Cidade" />
    </SetForm>
    <SetGrup>
    <SetForm>
        <label htmlFor="CEP"> CEP </label>
        <input required type="text" id="CEP"  />
    </SetForm>
    <SetForm>
        <label htmlFor="Numero"> Numero </label>
        <input required type="text" id="Numero" />
    </SetForm>
    </SetGrup>
    <SetForm  >
        <label htmlFor="Complemento"> Complemento (opcional) </label>
        <input type="text" id="Complemento" />
    </SetForm>
    <div style={{ margin: 24 }} >
        <BotaoAdicionar> Continuar com o pagamento </BotaoAdicionar>
        <BotaoAdicionar styleTop={{ marginTop: 8 }} > Voltar para o carrinho </BotaoAdicionar>
    </div>
</form>
)

export default Delivery