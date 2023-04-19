import axios from "axios";

export const GET_LIST_KONTAK = 'GET_LIST_KONTAK';
export const ADD_KONTAK = 'ADD_KONTAK';
export const DELETE_KONTAK = 'DELETE_KONTAK';
export const SHOW_KONTAK = 'SHOW_KONTAK';
export const UPDATE_KONTAK = 'UPDATE_KONTAK';


export const getListKontak = () => {
    return (dispatch) => {
        //loading
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API

        axios({
          method: "GET",
          url: "http://127.0.0.1:8000/api/kontak"
        }).then((response) => {
          console.log(response);
         dispatch({
           type: GET_LIST_KONTAK,
           payload: {
             loading: false,
             data: response.data.data,
             errorMessage: false,
           },
         });
        }
        ).catch((error) => {
            dispatch({
              type: GET_LIST_KONTAK,
              payload: {
                loading: false,
                data: false,
                errorMessage: error.message,
              },
            });
        })
    }
}

export const addKontak = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: ADD_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API

    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/kontak",
      data: data
    })
      .then((response) => {
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteKontak = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: DELETE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API

    axios({
      method: "DELETE",
      url: "http://127.0.0.1:8000/api/kontak/" + data ,
      data: data,
    })
      .then((response) => {
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: response,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const showKontak = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: SHOW_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API

    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/kontak/" + data,
      data: data,
    })
      .then((response) => {
        // console.log("berhasil mendapatkan data :", response.data.data);
        dispatch({
          type: SHOW_KONTAK,
          payload: {
            loading: false,
            data: response.data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // console.log("gagal medapatkan data :", error.message);
        dispatch({
          type: SHOW_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const updateKontak = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: UPDATE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "PUT",
      url: "http://127.0.0.1:8000/api/kontak/" + data.id,
      data: data,
    })
      .then((response) => {
        console.log("berhasil mendapatkan data :", response);
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: response,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("gagal medapatkan data :", error.message);
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};