interface Campaign {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'archived';
}

interface Task {
  id: number
  title: string
  status: string
  priority: string
  [key: string]: any
}
