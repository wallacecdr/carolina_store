import axios from "axios"

const REACT_APP_BASE_API = process.env.REACT_APP_BASE_API

const api = axios.create({
  //baseURL: "http://localhost:3333"
  baseURL: REACT_APP_BASE_API
})

export default api