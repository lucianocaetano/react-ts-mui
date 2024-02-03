import  { axiosInstance } from "./base.api.ts"

const axios = axiosInstance
const endpoint = "/character"

export const character = {
  getAll: ({page}:{page:number}) => {
    return axios.get(endpoint, {params: {
      page
    }}) 
  },
  getById: ({id}: {id: string | undefined}) => {
    return axios.get(`${endpoint}/${id}`)
  }
}
