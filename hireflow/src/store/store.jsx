import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobsSlice";
import applicantsReducer from "./applicantsSlice";

const saveState = (state) => {
  localStorage.setItem("hireflow", JSON.stringify(state));
};

const loadState = () => {
  try {
    const data = localStorage.getItem("hireflow");
    return data ? JSON.parse(data) : undefined;
  } catch {
    return undefined;
  }
};

const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    applicants: applicantsReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
