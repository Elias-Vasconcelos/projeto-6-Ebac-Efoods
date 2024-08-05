import * as Yup from 'yup'
import { useFormik } from 'formik'

import { SetGrup } from "./styles"
import { BotaoAdicionar, SetForm } from '../../Styles'

const Delivery = () => {
 const formulario = useFormik({
    initialValues: {
        receive: '',
        Endereco: '',
        Cidade: '',
        CEP: '',
        Numero: ''


    }
 })
    return (
        <form>
            <SetForm>
                <label htmlFor="receive"> Quem ira receber </label>
                <input  name="receive" value={formulario.values.receive}  onChage={formulario.handleChange} onBlur={formulario.handleBlur} required type="text" id="receive" />
            </SetForm>
            <SetForm>
                <label htmlFor="Endereco"> Endereco </label>
                <input  name="Endereco" value={formulario.values.Endereco}  onChage={formulario.handleChange} onBlur={formulario.handleBlur} required type="text" id="Endereco" />
            </SetForm>
            <SetForm>
                <label htmlFor="Cidade"> Cidade </label>
                <input  name="Endereco" value={formulario.values.Endereco}  onChage={formulario.handleChange} onBlur={formulario.handleBlur} required type="text" id="Cidade" />
            </SetForm>
            <SetGrup>
            <SetForm>
                <label htmlFor="CEP"> CEP </label>
                <input  name="CEP" value={formulario.values.CEP}  onChage={formulario.handleChange} onBlur={formulario.handleBlur} required type="text" id="CEP"  />
            </SetForm>
            <SetForm>
                <label htmlFor="Numero"> Numero </label>
                <input  name="Numero" value={formulario.values.Numero}  onChage={formulario.handleChange} onBlur={formulario.handleBlur} required type="text" id="Numero" />
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
}

export default Delivery