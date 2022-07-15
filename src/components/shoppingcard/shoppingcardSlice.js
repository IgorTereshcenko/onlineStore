import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shoppingcard: [],
    total: null
}

const shoppingcardSlice = createSlice({
    name: 'shoppingcard',
    initialState,
    reducers: {
        shoppingcardLoading: (state,action) => {state.shoppingcard.push(action.payload)},
        shoppingcardDeleted: (state,action) => {state.shoppingcard = state.shoppingcard.filter(item => action.payload !== item.id)},
        shoppingcardTotal: state => {state.total = state.shoppingcard.reduce((prev,curr) => {return +prev + (+curr.totalPrice)},'')},
        shoppingcardIncreaseCount: (state,action) => {
            return {
                ...state,
                shoppingcard: state.shoppingcard.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            count: +item.count + 1,
                            totalPrice: (+item.count + 1) * item.price
                        }
                    }
                    return item;
                })
            } 
        },
        shoppingcardDecreaseCount: (state, action) => {
            return {
                ...state,
                shoppingcard: state.shoppingcard.map(item => {
                    if (item.id === action.payload) {
                        const newCount = +item.count - 1 > 1 ? item.count - 1 : 1;
                        return {
                            ...item,
                            count: newCount,
                            totalPrice: newCount * item.price
                        }
                    };
                    return item;
                })
            }
        }
    }
})

const {actions, reducer} = shoppingcardSlice;

export default reducer;
export const {
    shoppingcardLoading,
    shoppingcardDeleted,
    shoppingcardTotal,
    shoppingcardIncreaseCount,
    shoppingcardDecreaseCount
} = actions;