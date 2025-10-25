import { api } from './api'

let cachedUsers: User[] = []

export async function getUsers(): Promise<User[]> {
  if (cachedUsers.length) return cachedUsers
  const res = await api.users()
  cachedUsers = res.users
  return cachedUsers
}
