import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { 
  userLoginReducer, 
  userRegisterReducer 
} from './reducers/userReducer';
import { 
  brandListReducer,
  brandCreateReducer,
  brandDeleteReducer,
  brandDetailsReducer 
} from './reducers/brandReducer';
import {
  reviewCreateReducer
} from './reducers/reviewReducer';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  brandList: brandListReducer,
  brandCreate: brandCreateReducer,
  brandDelete: brandDeleteReducer,
  brandDetails: brandDetailsReducer,
  reviewCreate: reviewCreateReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') 
  ? JSON.parse(localStorage.getItem('userInfo')) 
  : null;
const initialState = { userLogin: { userInfo: userInfoFromStorage } };
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;