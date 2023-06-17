import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
    loading: true,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        fetchUsers: (state, action) => {
            state.value = [...action.payload]
            state.loading = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { fetchUsers } = counterSlice.actions

export default counterSlice.reducer