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
import { usePurcheseMutation } from '../../services/api'

const Cart = () => {
  const { Carrinho } = useSelector((state: RootReducer) => state.Carrinho)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return Carrinho.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }
  const [Payment, setPayment] = useState(enums.SetPayment.Order)
  const [purchese] = usePurcheseMutation()

  const formulario = useFormik({
    initialValues: {
      receive: '',
      DeliveryAddress: '',
      City: '',
      CEP: '',
      Number: '',
      AddressComplement: '',
      NameCard: '',
      NumberCard: '',
      CVV: '',
      Expiration: '',
      ExpirationYear: ''
    },
    validationSchema: Yup.object({
      receive: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo obrigatorio'),
      DeliveryAddress: Yup.string()
        .min(5, 'O DeliveryAddress precisa ter pelo menos 10 caracteres')
        .required('O campo obrigatorio'),
      City: Yup.string()
        .min(5, 'A City precisa ter pelo menos 5 caracteres')
        .required('O campo obrigatorio'),
      CEP: Yup.string()
        .min(9, 'O cep precisa ter pelo menos 8 caracteres')
        .max(9, 'O cep precisa ter pelo menos 8 caracteres')
        .required('O campo obrigatorio'),
      Number: Yup.string()
        .min(2, 'O Number precisa ter pelo menos 2 caracteres')
        .required('O campo obrigatorio'),
      AddressComplement: Yup.string()
        .min(3, 'O Complento precisa ter pelo menos 3 caracteres')
        .required('O campo obrigatorio'),

      NameCard: Yup.string().when((values, schema) =>
        Payment === enums.SetPayment.Paymnet
          ? schema.required('O campo e obrigatorio')
          : schema
      ),
      NumberCard: Yup.string().when((values, schema) =>
        Payment === enums.SetPayment.Paymnet
          ? schema.required('O campo e obrigatorio')
          : schema
      ),
      CVV: Yup.string().when((values, schema) =>
        Payment === enums.SetPayment.Paymnet
          ? schema.required('O campo e obrigatorio')
          : schema
      ),
      Expiration: Yup.string().when((values, schema) =>
        Payment === enums.SetPayment.Paymnet
          ? schema.required('O campo e obrigatorio')
          : schema
      ),
      ExpirationYear: Yup.string().when((values, schema) =>
        Payment === enums.SetPayment.Paymnet
          ? schema.required('O campo e obrigatorio')
          : schema
      )
    }),
    onSubmit: (values) => {
      purchese({
        products: [
          {
            id: 1,
            price: 0
          }
        ],
        delivery: {
          receiver: values.receive,
          address: {
            description: values.DeliveryAddress,
            city: values.City,
            zipCode: values.CEP,
            number: Number(values.Number),
            complement: values.AddressComplement
          }
        },
        payment: {
          card: {
            name: values.NameCard,
            number: values.NumberCard,
            code: Number(values.CVV),
            expires: {
              month: Number(values.Expiration),
              year: Number(values.ExpirationYear)
            }
          }
        }
      })
    }
  })

  const checkouthaserror = (name: string) => {
    const isToched = name in formulario.touched
    const isInvalid = name in formulario.errors
    const hasHerror = isToched && isInvalid

    return hasHerror
  }

  const checkDeliveryForm = () => {
    const checkreceive = 'receive' in formulario.errors
    const checkDeliveryAddress = checkouthaserror('DeliveryAddress')
    const checkCity = checkouthaserror('City')
    const checkCEP = checkouthaserror('CEP')
    const checkNumber = checkouthaserror('Number')

    const DeliveryForm =
      checkreceive ||
      checkDeliveryAddress ||
      checkCity ||
      checkCEP ||
      checkNumber

    if (DeliveryForm === true) {
      return alert('Por favor verifique os caompos')
    }
    return setPayment(enums.SetPayment.Paymnet)
  }

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
            <SetForm valid={checkouthaserror('receive')}>
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
            <SetForm valid={checkouthaserror('DeliveryAddress')}>
              <label htmlFor="DeliveryAddress"> endereco </label>
              <input
                name="DeliveryAddress"
                value={formulario.values.DeliveryAddress}
                onChange={formulario.handleChange}
                onBlur={formulario.handleBlur}
                required
                type="text"
                id="DeliveryAddress"
              />
            </SetForm>
            <SetForm valid={checkouthaserror('City')}>
              <label htmlFor="City"> Cidade </label>
              <input
                name="City"
                value={formulario.values.City}
                onChange={formulario.handleChange}
                onBlur={formulario.handleBlur}
                required
                type="text"
                id="City"
              />
            </SetForm>
            <S.SetGrup col1={'45%'} col2={'45%'}>
              <SetForm valid={checkouthaserror('CEP')}>
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
              <SetForm valid={checkouthaserror('Number')}>
                <label htmlFor="Number"> Numero </label>
                <input
                  name="Number"
                  value={formulario.values.Number}
                  onChange={formulario.handleChange}
                  onBlur={formulario.handleBlur}
                  required
                  type="text"
                  id="Number"
                />
              </SetForm>
            </S.SetGrup>
            <SetForm valid={checkouthaserror('AddressComplement')}>
              <label htmlFor="AddressComplement">Complemento (opcional)</label>
              <input
                type="text"
                value={formulario.values.AddressComplement}
                onChange={formulario.handleChange}
                onBlur={formulario.handleBlur}
                id="AddressComplement"
              />
            </SetForm>
            <div>
              <BotaoAdicionar type="button" onClick={() => checkDeliveryForm()}>
                Continuar com o pagamento
              </BotaoAdicionar>
              <BotaoAdicionar
                onClick={() => setPayment(enums.SetPayment.Order)}
                type="button"
                style={{ marginTop: 8 }}
              >
                Voltar para o carrinho
              </BotaoAdicionar>
            </div>
          </form>
        </S.SetrContent>

        <S.SetrContent show={Payment === enums.SetPayment.Paymnet}>
          <form>
            <SetForm valid={checkouthaserror('NameCard')}>
              <label htmlFor="NameCard"> Nome no cartao </label>
              <input
                name="NameCard"
                value={formulario.values.NameCard}
                onChange={formulario.handleChange}
                onBlur={formulario.handleBlur}
                required
                type="text"
                id="NameCard"
              />
            </SetForm>
            <S.SetGrup col1={'65%'} col2={'30%'}>
              <SetForm valid={checkouthaserror('NumberCard')}>
                <label htmlFor="NumberCard"> Numero do cartao </label>
                <input
                  name="NumberCard"
                  value={formulario.values.NumberCard}
                  onChange={formulario.handleChange}
                  onBlur={formulario.handleBlur}
                  required
                  type="text"
                  id="NumberCard"
                />
              </SetForm>
              <SetForm valid={checkouthaserror('CVV')}>
                <label htmlFor="CVV"> CVV </label>
                <input
                  name="CVV"
                  value={formulario.values.CVV}
                  onChange={formulario.handleChange}
                  onBlur={formulario.handleBlur}
                  required
                  type="text"
                  id="CVV"
                />
              </SetForm>
            </S.SetGrup>
            <S.SetGrup col1={'45%'} col2={'45%'}>
              <SetForm valid={checkouthaserror('Expiration')}>
                <label htmlFor="Expiration"> Mes de vencimento </label>
                <input
                  name="Expiration"
                  value={formulario.values.Expiration}
                  onChange={formulario.handleChange}
                  onBlur={formulario.handleBlur}
                  required
                  type="text"
                  id="Expiration"
                />
              </SetForm>
              <SetForm valid={checkouthaserror('ExpirationYear')}>
                <label htmlFor="ExpirationYear"> Ano de vencimento </label>
                <input
                  name="ExpirationYear"
                  value={formulario.values.ExpirationYear}
                  onChange={formulario.handleChange}
                  onBlur={formulario.handleBlur}
                  required
                  type="text"
                  id="ExpirationYear"
                />
              </SetForm>
            </S.SetGrup>
            <div>
              <BotaoAdicionar
                onClick={() => setPayment(enums.SetPayment.Delivery)}
              >
                Continuar com o pagamento
              </BotaoAdicionar>
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
