interface Campaign {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'archived';
}

interface Task {
  id: number
  title: string
  status: 'todo' | 'in_progress' | 'done'
  priority: 'low' | 'medium' | 'high'
  [key: string]: any
}
