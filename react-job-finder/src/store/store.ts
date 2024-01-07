import { configureStore } from "@reduxjs/toolkit";
import JobData from "./JobData/JobData";

export const store = configureStore({
  reducer: {
    job: JobData,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
