export const reviewCreateReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case 'REVIEW_CREATE_REQUEST':
      return { loading: true }
    case 'REVIEW_CREATE_SUCCESS':
      return { 
        loading: false, 
        success: true, 
      }
    case 'REVIEW_CREATE_FAIL':
      return { loading: false, error: action.payload }
    default:
      return state
  }
}