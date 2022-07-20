export const addCartItem = (item) => {
    return {
        type: 'ADD_CART_ITEM',
        payload: item,
    }
}

export const removeCartItem = (item) => {
    return {
        type: 'REMOVE_CART_ITEM',
        payload: item,
    }
}


export const clearItem = (item) => {
    return {
        type: 'CLEAR_ITEM',
        payload: item,
    }
}

export const clearItems = () => {
    return {
        type: 'CLEAR_ITEMS'
    }
}