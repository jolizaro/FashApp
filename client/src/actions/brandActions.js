import axios from 'axios';

export const listBrands = () => async (dispatch) => {
  try {
    dispatch({ type: 'BRAND_LIST_REQUEST' })

    const { data } = await axios.get(`/brands`);

    dispatch({
      type: 'BRAND_LIST_SUCCESS',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'BRAND_LIST_FAIL',
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    })
  }
}

export const listBrandDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'BRAND_DETAILS_REQUEST' })

    const { userLogin: { userInfo } } = getState()

      const config = {
          headers: {
              Authorization: `Bearer ${userInfo.token}`
          }
      }

    const { data } = await axios.get(`/brands/${id}`, config);

    dispatch({
      type: 'BRAND_DETAILS_SUCCESS',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'BRAND_DETAILS_FAIL',
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    })
  }
}

export const deleteBrand = (id) => async (dispatch, getState) => {
  try {
      dispatch({
          type: 'BRAND_DELETE_REQUEST'
      })

      const { userLogin: { userInfo } } = getState()

      const config = {
          headers: {
              Authorization: `Bearer ${userInfo.token}`
          }
      }
      await axios.delete(`/brands/${id}`, config)

      dispatch({ type: 'BRAND_DELETE_SUCCESS' })

  } catch (error) {
      dispatch({
          type: 'BRAND_DELETE_FAIL',
          payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        })
  }
}

export const createBrand = (brandData) => async (dispatch, getState) => {
  try {
      dispatch({
          type: 'BRAND_CREATE_REQUEST'
      })

      const { userLogin: { userInfo } } = getState()

      const config = {
          headers: {
              Authorization: `Bearer ${userInfo.token}`
          }
      }
      const { data } = await axios.post(`/brands`, brandData, config)

      dispatch({ 
        type: 'BRAND_CREATE_SUCCESS',
        payload: data  
      })

  } catch (error) {
      dispatch({
          type: 'BRAND_CREATE_FAIL',
          payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        })
  }
}

export const updateBrand = (id, brandData) => async (dispatch, getState) => {
  try {
      dispatch({
          type: 'BRAND_UPDATE_REQUEST'
      })

      const { userLogin: { userInfo } } = getState()

      const config = {
          headers: {
              Authorization: `Bearer ${userInfo.token}`
          }
      }
      await axios.put(`/brands/${id}`, brandData, config)

      dispatch({ type: 'BRAND_UPDATE_SUCCESS' })

  } catch (error) {
      dispatch({
          type: 'BRAND_UPDATE_FAIL',
          payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        })
  }
}