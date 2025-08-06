// File: src/Kambaz/Courses/Modules/reducer.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { modules as dbModules } from "../../Database";

export interface ModuleType {
  _id: string;
  course: string;
  name: string;
  lessons: string[];
  editing?: boolean;
}

interface ModulesState {
  modules: ModuleType[];
}

const initialState: ModulesState = {
  modules: dbModules as ModuleType[],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules(state, action: PayloadAction<ModuleType[]>) {
      state.modules = action.payload;
    },
    addModule(state, action: PayloadAction<{ course: string; name: string }>) {
      const { course, name } = action.payload;
      state.modules.push({
        _id: crypto.randomUUID(),
        course,
        name,
        lessons: [],
      });
    },
    deleteModule(state, action: PayloadAction<string>) {
      state.modules = state.modules.filter((m) => m._id !== action.payload);
    },
    editModule(state, action: PayloadAction<string>) {
      state.modules = state.modules.map((m) =>
        m._id === action.payload
          ? { ...m, editing: true }
          : { ...m, editing: false }
      );
    },
    updateModule(state, action: PayloadAction<ModuleType>) {
      state.modules = state.modules.map((m) =>
        m._id === action.payload._id
          ? { ...action.payload, editing: true }
          : m
      );
    },
    finishEditModule(state, action: PayloadAction<ModuleType>) {
      state.modules = state.modules.map((m) =>
        m._id === action.payload._id
          ? { ...action.payload, editing: false }
          : m
      );
    },
  },
});

export const {
  setModules,
  addModule,
  deleteModule,
  editModule,
  updateModule,
  finishEditModule,
} = modulesSlice.actions;
export default modulesSlice.reducer;
