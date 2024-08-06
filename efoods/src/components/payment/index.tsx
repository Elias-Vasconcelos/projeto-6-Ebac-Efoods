import { BotaoAdicionar, SetForm } from '../../Styles'
import { SetGrup } from './styles'

const Payment = () => (
  <form>
    <SetForm>
      <label htmlFor="NameCard"> Nome no cartao </label>
      <input required type="text" id="NameCard" />
    </SetForm>
    <SetGrup>
      <SetForm>
        <label htmlFor="NumberCard"> Numero do cartao </label>
        <input required type="text" id="NumberCard" />
      </SetForm>
      <SetForm>
        <label htmlFor="CVV"> CVV </label>
        <input required type="text" id="CVV" />
      </SetForm>
    </SetGrup>
    <SetGrup>
      <SetForm>
        <label htmlFor="Expiration"> Mes de vencimento </label>
        <input required type="text" id="Expiration" />
      </SetForm>
      <SetForm>
        <label htmlFor="ExpirationYear"> Ano de vencimento </label>
        <input required type="text" id="ExpirationYear" />
      </SetForm>
    </SetGrup>
    <div style={{ margin: 24 }}>
      <BotaoAdicionar> Continuar com o pagamento </BotaoAdicionar>
      <BotaoAdicionar style={{ marginTop: 8 }}>
        {' '}
        Voltar para a edicao de endereco{' '}
      </BotaoAdicionar>
    </div>
  </form>
)

export default Payment
