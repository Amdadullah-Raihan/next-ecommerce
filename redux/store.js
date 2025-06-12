import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import authReducer from "./auth/authSlice";
import { authApi } from "./auth/authApiSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
