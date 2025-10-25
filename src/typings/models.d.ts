interface Campaign {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'archived';
}

interface Task {
  id: number
  title: string
  description: string | null
  status: 'todo' | 'in_progress' | 'done'
  priority: 'low' | 'medium' | 'high'
  due_date: string | null
  campaign_id: number
  created_by_id: number | null
  assigned_to_id: number | null
}

