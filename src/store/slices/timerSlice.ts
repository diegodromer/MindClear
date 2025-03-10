import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";

interface TimerState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLoaded: boolean;
  lastUpdated: number;
}

const initialState: TimerState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isLoaded: false,
  lastUpdated: Date.now(),
};

export const loadTimerAsync = createAsyncThunk(
  "timer/loadFromBackend",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/timer`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Erro ao carregar o timer do backend.");
      }
      const data = await response.json();
      return data as TimerState;
    } catch (error: any) {
      return rejectWithValue(error.message || "Erro ao carregar o timer.");
    }
  }
);

export const saveTimerAsync = createAsyncThunk(
  "timer/saveToBackend",
  async (
    { id, timer }: { id: number; timer: TimerState },
    { rejectWithValue }
  ) => {
    if (!id || typeof id !== "number") {
      console.error("[saveTimerAsync] ID do usuário inválido ou indefinido:", id);
      return rejectWithValue("ID do usuário inválido ou indefinido.");
    }

    if (
      !timer ||
      typeof timer.days !== "number" ||
      typeof timer.hours !== "number" ||
      typeof timer.minutes !== "number" ||
      typeof timer.seconds !== "number" ||
      typeof timer.lastUpdated !== "number"
    ) {
      console.error("[saveTimerAsync] Timer mal formatado ou indefinido:", timer);
      return rejectWithValue("Timer mal formatado ou indefinido.");
    }

    try {
      const response = await fetch(`${BASE_URL}/${id}/timer`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timer: {
            days: timer.days,
            hours: timer.hours,
            minutes: timer.minutes,
            seconds: timer.seconds,
            lastUpdated: timer.lastUpdated,
          },
        }),
      });

      if (!response.ok) {
        const errorMessage = `Erro ao salvar o timer no backend. Status: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message || "Erro durante o salvamento do timer.");
    }
  }
);

export const syncTimerPeriodically = createAsyncThunk(
  "timer/syncPeriodically",
  async (_, { dispatch, getState }) => {
    const state: any = getState();
    const timer: TimerState = state.timer;
    const userId = state.user?.user?.id;

    if (!userId) {
      console.error("[syncTimerPeriodically] ID do usuário não encontrado.");
      return;
    }

    if (
      !timer ||
      typeof timer.days !== "number" ||
      typeof timer.hours !== "number" ||
      typeof timer.minutes !== "number" ||
      typeof timer.seconds !== "number" ||
      typeof timer.lastUpdated !== "number"
    ) {
      console.error("[syncTimerPeriodically] Timer mal formatado ou indefinido:", timer);
      return;
    }

    try {
      dispatch(updateTimer());
      await dispatch(saveTimerAsync({ id: userId, timer }));
    } catch (error) {
      console.error("[syncTimerPeriodically] Erro ao sincronizar o timer:", error);
    }
  }
);

export const loadTimerFromAsyncStorage = async (): Promise<TimerState | null> => {
  try {
    const storedTimer = await AsyncStorage.getItem("timer");
    if (storedTimer) {
      return JSON.parse(storedTimer);
    }
    return null;
  } catch (error) {
    console.error("[loadTimerFromAsyncStorage] Erro ao carregar o timer do storage:", error);
    return null;
  }
};

export const saveTimerToAsyncStorage = async (timer: TimerState) => {
  try {
    await AsyncStorage.setItem("timer", JSON.stringify(timer));
  } catch (error) {
    console.error("[saveTimerToAsyncStorage] Erro ao salvar o timer no storage:", error);
  }
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    updateTimer(state) {
      const now = Date.now();
      const elapsed = Math.floor((now - state.lastUpdated) / 1000);

      state.lastUpdated = now;
      state.seconds += elapsed;

      if (state.seconds >= 60) {
        state.minutes += Math.floor(state.seconds / 60);
        state.seconds %= 60;
      }

      if (state.minutes >= 60) {
        state.hours += Math.floor(state.minutes / 60);
        state.minutes %= 60;
      }

      if (state.hours >= 24) {
        state.days += Math.floor(state.hours / 24);
        state.hours %= 24;
      }
    },
    loadTimerFromStorage(state, action: PayloadAction<TimerState | null>) {
      if (action.payload) {
        return { ...state, ...action.payload, isLoaded: true };
      } else {
        state.isLoaded = true;
      }
    },
    resetTimer(state) {
      return { ...initialState, isLoaded: true };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTimerAsync.fulfilled, (state, action: PayloadAction<TimerState>) => {
        return { ...state, ...action.payload, isLoaded: true };
      })
      .addCase(loadTimerAsync.rejected, (state, action) => {
        state.isLoaded = true;
      })
      .addCase(saveTimerAsync.fulfilled, (state, action) => {
      })
      .addCase(saveTimerAsync.rejected, (state, action) => {
      });
  },
});

export const { updateTimer, loadTimerFromStorage, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;
