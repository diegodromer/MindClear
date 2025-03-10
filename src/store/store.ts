import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import timerReducer, { loadTimerFromStorage } from "./slices/timerSlice";
import userReducer, { loadUserAsync } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    timer: timerReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    });

    return middlewares;
  },
  devTools: process.env.NODE_ENV !== "production",
});

store.dispatch(loadUserAsync());
store.dispatch(loadTimerFromStorage());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
