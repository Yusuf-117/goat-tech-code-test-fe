interface Campaign {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'archived';
}