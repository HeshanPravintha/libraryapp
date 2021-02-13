import { combineReducers } from 'redux';
import userReducer from './userReducer';
//import { loaderReducer } from './loaderReducer';

export default combineReducers({
    user: userReducer,
  //  loader:loaderReducer
})
