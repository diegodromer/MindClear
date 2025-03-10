import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const saveTokenAsync = (token: string) => async (dispatch: AppDispatch) => {
  try {
    await AsyncStorage.setItem("authToken", token);
    dispatch(login(token));
  } catch (error) {
    console.error("Erro ao salvar o token no AsyncStorage:", error);
  }
};

export const loadTokenAsync = () => async (dispatch: AppDispatch) => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    if (token) {
      dispatch(login(token));
    }
  } catch (error) {
    console.error("Erro ao carregar o token do AsyncStorage:", error);
  }
};

export const clearTokenAsync = () => async (dispatch: AppDispatch) => {
  try {
    await AsyncStorage.removeItem("authToken");
    dispatch(logout());
  } catch (error) {
    console.error("Erro ao remover o token do AsyncStorage:", error);
  }
};


export default authSlice.reducer;
