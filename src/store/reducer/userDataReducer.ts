import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserResponse } from "@src/types/components";

export interface DefaultState {
    user: UserResponse;
}

const initialState: DefaultState = {
    user: {},
};

export const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        user: (
            state,
            action: PayloadAction<UserResponse>
        ) => {
            state.user = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { user } = userSlice.actions;

export default userSlice.reducer;
