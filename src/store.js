// store.js
// import { configureStore, combineReducers } from "redux";

// // Actions
// export const LOGIN = "LOGIN";
// export const LOGOUT = "LOGOUT";
// export const SET_QR_DATA = "SET_QR_DATA";

// export const login = (username) => ({ type: LOGIN, payload: username });
// export const logout = () => ({ type: LOGOUT });
// export const setQRData = (data) => ({ type: SET_QR_DATA, payload: data });

// // Reducers
// const authReducer = (state = { isLoggedIn: false, username: null }, action) => {
//   switch (action.type) {
//     case LOGIN:
//       return { ...state, isLoggedIn: true, username: action.payload };
//     case LOGOUT:
//       return { ...state, isLoggedIn: false, username: null };
//     default:
//       return state;
//   }
// };

// const qrReducer = (state = { qrData: null }, action) => {
//   switch (action.type) {
//     case SET_QR_DATA:
//       return { ...state, qrData: action.payload };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   auth: authReducer,
//   qr: qrReducer,
// });

// export const store = configureStore(rootReducer);

// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Auth slice
const authSlice = createSlice({
  name: "auth",
  // initialState: savedAuthState,
  initialState: { isLoggedIn: false, username: null },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload;
      localStorage.setItem("auth", JSON.stringify(state));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = null;
      localStorage.removeItem("auth");
    },
  },
});

// QR slice
const qrSlice = createSlice({
  name: "qr",
  initialState: { qrData: null },
  reducers: {
    setQRData: (state, action) => {
      state.qrData = action.payload;
    },
  },
});

// Export actions
export const { login, logout } = authSlice.actions;
export const { setQRData } = qrSlice.actions;

// Create store
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    qr: qrSlice.reducer,
  },
});
