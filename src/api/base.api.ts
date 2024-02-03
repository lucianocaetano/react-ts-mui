import axios from "axios"

const baseURL: string = "https://rickandmortyapi.com/api"

export const axiosInstance = axios.create({
  baseURL 
})


