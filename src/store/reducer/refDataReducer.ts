import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetJobTechnologyResponseData } from "@src/types/components";

export interface DefaultState {
  technologies: GetJobTechnologyResponseData;
}

const initialState: DefaultState = {
  technologies: { technologys: [] },
};

export const counterSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {
    technologies: (
      state,
      action: PayloadAction<GetJobTechnologyResponseData>
    ) => {
      state.technologies = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { technologies } = counterSlice.actions;

export default counterSlice.reducer;
