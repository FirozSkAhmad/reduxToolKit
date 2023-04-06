import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const CounterSlice = createSlice(
    {
        name: "counter",
        initialState,
        reducers: {
            inc: (state) => {
                state.value += 1
            },
            dec: (state) => {
                state.value -= 1
            }
        }
    }
)

// Action creators are generated for each case reducer function
export const { inc, dec } = CounterSlice.actions

export default CounterSlice.reducer
