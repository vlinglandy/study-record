import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

const conterSlice = createSlice({
    name:"count",
    initialState,
    reducers: {
        add(state, actions){
            state.value += actions.payload
        },
        sub(state, actions){
            state.value -= actions.payload
        }
    }
})

export const { add, sub } = conterSlice.actions

export const getCounter = (state) => state.counter.value

export default conterSlice.reducer