export default (axios) => {
  const getAllProducts = async () => {
    try {
      const response = await axios.get("/products")
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }

  const getProductById = async ({ id }) => {
    try {
      const response = await axios.get("/products/" + id)
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }

  const getProductsByStore = async (storeId) => {
    try {
      const response = await axios.get(`/stores/${storeId}/products`)
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }

  const createProduct = async (product) => {
    try {
      const response = await axios.post("/products", product)
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }

  const addProductToStore = async (storeId, product) => {
    try {
      const response = await axios.post(`/stores/${storeId}/products`, product)
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }

  const updateProduct = async ({ id }) => {
    try {
      const response = await axios.put("/products/" + id)
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }

  const removeProduct = async ({ id }) => {
    try {
      const response = await axios.delete("/products/" + id)
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }
  return {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    removeProduct,
    getProductsByStore,
    addProductToStore,
  }
}
