
import {USER_DATA} from '../actions/config';
import { AsyncStorage } from 'react-native'



export const getUserData = (callback) => (dispatch) => {

    AsyncStorage.getItem('user').then(userData => {
     // console.log(userData, 'Authdata from async');
  
      dispatch({
        type: USER_DATA,
        payload: userData,
      });
      callback(true)
  
    })
  
  
  }
  