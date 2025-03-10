import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  loadTimerFromStorage,
  resetTimer,
  saveTimerAsync,
  updateTimer,
} from "../store/slices/timerSlice";

export const useHomeScreenLogic = () => {
  const dispatch = useAppDispatch();
  const timer = useAppSelector((state) => state.timer);

  const {
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
    lastUpdated = Date.now(),
    isLoaded = false,
  } = timer || {};

  const [recoveryProgress, setRecoveryProgress] = useState<number>(0);
  const [challengeProgress, setChallengeProgress] = useState<number>(0);

  useEffect(() => {
    dispatch(loadTimerFromStorage());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsedTimeInSeconds = Math.floor(
        (Date.now() - lastUpdated) / 1000
      );

      const totalSeconds = seconds + elapsedTimeInSeconds;
      const newSeconds = totalSeconds % 60;
      const totalMinutes = minutes + Math.floor(totalSeconds / 60);
      const newMinutes = totalMinutes % 60;
      const totalHours = hours + Math.floor(totalMinutes / 60);
      const newHours = totalHours % 24;
      const newDays = days + Math.floor(totalHours / 24);

      const totalSecondsFor28Days = 28 * 24 * 60 * 60;

      const elapsedTotalSeconds =
        newDays * 24 * 60 * 60 + newHours * 60 * 60 + newMinutes * 60 + newSeconds;

      const recoveryPercentage = Math.min(
        (elapsedTotalSeconds / totalSecondsFor28Days) * 100,
        100
      );
      const challengePercentage = Math.min(
        (elapsedTotalSeconds / totalSecondsFor28Days) * 100,
        100
      );

      setRecoveryProgress(recoveryPercentage);
      setChallengeProgress(challengePercentage);

      dispatch(updateTimer());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, days, hours, minutes, seconds, lastUpdated]);

  useEffect(() => {
    const saveInterval = setInterval(() => {
      if (!timer || typeof timer.days === "undefined") {
        console.error("[saveTimerAsync] Timer está indefinido ou mal formatado:", timer);
        return;
      }

      dispatch(saveTimerAsync({ id: 1, timer }));
    }, 60000);

    return () => clearInterval(saveInterval);
  }, [dispatch, timer]);

  const handleReset = () => {
    dispatch(resetTimer());
    dispatch(
      saveTimerAsync({
        id: 1,
        timer: {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          lastUpdated: Date.now(),
          isLoaded: true,
        },
      })
    );
    setRecoveryProgress(0);
    setChallengeProgress(0);
  };

  const handlePromessa = () => {
  };

  const handleMeditar = () => {
  };

  return {
    timer,
    handleReset,
    handlePromessa,
    handleMeditar,
    isLoaded,
    recoveryProgress,
    challengeProgress,
  };
};
