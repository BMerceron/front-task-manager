// import { Authentication } from './../types/authentication.type';
import ky from 'ky';
import { baseApiUrl, requestMode } from '@/const/api'
import { getJwtToken } from './jwtToken';
import type { ErrorMessages } from '@/types/errors.type';
import type { TaskFilters, Tasks, Task } from '@/types/task.type'

class TaskService {
  // TODO : add search with filters here
  // private headers = getJwtToken()
  getTasks = async(filters: TaskFilters) => {
    try {
      const tasks: Tasks = await ky.get(baseApiUrl+'/tasks', {
        mode: requestMode,
        headers: getJwtToken()
      }).json()
        return tasks
    } catch (error: any) {
      const errorJson: ErrorMessages = await error.response.json()
      throw errorJson
    }
  }

  addTask = async(taskForm: Task) => {
    try {
      const task = await ky.post(baseApiUrl+'/tasks', {
        mode: requestMode,
        json: taskForm,
        headers: getJwtToken()
      }).json()
        return task
    } catch (error: any) {
      const errorJson: ErrorMessages = await error.response.json()
      throw errorJson
    }
  }

  updateTask = async(taskForm: Task) => {
    const taskId = taskForm.id
    const taskFormToUpdate = {
      title: taskForm.title,
      description: taskForm.description,
      status: taskForm.status
    }
    try {
      const task = await ky.patch(baseApiUrl+'/tasks/'+taskId, {
        mode: requestMode,
        json: taskFormToUpdate,
        headers: getJwtToken()
      }).json()
        return task
    } catch (error: any) {
      const errorJson: ErrorMessages = await error.response.json()
      throw errorJson
    }
  }
}

export default new TaskService()