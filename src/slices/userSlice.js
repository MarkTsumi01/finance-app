import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    token: null
  },
  reducers: {
    singIn: (state, action) => {
      const { username, token } = action.payload
      state.username = username
      state.token = token
    },
    signOut: (state) => {
      state.username = ''
      state.token = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { singIn, signOut } = userSlice.actions

export default userSlice.reducer