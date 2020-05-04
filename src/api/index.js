import axios from "axios"
import stores from "./stores"
import categories from "./categories"
import products from "./products"

let token = localStorage.getItem("token") || null
axios.defaults.headers.Authorization = "bearer " + token
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

axios.interceptors.request.use(
  async (config) => {
    if (localStorage.getItem("expires") < Date.now()) {
      localStorage.removeItem("token")
      localStorage.removeItem("expires")
      config.headers.Authorization = null
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

const auth = (email, password) => {
  if (email && password) {
    axios
      .post("/auth", { email, password })
      .then((res) => {
        localStorage.removeItem("expires")
        localStorage.removeItem("token")
        if (res.data.token) {
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("expires", res.data.expires)
        }
        return true
      })
      .catch((error) => {
        if (error) {
          console.log(error.response)
        }
      })
  }
}

export default () => {
  return {
    auth,
    axios,
    stores: stores(axios),
    categories: categories(axios),
    products: products(axios),
  }
}
