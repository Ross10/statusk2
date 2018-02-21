import { EMAIL_CHANGED, PASSWORD_CHANGED, R_PASSWORD_CHANGED, NAME_CHANGED, REGISTER_FAILED, REGISTER_SUCCSESS, SAVE_DATA_TO_DB } from './types';
import * as firebase from 'firebase';
import { LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS,  EMAIL_CHANGED, PASSWORD_CHANGED, R_PASSWORD_CHANGED, NAME_CHANGED, REGISTER_FAILED, REGISTER_SUCCSESS, SAVE_DATA_TO_DB } from './types';
import * as firebase from 'firebase';
import createHistory from 'history/createBrowserHistory';

export const emailChanged = (text) => {
    return {
      type: EMAIL_CHANGED,
      payload: text
    };
  };

  export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
  };

  export const r_passwordChanged = (text) => {
    return {
        type: R_PASSWORD_CHANGED,
        payload: text
    };
  };


  export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    };
  };


  export const saveDatatoDB = (email, password, name) => {
    return (dispatch) => {
      dispatch({type: SAVE_DATA_TO_DB});

      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log("in sucsses");
  
        registerSuccess(dispatch,user,email,name);
      }) 
      .catch(() => {
        console.log("reg failed");
        dispatch(registerFailed);
      });


    };
  };


  const registerSuccess = (dispatch, user,email,name) => {
          
          
          firebase.database().ref(`Users/${user.uid}/User Details`).push({
            name,email
         }).then(() =>  dispatch({
          type:REGISTER_SUCCSESS,
          payload: user,
          name,
          email
        }));
   
  };


  const registerFailed = (dispatch) => {
    dispatch({
      type:REGISTER_FAILED
    });
  };



  export const loginUser = ( email, password ) => {
    return (dispatch) => {
      dispatch({ type: LOGIN_USER });
  
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((error) => {
          loginUserFail(dispatch);
  
        });
    };
  };

  const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
  };
  
  const loginUserSuccess = (dispatch, user) => {
    

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });

    // const path = '/';
    // history.push(path); 
  };
