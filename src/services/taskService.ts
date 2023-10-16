// import { Authentication } from './../types/authentication.type';
import ky from 'ky';
import { baseApiUrl } from '@/const/api'
import { useCookies } from '@vueuse/integrations/useCookies'
import AuthService from '@/services/authService'
import type { ErrorMessages } from '@/types/errors.type';
import type { TaskFilters, Tasks } from '@/types/task.type'

const tokenCookie = useCookies(['t']);

class TaskService {
  getTasks = async(filters: TaskFilters) => {
    try {
      const tasks: Tasks = await ky.get(baseApiUrl+'/tasks', {
        mode: 'cors',
        headers: { 'authorization': "bearer " + AuthService.getJwtToken() }
        }).json()
        return tasks
    } catch (error: any) {
      const errorJson: ErrorMessages = await error.response.json()
      throw errorJson
    }
  }
}

export default new TaskService()