// src/Kambaz/Enrollments/reducer.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentsState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentsState = {
  enrollments: [],
};

const slice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments(state, action: PayloadAction<Enrollment[]>) {
      state.enrollments = action.payload;
    },
    addEnrollment(state, action: PayloadAction<Enrollment>) {
      state.enrollments.push(action.payload);
    },
    deleteEnrollment(state, action: PayloadAction<string>) {
      state.enrollments = state.enrollments.filter(e => e._id !== action.payload);
    },
  },
});

export const {
  setEnrollments,
  addEnrollment,
  deleteEnrollment,
} = slice.actions;

export default slice.reducer;
