const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api/v1'

export const api = {
    campaigns: async (id?: string) => {
        const url = id ? `${BASE_URL}/campaigns/${id}` : `${BASE_URL}/campaigns`
        const res = await fetch(url)
        if (!res.ok) throw new Error('Failed to fetch campaign(s)')
        return res.json()
    },

}
