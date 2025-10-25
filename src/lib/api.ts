const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api/v1'

export const api = {
    campaigns: async (id?: Number) => {
        const url = id ? `${BASE_URL}/campaigns/${id}` : `${BASE_URL}/campaigns`
        const res = await fetch(url)
        if (!res.ok) throw new Error('Failed to fetch campaign(s)')
        return res.json()
    },


    // -------------- TASKS ( under campaign) ----------
    // GET /api/v1/campaigns/:campaign_id/tasks  => list
    // POST /api/v1/campaigns/:campaign_id/tasks => create
    campaignTasks: async (campaignId: Number, data?: Partial<Task>) => {
        const url = `${BASE_URL}/campaigns/${campaignId}/tasks`
        const opts: RequestInit = data
            ? {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            }
            : {}

        const res = await fetch(url, opts)
        if (!res.ok) throw new Error(data ? 'Failed to create task' : 'Failed to fetch tasks')
        return res.json()
    },

    // ---------- TASKS (directly on task) --------
    // GET /api/v1/tasks/:id => show
    // PATCH /api/v1/tasks/:id => update
    // DELETE /api/v1/tasks/:id => destroy
    task: async (id: Number, data?: Partial<Task>, method: 'GET' | 'PATCH' | 'DELETE' = 'GET') => {
        const url = `${BASE_URL}/tasks/${id}`
        const opts: RequestInit =
          method === 'GET'
            ? {}
            : {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: data ? JSON.stringify(data) : undefined,
              }
      
        const res = await fetch(url, opts)
        if (!res.ok)
          throw new Error(`Failed to ${method === 'GET' ? 'fetch' : method.toLowerCase()} task`)
      
        const text = await res.text()
        return text ? JSON.parse(text) : {}
      },

      users: async () => {
        const res = await fetch(`${BASE_URL}/users`)
        if (!res.ok) throw new Error('Failed to fetch users')
        return res.json()
      },

}
