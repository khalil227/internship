import { createSlice } from "@reduxjs/toolkit";

const USER = [
  {
    username: "soulef",
    email: "soulefBenzina36@gmail.com",
    password: "pppp",
    confirmPassword: "pppp",
  },
  {
    username: "jenna",
    email: "jenna.lee@gmail.com",
    password: "jenna",
    confirmPassword: "jenna",
  },
];

const usersSlice = createSlice({
  name: "user",
  initialState: { users: USER },
  reducers: {
    addUsers(state, action) {
      // state.user.push(action?.payload);
      state.users = [...USER, action.payload];
    },
  },
});

export const { addUsers } = usersSlice.actions;

export default usersSlice.reducer;
