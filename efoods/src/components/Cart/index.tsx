import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import ImputMask from 'react-input-mask'

import * as enums from '../../utis/enums/index'
import { RootReducer } from '../../store'
import { remove, close, clean } from '../../store/reducers/CartSlice'
import { formataPreco } from '../Modal'
import { usePurcheseMutation } from '../../services/api'

import * as S from './styles'
import { BotaoAdicionar, Overlay, SetForm } from '../../Styles'
import Lixeira from '../../assets/lixeira.jpg'

const Cart = () => {
  const { Cart } = useSelector((state: RootReducer) => state.Cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return Cart.reduce((accumulator, currentvalue) => {
      return (accumulator += currentvalue.price)
    }, 0)
  }
  const [Payment, setPayment] = useState(enums.SetPayment.Order)
  const [purchese, { data, isSuccess }] = usePurcheseMutation()

  const form = useFormik({
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
        .min(5, 'O DeliveryAddress precisa ter pelo menos 5 caracteres')
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
        products: Cart.map((item) => ({
          id: item.id,
          price: Number(formataPreco(item.price))
        })),
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
    const isToched = name in form.touched
    const isInvalid = name in form.errors
    const hasHerror = isToched && isInvalid

    return hasHerror
  }

  const checkDeliveryForm = () => {
    const checkreceive = 'receive' in form.errors
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

    if (form.values.receive.length <= 0 || DeliveryForm === true) {
      return alert('Por favor verifique os caompos')
    }
    return setPayment(enums.SetPayment.Paymnet)
  }

  useEffect(() => {
    if (isSuccess && data) {
      setPayment(enums.SetPayment.information)
      dispatch(clean())
    }
  }, [isSuccess, data, dispatch])

  return (
    <S.CartContainer>
      <Overlay onClick={() => dispatch(close())} />
      <S.CartContent>
        <S.SetrContent show={Payment === enums.SetPayment.Order}>
          {Cart.length > 0 ? (
            <>
              <S.cardList>
                {Cart.map((Item) => (
                  <S.card key={Item.id}>
                    <img src={Item.photo} alt="" />
                    <div>
                      <h3> {Item.name} </h3>
                      <p> {formataPreco(Item.price)} </p>
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
              <BotaoAdicionar
                onClick={() => setPayment(enums.SetPayment.Delivery)}
              >
                Continuar com a entrega
              </BotaoAdicionar>
            </>
          ) : (
            <div>
              <S.FormTitle>Seu carrinho está vazio!</S.FormTitle>
              <br />
              <p>Parece que você ainda não escolheu seus pratos favoritos</p>
            </div>
          )}
        </S.SetrContent>

        <S.SetrContent show={Payment === enums.SetPayment.Delivery}>
          <form onSubmit={form.handleSubmit}>
            <S.FormTitle> Entrega </S.FormTitle>
            <SetForm valid={checkouthaserror('receive')}>
              <label htmlFor="receive"> Quem ira receber </label>
              <input
                name="receive"
                value={form.values.receive}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                required
                type="text"
                id="receive"
              />
            </SetForm>
            <SetForm valid={checkouthaserror('DeliveryAddress')}>
              <label htmlFor="DeliveryAddress"> endereco </label>
              <input
                name="DeliveryAddress"
                value={form.values.DeliveryAddress}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                required
                type="text"
                id="DeliveryAddress"
              />
            </SetForm>
            <SetForm valid={checkouthaserror('City')}>
              <label htmlFor="City"> Cidade </label>
              <input
                name="City"
                value={form.values.City}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                required
                type="text"
                id="City"
              />
            </SetForm>
            <S.SetGrup col1={'45%'} col2={'45%'}>
              <SetForm valid={checkouthaserror('CEP')}>
                <label htmlFor="CEP"> CEP </label>
                <ImputMask
                  name="CEP"
                  value={form.values.CEP}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  required
                  type="text"
                  id="CEP"
                  mask="99999-999"
                />
              </SetForm>
              <SetForm valid={checkouthaserror('Number')}>
                <label htmlFor="Number"> Numero </label>
                <input
                  name="Number"
                  value={form.values.Number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
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
                value={form.values.AddressComplement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
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
          <form onSubmit={form.handleSubmit}>
            <S.FormTitle>
              Pagamento - Valor a pagar {formataPreco(getTotalPrice())}{' '}
            </S.FormTitle>
            <SetForm valid={checkouthaserror('NameCard')}>
              <label htmlFor="NameCard"> Nome no cartao </label>
              <input
                name="NameCard"
                value={form.values.NameCard}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                required
                type="text"
                id="NameCard"
              />
            </SetForm>
            <S.SetGrup col1={'65%'} col2={'30%'}>
              <SetForm valid={checkouthaserror('NumberCard')}>
                <label htmlFor="NumberCard"> Numero do cartao </label>
                <ImputMask
                  name="NumberCard"
                  value={form.values.NumberCard}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  required
                  type="text"
                  id="NumberCard"
                  mask="9999 9999 9999 9999"
                />
              </SetForm>
              <SetForm valid={checkouthaserror('CVV')}>
                <label htmlFor="CVV"> CVV </label>
                <ImputMask
                  name="CVV"
                  value={form.values.CVV}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  required
                  type="text"
                  id="CVV"
                  mask="999"
                />
              </SetForm>
            </S.SetGrup>
            <S.SetGrup col1={'45%'} col2={'45%'}>
              <SetForm valid={checkouthaserror('Expiration')}>
                <label htmlFor="Expiration"> Mes de vencimento </label>
                <ImputMask
                  name="Expiration"
                  value={form.values.Expiration}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  required
                  type="text"
                  id="Expiration"
                  mask="99"
                />
              </SetForm>
              <SetForm valid={checkouthaserror('ExpirationYear')}>
                <label htmlFor="ExpirationYear"> Ano de vencimento </label>
                <ImputMask
                  name="ExpirationYear"
                  value={form.values.ExpirationYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  required
                  type="text"
                  id="ExpirationYear"
                  mask="9999"
                />
              </SetForm>
            </S.SetGrup>
            <div>
              <BotaoAdicionar type="submit" onClick={() => form.handleSubmit}>
                Continuar com o pagamento
              </BotaoAdicionar>
              <BotaoAdicionar type="button" style={{ marginTop: 8 }}>
                Voltar para a edicao de endereco
              </BotaoAdicionar>
            </div>
          </form>
        </S.SetrContent>

        {data && (
          <S.SetrContent show={Payment === enums.SetPayment.information}>
            <S.FormTitle> Pedido realizado - {data.orderId} </S.FormTitle>
            <S.DescriptionRequest>
              Estamos felizes em informar que seu pedido ja esta em processo de
              preparacao e, em breve, sera entregue no endereco fornecido.
            </S.DescriptionRequest>
            <S.DescriptionRequest>
              Gostariamos de ressaltar que nossos entregadores nao estao
              autorizados a realizar cobrancas extras.
            </S.DescriptionRequest>
            <S.DescriptionRequest>
              Lembre-se da importancia de higienizar as maos apos o recebimento
              do pedido, garantindo assim sua seguraca e bem-estar durante a
              refeicao.
            </S.DescriptionRequest>
            <S.DescriptionRequest>
              Esperamos que desfrute de uma deliciosa e agradavel experiencia
              gastronomica. Bom apetite!
            </S.DescriptionRequest>
          </S.SetrContent>
        )}
      </S.CartContent>
    </S.CartContainer>
  )
}

export default Cart
