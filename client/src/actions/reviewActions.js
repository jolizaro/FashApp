import axios from 'axios';

export const createReview = (reviewData, brandId) => async (dispatch, getState) => {
  try {
      dispatch({
          type: 'REVIEW_CREATE_REQUEST'
      })

      const { userLogin: { userInfo } } = getState()

      const config = {
          headers: {
              Authorization: `Bearer ${userInfo.token}`
          }
      }
      const { data } = await axios.post(`http:localhost:3001/reviews/${userInfo._id}/${brandId}`, reviewData, config)

      dispatch({ 
        type: 'REVIEW_CREATE_SUCCESS',
      })

  } catch (error) {
      dispatch({
          type: 'REVIEW_CREATE_FAIL',
          payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        })
  }
}