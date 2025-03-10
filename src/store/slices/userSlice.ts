import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "../../services/api";
import { BASE_URL } from "../../utils/constants";
import { loadTimerFromStorage } from "../slices/timerSlice";

interface Timer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  lastUpdated: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  company: string;
  emailVerified: boolean;
  active: boolean;
  timer: Timer | null;
}

interface UserState {
  user: User | null;
  accessToken: string | null;
  isLoggedOut: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  accessToken: null,
  isLoggedOut: false,
  loading: false,
  error: null,
};

export const loginUserAsync = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }, { dispatch, rejectWithValue }) => {
    try {
      await dispatch(clearUserAsync());

      const { user, accessToken } = await loginUser(email, password);

      let timer: Timer | null = null;
      if (user.timer) {
        timer = JSON.parse(user.timer);
      }

      await AsyncStorage.setItem("user", JSON.stringify(user));
      await AsyncStorage.setItem("accessToken", accessToken);

      if (timer) {
        dispatch(loadTimerFromStorage(timer));
      }

      return { user: { ...user, timer }, accessToken };
    } catch (error: any) {
      console.error("[loginUserAsync] Erro ao fazer login:", error.message);
      return rejectWithValue(error.message || "Erro ao realizar login.");
    }
  }
);

export const loadUserAsync = createAsyncThunk(
  "user/loadUser",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const userData = await AsyncStorage.getItem("user");
      const accessToken = await AsyncStorage.getItem("accessToken");

      if (userData && accessToken) {
        const user = JSON.parse(userData);

        let timer: Timer | null = null;
        if (user.timer) {
          timer = JSON.parse(user.timer);
        }

        if (timer) {
          dispatch(loadTimerFromStorage(timer));
        }

        return { user: { ...user, timer }, accessToken };
      }

      return { user: null, accessToken: null };
    } catch (error) {
      console.error("[loadUserAsync] Erro ao carregar o usuário:", error);
      return rejectWithValue("Erro ao carregar os dados do usuário.");
    }
  }
);

export const updateUserTimerAsync = createAsyncThunk(
  "user/updateTimer",
  async (timer: Timer, { getState, rejectWithValue }) => {
    try {
      const state = getState() as { user: UserState };
      const { user, accessToken } = state.user;

      if (!user || !accessToken) {
        throw new Error("Usuário não está autenticado.");
      }

      const response = await fetch(`${BASE_URL}/${user.id}/timer`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ timer }),
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar o timer do usuário no backend.");
      }

      const updatedUser = await response.json();
      return updatedUser;
    } catch (error: any) {
      console.error("[updateUserTimerAsync] Erro ao atualizar o timer do usuário:", error.message);
      return rejectWithValue(error.message || "Erro ao atualizar o timer do usuário.");
    }
  }
);

export const clearUserAsync = createAsyncThunk("user/clearUser", async (_, { rejectWithValue }) => {
  try {
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("accessToken");
    return null;
  } catch (error) {
    console.error("[clearUserAsync] Erro ao limpar os dados do usuário:", error);
    return rejectWithValue("Erro ao limpar os dados do usuário.");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetLogoutFlag(state) {
      state.isLoggedOut = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUserAsync.fulfilled,
        (state, action: PayloadAction<{ user: User; accessToken: string }>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.accessToken = action.payload.accessToken;
          state.isLoggedOut = false;
        }
      )
      .addCase(loginUserAsync.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload || "Erro ao realizar login.";
      })

      .addCase(loadUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loadUserAsync.fulfilled,
        (state, action: PayloadAction<{ user: User | null; accessToken: string | null }>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.accessToken = action.payload.accessToken;
          state.isLoggedOut = false;
        }
      )
      .addCase(loadUserAsync.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload || "Erro ao carregar os dados do usuário.";
      })

      .addCase(updateUserTimerAsync.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
      })
      .addCase(updateUserTimerAsync.rejected, (state, action: PayloadAction<any>) => {
        console.error("[updateUserTimerAsync] Erro ao atualizar o timer:", action.payload);
      })

      .addCase(clearUserAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(clearUserAsync.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.accessToken = null;
        state.isLoggedOut = true;
      })
      .addCase(clearUserAsync.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload || "Erro ao limpar os dados do usuário.";
      });
  },
});

export const { resetLogoutFlag } = userSlice.actions;

export default userSlice.reducer;
