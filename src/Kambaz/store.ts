// src/Kambaz/store.ts
import { configureStore } from "@reduxjs/toolkit";
import modulesReducer    from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import accountReducer    from "./Account/reducer";
import coursesReducer from "./Courses/reducer";
const store = configureStore({
  reducer: {
    modules:    modulesReducer,
    assignments: assignmentsReducer,
    account:    accountReducer, 
    courses: coursesReducer,      
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
