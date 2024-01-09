import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DataParams, DataType } from "../Types";

interface GetJobDataParams {
  pageNumber: number;
  jobParams: DataParams;
}

export const getJobData = createAsyncThunk(
  "jobData",
  async ({ pageNumber, jobParams }: GetJobDataParams) => {
    const options = {
      method: "GET",
      url: "https://jsearch.p.rapidapi.com/search",
      params: {
        query: jobParams.jobName || "c#",
        page: "1",
        num_pages: pageNumber,
        date_posted: jobParams.jobDate || "3days",
        remote_jobs_only: jobParams.jobRemote || "false",
        job_requirements: jobParams.jobExperience || "under_3_years_experience",
        employment_types: jobParams.jobTime || "FULLTIME",
      },
      headers: {
        'X-RapidAPI-Key': '361bf18306msh331d72f6ace8649p1fd955jsn2cc37a5caf56',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };
    const response = await axios<DataType>(options);
    return response.data.data;
  }
);
