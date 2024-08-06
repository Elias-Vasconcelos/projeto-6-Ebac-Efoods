import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import * as S from './styles'
import { BotaoAdicionar, Overlay, SetForm } from '../../Styles'
import Lixeira from '../../assets/lixeira.jpg'
import * as enums from '../../utis/enums/index'

import { RootReducer } from '../../store'
import { remove, close } from '../../store/reducers/CartSlice'
import { formataPreco } from '../Modal'

const Cart = () => {
  const { Carrinho } = useSelector((state: RootReducer) => state.Carrinho)
  const dispatch = useDispatch()



  const getTotalPrice = () => {
    return Carrinho.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }
  const [Payment, setPayment] = useState(enums.SetPayment.Order)

  const formulario = useFormik({
    initialValues: {
      receive: '',
      Endereco: '',
      Cidade: '',
      CEP: '',
      Numero: '',
      NameCard: '',
      NumberCard: '',
      CVV: '',
      Expiration: '',
      ExpirationYear: '',
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
        .required('O campo obrigatorio'),


        NameCard: Yup.string().when((values, schema) =>
            Payment === enums.SetPayment.Paymnet ? schema.required('O campo e obrigatorio') : schema
          ),
        NumberCard: Yup.string().when((values, schema) =>
              Payment === enums.SetPayment.Paymnet ? schema.required('O campo e obrigatorio') : schema
          ),
        CVV: Yup.string().when((values, schema) =>
              Payment === enums.SetPayment.Paymnet ? schema.required('O campo e obrigatorio') : schema
          ),
        Expiration: Yup.string().when((values, schema) =>
              Payment === enums.SetPayment.Paymnet ? schema.required('O campo e obrigatorio') : schema
          ),
        ExpirationYear: Yup.string().when((values, schema) =>
              Payment === enums.SetPayment.Paymnet ? schema.required('O campo e obrigatorio') : schema
          )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })




  return (
    <S.CartContainer>
      <Overlay onClick={() => dispatch(close())} />
      <S.CartContent>
        <S.SetrContent show={Payment === enums.SetPayment.Order}>
          <S.cardList>
            {Carrinho.map((Item) => (
              <S.card key={Item.id}>
                <img src={Item.foto} alt="" />
                <div>
                  <h3> {Item.nome} </h3>
                  <p> {formataPreco(Item.preco)} </p>
                </div>
                <span>
                  <img
                    src={Lixeira}
                    alt="Lixeira"
                    onClick={() => dispatch(remove(Item))}
                  />
                </span>
              </S.card>
            ))}
          </S.cardList>
          <S.Total>
            <p>Valor total</p>
            <p> {formataPreco(getTotalPrice())} </p>
          </S.Total>
          <BotaoAdicionar onClick={() => setPayment(enums.SetPayment.Delivery)}>
            Continuar com a entrega
          </BotaoAdicionar>
        </S.SetrContent>

        <S.SetrContent show={Payment === enums.SetPayment.Delivery}>
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
          <S.SetGrup>
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
          </S.SetGrup>
          <SetForm>
            <label htmlFor="Complemento"> Complemento (opcional) </label>
            <input type="text" id="Complemento" />
          </SetForm>
    </form>
          <div>
            <BotaoAdicionar> Continuar com o pagamento </BotaoAdicionar>
            <BotaoAdicionar style={{ marginTop: 8 }}>
              Voltar para o carrinho
            </BotaoAdicionar>
          </div>
        </S.SetrContent>

        <S.SetrContent show={Payment === enums.SetPayment.Paymnet} >
         <form>
            <SetForm>
              <label htmlFor="NameCard"> Nome no cartao </label>
              <input  name="NameCard" value={formulario.values.NameCard} onChange={formulario.handleChange} onBlur={formulario.handleBlur} required type="text" id="NameCard" />
            </SetForm>
            <S.SetGrup>
              <SetForm>
                <label htmlFor="NumberCard"> Numero do cartao </label>
                <input  name="NumberCard" value={formulario.values.NumberCard} onChange={formulario.handleChange} onBlur={formulario.handleBlur} required type="text" id="NumberCard" />
              </SetForm>
              <SetForm>
                <label htmlFor="CVV"> CVV </label>
                <input  name="CVV" value={formulario.values.CVV} onChange={formulario.handleChange} onBlur={formulario.handleBlur} required type="text" id="CVV" />
              </SetForm>
            </S.SetGrup>
            <S.SetGrup>
              <SetForm>
                <label htmlFor="Expiration"> Mes de vencimento </label>
                <input  name="Expiration" value={formulario.values.Expiration} onChange={formulario.handleChange} onBlur={formulario.handleBlur} required type="text" id="Expiration" />
              </SetForm>
              <SetForm>
                <label htmlFor="ExpirationYear"> Ano de vencimento </label>
                <input  name="ExpirationYear" value={formulario.values.ExpirationYear} onChange={formulario.handleChange} onBlur={formulario.handleBlur} required type="text" id="ExpirationYear" />
              </SetForm>
            </S.SetGrup>
            <div style={{ margin: 24 }}>
              <BotaoAdicionar> Continuar com o pagamento </BotaoAdicionar>
              <BotaoAdicionar style={{ marginTop: 8 }}>
                Voltar para a edicao de endereco
              </BotaoAdicionar>
            </div>
         </form>
        </S.SetrContent>

      </S.CartContent>
    </S.CartContainer>
  )
}

export default Cart
