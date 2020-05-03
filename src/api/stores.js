export default (axios) => {
  const getAllStores = async () => {
    try {
      const response = await axios.get("/stores")
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }

  const getStoreById = async ({ id }) => {
    try {
      const response = await axios.get("/stores/" + id)
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }

  const createStore = async (store) => {
    try {
      const response = await axios.post("/stores", store)
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }

  const updateStore = async ({ id }) => {
    try {
      const response = await axios.put("/stores/" + id)
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }

  const removeStore = async ({ id }) => {
    try {
      const response = await axios.delete("/stores/" + id)
      return response.data
    } catch (error) {
      console.log(error.response)
      return null
    }
  }
  return { getAllStores, getStoreById, createStore, updateStore, removeStore }
}
