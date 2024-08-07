/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TipoApi } from '../Pages/Home'

type product = {
  id: number
  price: number
}

type checkout = {
  products: product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    GetRestautent: builder.query<TipoApi[], void>({
      query: () => 'restaurantes'
    }),
    GetCardapio: builder.query<TipoApi, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchese: builder.mutation<any, checkout>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestautentQuery,
  useGetCardapioQuery,
  usePurcheseMutation
} = api

export default api
