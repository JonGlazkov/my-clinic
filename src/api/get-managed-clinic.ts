import { api } from '@/lib/axios'

interface GetManagedRestaurantResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  const { data } = await api.get<GetManagedRestaurantResponse>(
    '/managed-restaurant', // change when the API is updated
  )

  return data
}
