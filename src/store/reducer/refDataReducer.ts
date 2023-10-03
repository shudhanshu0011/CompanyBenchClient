import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GetJobLocationListResponseData, GetJobStatusListResponseData, GetJobTechnologyResponseData } from "@src/types/components";

export interface DefaultState {
  technologies: GetJobTechnologyResponseData;
  location: GetJobLocationListResponseData;
  jobStatus: GetJobStatusListResponseData;
}

const initialState: DefaultState = {
  technologies: { technologys: [] },
  location:{jobs: []},
  jobStatus: { jobs: []}
};

export const refDataSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {
    setTechnologies: (
      state,
      action: PayloadAction<GetJobTechnologyResponseData>
    ) => {
      state.technologies = action.payload;
    },
    setLocations: (
      state,
      action: PayloadAction<GetJobLocationListResponseData>
    ) => {
      state.location = action.payload;
    },
    setJobStatus: (
      state,
      action: PayloadAction<GetJobStatusListResponseData>
    ) => {
      state.jobStatus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTechnologies, setLocations, setJobStatus } = refDataSlice.actions;

export default refDataSlice.reducer;
