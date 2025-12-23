import { createSlice, nanoid } from "@reduxjs/toolkit";
import { applicants } from "../data/mockData";

const applicantsSlice = createSlice({
  name: "applicants",
  initialState: applicants,
  reducers: {
    addApplicant: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(applicant) {
        return {
          payload: {
            id: nanoid(),
            status: "Applied",
            ...applicant,
          },
        };
      },
    },
    updateStatus: (state, action) => {
      const app = state.find((a) => a.id === action.payload.id);
      if (app) {
        app.status = action.payload.status;
      }
    },
  },
});

export const { addApplicant, updateStatus } = applicantsSlice.actions;
export default applicantsSlice.reducer;
