// src/Kambaz/Courses/reducer.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { courses as dbCourses } from "../Database";

export interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
  description: string;
}

interface CoursesState {
  courses: Course[];
}

const initialState: CoursesState = {
  courses: dbCourses as Course[],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse(state, action: PayloadAction<Omit<Course, "_id">>) {
      state.courses.push({ _id: uuidv4(), ...action.payload });
    },
    deleteCourse(state, action: PayloadAction<string>) {
      state.courses = state.courses.filter(c => c._id !== action.payload);
    },
    updateCourse(state, action: PayloadAction<Course>) {
      state.courses = state.courses.map(c =>
        c._id === action.payload._id ? action.payload : c
      );
    },
  },
});

export const { addCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
