export type TaskFilters = {
  search: string
  status: string
}

export type Task = {
  id: string
  title: string
  description: string
  status: string
}

export type Tasks = [Task]