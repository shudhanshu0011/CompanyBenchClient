import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "@src/types/components";

export interface DefaultState {
  user: User;
}

const initialState: DefaultState = {
  user: {
    _id: "",
    userId: 1,
    email: "",
    userType: "",
    firstName: "",
    lastName: "",
    isEmailVerified: false,
    isActive: false,
    createdAt: "",
    mobile: 1,
    company: "",
    guid: "",
    updatedAt: "",
  },
};

export const userDataReducer = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state = initialState
    }
  },
});

// Action creators are generated for each case reducer function
export const { setUser, resetUser } = userDataReducer.actions;

export default userDataReducer.reducer;
