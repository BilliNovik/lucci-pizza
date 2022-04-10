const defaultState = {
    cart: [],
    cartItemsCount: 0,
    cartPrice: 0,
}

export const cart = (state = defaultState, action) => {

    switch (action.type) {
        case 'ADD_CART_ITEM':

            let newCart = [...state.cart, action.payload]
            let price = newCart.reduce((sum, el) => { return sum + el.pizzaPrice }, 0)

            return {
                ...state,
                cart: newCart,
                cartItemsCount: newCart.length,
                cartPrice: price,
            }
        default:
            return state
    }
}