export const shopsFetching = () => {
    return {
        type: 'SHOPS_FETCHING'
    }
}

export const shopsFetched = (data) => {
    return {
        type: 'SHOPS_FETCHED',
        payload: data
    }
}

export const shopsFetchingError = () => {
    return {
        type: 'SHOPS_FETCHING_ERROR'
    }
}

export const shoppingcardLoading = (item) => {
    return {
        type: 'SHOPPINGCARD_LOADING',
        payload: item
    }
}

export const shoppingcardDeleted = (id) => {
    return {
        type: 'SHOPPINGCARD_DELETED',
        payload: id
    }
}

export const shoppingcardTotal = () => {
    return {
        type: 'SHOPPINGCARD_TOTAL',
    }
}

export const increaseCount = (id) => {
    return {
        type: 'INCREASE_COUNT',
        payload: id
    }
}

export const decreaseCount = (id) => {
    return {
        type: 'DECREASE_COUNT',
        payload: id,
        
    }
}

export const choiseSize = (value) => {
    return {
        type: 'CHOISE_SIZE',
        payload: value
    }
}

export const orderingFetched = (ordering) => {
    return {
        type: 'ORDERING_FETCHED',
        payload: ordering
    }
}
