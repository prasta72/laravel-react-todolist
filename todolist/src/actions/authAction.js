export const USER_REGISTRATION = "USER_REGISTRATION";
export const USER_REGISTRATION_FAIL = "USER_REGISTRATION_FAIL";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";

import axios from 'axios';
import React from 'react'
import { showErrorAlert, showErrorAlerts} from './alert';

import authHeader from './authHeader';
import { toast } from 'react-hot-toast';

export const userRegistrations = (data) => {
     return (dispatch) => {

       //get API
       axios({
         method: "POST",
         url: "http://127.0.0.1:8000/api/auth/registrasi",
         data: data
       })
         .then((response) => {
           localStorage.setItem("token", response.data.token);
           localStorage.setItem("user", JSON.stringify(response.data.user));
           dispatch({
             type: USER_REGISTRATION,
             payload: {
               loading: false,
               data: response.data.user,
               errorMessage: false,
             },
           });

         })
         .catch((error) => {
           dispatch({
             type: USER_REGISTRATION_FAIL,
             payload: {
               loading: false,
               data: false,
               errorMessage: error.message,
             },
           });
           showErrorAlerts(error.response.data.errors);
         });
     };
}

export const userLogin = (data) => {
  return (dispatch) => {

    //get API
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/auth/login",
      data: data,
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        dispatch({
          type: USER_LOGIN,
          payload: {
            loading: false,
            data: response.data.user,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log(error)
        const message = error.response.data.errors;
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
        showErrorAlerts(message)
        // // if(error.response.data.error != undefined)  toast.error(error.response.data.error);
        // console.log(error.response.data.error != undefined);
       
      });
  };
};


export const userLogout = (data) => {

  return (dispatch) => {

    //get API
    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/auth/logout",
      headers: authHeader(),
    }).then((response) => {
        localStorage.removeItem("user");
        localStorage.removeItem('token');
      dispatch({
        type: USER_LOGOUT,
        payload: {
          loading: false,
          data: response.data.user,
          errorMessage: false,
        },
      });
    });
  };
};
