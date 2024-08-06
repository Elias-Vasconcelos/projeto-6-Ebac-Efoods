import { BotaoAdicionar, SetForm } from '../../Styles'
import { SetGrup } from './styles'

type Props = {
  show: boolean
}

const Payment = ( {show}: Props ) => {
  const formulario = useFormik({
    initialValues: {
      NameCard: '',
      NumberCard: '',
      CVV: '',
      Expiration: '',
      ExpirationYear: '',
    },
    validationSchema: Yup.object({
      NameCard: Yup.string().when((values, schema) =>
        show ? schema.required('O campo e obrigatorio') : schema
        ),
      NumberCard: Yup.string().when((values, schema) =>
          show ? schema.required('O campo e obrigatorio') : schema
        ),
      CVV: Yup.string().when((values, schema) =>
          show ? schema.required('O campo e obrigatorio') : schema
        ),
      Expiration: Yup.string().when((values, schema) =>
          show ? schema.required('O campo e obrigatorio') : schema
        ),
      ExpirationYear: Yup.string().when((values, schema) =>
          show ? schema.required('O campo e obrigatorio') : schema
        ),
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <form>
      <SetForm>
        <label htmlFor="NameCard"> Nome no cartao </label>
        <input  name="NameCard" value={formulario.values.NameCard} onChange={formulario.handleChange} onBlur={formulario.handleBlur} required type="text" id="NameCard" />
      </SetForm>
      <SetGrup>
        <SetForm>
          <label htmlFor="NumberCard"> Numero do cartao </label>
          <input  name="NumberCard" value={formulario.values.NumberCard} onChange={formulario.handleChange} onBlur={formulario.handleBlur} required type="text" id="NumberCard" />
        </SetForm>
        <SetForm>
          <label htmlFor="CVV"> CVV </label>
          <input  name="CVV" value={formulario.values.CVV} onChange={formulario.handleChange} onBlur={formulario.handleBlur} required type="text" id="CVV" />
        </SetForm>
      </SetGrup>
      <SetGrup>
        <SetForm>
          <label htmlFor="Expiration"> Mes de vencimento </label>
          <input  name="Expiration" value={formulario.values.Expiration} onChange={formulario.handleChange} onBlur={formulario.handleBlur} required type="text" id="Expiration" />
        </SetForm>
        <SetForm>
          <label htmlFor="ExpirationYear"> Ano de vencimento </label>
          <input  name="ExpirationYear" value={formulario.values.ExpirationYear} onChange={formulario.handleChange} onBlur={formulario.handleBlur} required type="text" id="ExpirationYear" />
        </SetForm>
      </SetGrup>
      <div style={{ margin: 24 }}>
        <BotaoAdicionar> Continuar com o pagamento </BotaoAdicionar>
        <BotaoAdicionar style={{ marginTop: 8 }}>
          Voltar para a edicao de endereco
        </BotaoAdicionar>
      </div>
    </form>
  )
  
}
export default Payment
