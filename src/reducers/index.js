const initialState = {
    data: [],
    shoppingcard: [],
    shopsLoadingStatus: 'idle',
    total: null,
    ordering : []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOPS_FETCHING':
            return {
                ...state,
                shopsLoadingStatus: 'loading'
            }
        case 'SHOPS_FETCHED':
            return {
                ...state,
                data: action.payload,
                shopsLoadingStatus: 'idle'
            }
        case 'SHOPS_FETCHING_ERROR':
            return {
                ...state,
                shopsLoadingStatus: 'error'
            }
        case 'SHOPPINGCARD_LOADING':
            return {
                ...state,
                shoppingcard:[...state.shoppingcard, action.payload]
            }
        case 'SHOPPINGCARD_DELETED':
            return {
                ...state,
                shoppingcard: state.shoppingcard.filter(item => action.payload !== item.id)
            }
        case 'SHOPPINGCARD_TOTAL' :
            return {
                ...state,
                total: state.shoppingcard.reduce((prev,curr) => {return +prev + (+curr.totalPrice)},'')
            }
        case 'INCREASE_COUNT' :
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
        case 'DECREASE_COUNT' :
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
        case 'CHOISE_SIZE' :
            return {
                ...state,
                data: state.data.map(item => {
                    return {
                        ...item,
                        size: action.payload
                    }
                })
            }
        case 'ORDERING_FETCHED' :
            return {
                ...state,
                ordering: action.payload
            }

        default: return state
    }
        
}

export default reducer;