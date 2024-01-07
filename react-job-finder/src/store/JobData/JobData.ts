import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DataType } from "../../Types";
import { getJobData } from "../../api/api";

const initialState: DataType = {
  isLoading: false,
  error: null,
  data: null,
};
export const JobData = createSlice({
  name: "jobData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getJobData.pending, (state) => {
        state.isLoading = false;
      })

      .addCase(getJobData.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getJobData.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});
export default JobData.reducer;
