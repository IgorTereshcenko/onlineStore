import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    shopsLoadingStatus: 'idle', 
}

const catalogSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
        shopsFetching: state => {state.shopsLoadingStatus = 'loading'},
        shopsFetched: (state,action) => {state.data = action.payload;
                                         state.shopsLoadingStatus = 'idle'},
        shopsFetchingError: state => {state.shopsLoadingStatus = 'error'},
        shopsChoiseSize: (state, action) => {
            return {
                ...state,
                data: state.data.map(item => {
                    return {
                        ...item,
                        size: action.payload
                    }
                })
            }
        }
    }
});

const {actions, reducer} = catalogSlice;

export default reducer;
export const {
    shopsFetching,
    shopsFetched,
    shopsFetchingError,
    shopsChoiseSize
} = actions;