export default (axios) => {
  const getAllCategories = async () => {
    try {
      const response = await axios.get("/categories")
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }

  const getCategoryById = async ({ id }) => {
    try {
      const response = await axios.get("/categories/" + id)
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }

  const getCategoriesByStore = async (storeId) => {
    try {
      const response = await axios.get(`/stores/${storeId}/categories`)
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }

  const createCategory = async (category) => {
    try {
      const response = await axios.post("/categories", category)
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }

  const addCategoryToStore = async (storeId, category) => {
    try {
      const response = await axios.post(
        `/stores/${storeId}/categories`,
        category
      )
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }

  const updateCategory = async ({ id }) => {
    try {
      const response = await axios.put("/categories/" + id)
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }

  const removeCategory = async ({ id }) => {
    try {
      const response = await axios.delete("/categories/" + id)
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }
  return {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    removeCategory,
    getCategoriesByStore,
    addCategoryToStore,
  }
}
