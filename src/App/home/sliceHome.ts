import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'HomeValue',
  initialState: {
    hours:''
  },

  reducers: {
    homeAction: (state, action: any) => {
    
    state.hours = action.payload
    },
    
  },
})
