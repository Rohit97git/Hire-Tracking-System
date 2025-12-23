import React from "react";
import { jobs } from "../data/mockData";
import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: jobs,
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addJob } = jobsSlice.actions;
export default jobsSlice.reducer;
