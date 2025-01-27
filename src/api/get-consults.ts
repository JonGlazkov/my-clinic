import { api } from '@/lib/axios'

export interface GetConsultsResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export interface GetConsultQuery {
  pageIndex?: number | null
}

export async function getConsults({ pageIndex }: GetConsultQuery) {
  const response = await api.get<GetConsultsResponse>('/orders', {
    params: {
      pageIndex,
    },
  })

  return response.data
}
