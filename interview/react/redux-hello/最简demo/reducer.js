import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value:0
}
const countSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        add(state){
            state.value += 1
        },
        sub(state){
            state.value -= 1
        }
    }
})

export const {add, sub} = countSlice.actions

export const getState = (state) => state.counter.value

export default countSlice.reducer