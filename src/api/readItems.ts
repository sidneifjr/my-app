import { api } from '@/services/api'
import { User } from '@/types/user'

export async function readItems(url: string) {
  const content: Promise<User[]> = await api(url, { cache: 'no-store' })

  return content
}
