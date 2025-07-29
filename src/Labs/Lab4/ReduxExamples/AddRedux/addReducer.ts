import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface AddState {
  sum: number;
}

const initialState: AddState = {
  sum: 0,
};

const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ a: number; b: number }>) => {
      state.sum = action.payload.a + action.payload.b;
    },
  },
});

export const { add } = addSlice.actions;
export default addSlice.reducer;
