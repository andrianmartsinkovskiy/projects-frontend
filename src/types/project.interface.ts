export interface IProject {
  id: number
  name: string
  create_at: string
  tasks?: Record<string, any>
  owner?: Record<string, any>
  users: Record<string, any>
}