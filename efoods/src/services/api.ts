import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TipoApi } from '../Pages/Home'

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
    })
  })
})

export const { useGetRestautentQuery, useGetCardapioQuery } = api

export default api
