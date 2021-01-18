import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { productCreateReducer, productDeleteReducer, productDetailsReducer, productListReducer, productReviewCreateReducer, productUpdateReducer } from './reducers/ProductReducer';
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer } from './reducers/UserReducer';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReviewCreate: productReviewCreateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
});

const middleware = [thunk];

const getUserInfo = async () => {
  try {
    const userInfoFromStorage = await AsyncStorage.getItem('userInfo');

    return userInfoFromStorage !== null ? JSON.parse(userInfoFromStorage) : null;
    
  } catch(error) {
    console.log(error);
  }
}

const initialState = { userLogin: { userInfo: getUserInfo() } }

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;