import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DataType } from "../Types";

export const getJobData = createAsyncThunk("jobData", async () => {
  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
      query: 'Python developer in Texas, USA',
      page: '1',
      num_pages: '1'
    },
    headers: {
      'X-RapidAPI-Key': '7375417c95mshedde12ea1800f44p1ad42djsnbfe7dae2766f',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  const response = await axios<DataType>(options);
  return response.data.data;
});
