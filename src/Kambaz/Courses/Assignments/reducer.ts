// src/Kambaz/Courses/Assignments/reducer.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { assignments as dbAssignments } from "../../Database";

export interface Assignment {
  _id: string;
  course: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
}

interface AssignmentsState {
  assignments: Assignment[];
}

const initialState: AssignmentsState = {
  assignments: dbAssignments as Assignment[],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment(state, action: PayloadAction<Omit<Assignment, "_id">>) {
      const newA: Assignment = { _id: uuidv4(), ...action.payload };
      state.assignments.push(newA);
    },
    updateAssignment(state, action: PayloadAction<Assignment>) {
      state.assignments = state.assignments.map(a =>
        a._id === action.payload._id ? action.payload : a
      );
    },
    deleteAssignment(state, action: PayloadAction<string>) {
      state.assignments = state.assignments.filter(a => a._id !== action.payload);
    },
  },
});

export const {
  addAssignment,
  updateAssignment,
  deleteAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
