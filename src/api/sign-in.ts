import { api } from '@/lib/axios'

export interface RegisterClinicBody {
  email: string
}

export async function registerClinic({ email }: RegisterClinicBody) {
  await api.post('/authenticate', { email })
}
