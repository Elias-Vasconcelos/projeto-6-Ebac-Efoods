import * as Yup from 'yup'
import { useFormik } from 'formik'

import { SetGrup } from './styles'
import { SetForm } from '../../Styles'

const Delivery = () => {
  const formulario = useFormik({
    initialValues: {
      receive: '',
      Endereco: '',
      Cidade: '',
      CEP: '',
      Numero: ''
    },
    validationSchema: Yup.object({
      receive: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo obrigatorio'),
      Endereco: Yup.string()
        .min(5, 'O Endereco precisa ter pelo menos 10 caracteres')
        .required('O campo obrigatorio'),
      Cidade: Yup.string()
        .min(5, 'A cidade precisa ter pelo menos 5 caracteres')
        .required('O campo obrigatorio'),
      CEP: Yup.string()
        .min(9, 'O cep precisa ter pelo menos 8 caracteres')
        .max(9, 'O cep precisa ter pelo menos 8 caracteres')
        .required('O campo obrigatorio'),
      Numero: Yup.string()
        .min(2, 'O Numero precisa ter pelo menos 2 caracteres')
        .required('O campo obrigatorio')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <form>
      <SetForm>
        <label htmlFor="receive"> Quem ira receber </label>
        <input
          name="receive"
          value={formulario.values.receive}
          onChange={formulario.handleChange}
          onBlur={formulario.handleBlur}
          required
          type="text"
          id="receive"
        />
      </SetForm>
      <SetForm>
        <label htmlFor="Endereco"> Endereco </label>
        <input
          name="Endereco"
          value={formulario.values.Endereco}
          onChange={formulario.handleChange}
          onBlur={formulario.handleBlur}
          required
          type="text"
          id="Endereco"
        />
      </SetForm>
      <SetForm>
        <label htmlFor="Cidade"> Cidade </label>
        <input
          name="Endereco"
          value={formulario.values.Endereco}
          onChange={formulario.handleChange}
          onBlur={formulario.handleBlur}
          required
          type="text"
          id="Cidade"
        />
      </SetForm>
      <SetGrup>
        <SetForm>
          <label htmlFor="CEP"> CEP </label>
          <input
            name="CEP"
            value={formulario.values.CEP}
            onChange={formulario.handleChange}
            onBlur={formulario.handleBlur}
            required
            type="text"
            id="CEP"
          />
        </SetForm>
        <SetForm>
          <label htmlFor="Numero"> Numero </label>
          <input
            name="Numero"
            value={formulario.values.Numero}
            onChange={formulario.handleChange}
            onBlur={formulario.handleBlur}
            required
            type="text"
            id="Numero"
          />
        </SetForm>
      </SetGrup>
      <SetForm>
        <label htmlFor="Complemento"> Complemento (opcional) </label>
        <input type="text" id="Complemento" />
      </SetForm>
    </form>
  )
}

export default Delivery
