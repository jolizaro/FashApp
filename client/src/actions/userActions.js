import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
      dispatch({
          type: 'USER_LOGIN_REQUEST'
      })
      const config = {
          header: {
              'Content-Type': 'application/json'
          }
      }
      const { data } = await axios.post(
          '/users', 
          { email, password }, 
          config
      )
      dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data
      })

      localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
      dispatch({
          type: USER_LOGIN_FAIL,
          payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
  dispatch({ type: USER_DETAILS_RESET })
  dispatch({ type: ORDER_MY_LIST_RESET })
  dispatch({ type: USER_LIST_RESET })
}

export const register = (name, email, password) => async (dispatch) => {
  try {
      dispatch({
          type: USER_REGISTER_REQUEST
      })
      const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      }
      const { data } = await axios.post(
          'https://ryantkelseydesign.herokuapp.com/api/users', 
          { name, email, password }, 
          config
      )
      dispatch({
          type: USER_REGISTER_SUCCESS,
          payload: data
      })

      dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data
      })

      localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
      dispatch({
          type: USER_REGISTER_FAIL,
          payload: error.response && error.response.data.message
          ? error.response.data.message
          : error.message
        })
  }
}