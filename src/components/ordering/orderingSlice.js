import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ordering : []
}

const orderingSlice = createSlice({
    name: 'ordering',
    initialState,
    reducers: {
        orderingFetched: (state, action) => {state.ordering = action.payload}
    }
})

const {actions, reducer} = orderingSlice;

export default reducer;

export const {orderingFetched} = actions;