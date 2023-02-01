import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import globalReducer from "./reducers/globalReducer";
import toggleReducer from "./reducers/toggleReducer";
import authService from "./services/authService";

const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    globalReducer: globalReducer,
    authReducer: authReducer,
    toggleReducer: toggleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authService.middleware]),
},+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
