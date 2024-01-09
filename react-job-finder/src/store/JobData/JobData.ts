import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DataType } from "../../Types";
import { getJobData } from "../../api/api";

const initialState: DataType = {
  isLoading: false,
  error: null,
  data: null,
  params: {
    jobDate: '',
    jobExperience: '',
    jobName: '',
    jobRemote: '',
    jobTime: '',
  },
};
export const JobData = createSlice({
  name: "jobData",
  initialState,
  reducers: {
    paramsData: (state, action) => {
 state.params=action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getJobData.pending, (state) => {
        state.isLoading = false;
      })

      .addCase(getJobData.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = true;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getJobData.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = true;
        state.error = action.payload;
        state.data = [];
      });
  },
});
export default JobData.reducer;
export const{paramsData} =JobData.actions