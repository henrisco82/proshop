import { combineReducers } from 'redux';
import { productListReducer, productDetailsReducer } from './product/reducer';
import { cartReducer } from './cart/reducer';
import { userLoginReducer, userRegisterReducer } from './user/reducer';

const reducers = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
})

export default reducers