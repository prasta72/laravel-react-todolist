import { GET_LIST_KONTAK, ADD_KONTAK, DELETE_KONTAK, SHOW_KONTAK, UPDATE_KONTAK } from "../../actions/kontakAction";

const initialState = {
  getListKontakResult: false,
  getListKontakLoading: false,
  getListKontakError: false,

  addKontakResult: false,
  addKontakLoading: false,
  addKontakError: false,

  deleteKontakResult: false,
  deleteKontakLoading: false,
  deleteKontakError: false,

  showKontakResult: false,
  showKontakLoading: false,
  showKontakError: false,

  updateKontakResult: false,
  updateKontakLoading: false,
  updateKontakError: false,
};

const kontak = (state= initialState, action) => {
    switch (action.type) {
      case GET_LIST_KONTAK:
        return {
          ...state,
          getListKontakLoading: action.payload.loading,
          getListKontakResult: action.payload.data,
          getListKontakError: action.payload.errorMessage,
        };
      case ADD_KONTAK:
        return {
          ...state,
          addKontakLoading: action.payload.loading,
          addKontakResult: action.payload.data,
          addKontakError: action.payload.errorMessage,
        };
      case DELETE_KONTAK:
        return {
          ...state,
          deleteKontakLoading: action.payload.loading,
          deleteKontakResult: action.payload.data,
          deleteKontakError: action.payload.errorMessage,
        };
      case SHOW_KONTAK:
        return {
          ...state,
          showKontakLoading: action.payload.loading,
          showKontakResult: action.payload.data,
          showKontakError: action.payload.errorMessage,
        };
      case UPDATE_KONTAK:
        return {
          ...state,
          updateKontakLoading: action.payload.loading,
          updateKontakResult: action.payload.data,
          updateKontakError: action.payload.errorMessage,
        };
      default:
        return state;
    }
}

export default kontak;