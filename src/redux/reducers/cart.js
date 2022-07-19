import produce from "immer"

const defaultState = {
    cart: [],
    cartItemsCount: 0,
    cartPrice: 0,
}

export const cart = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_CART_ITEM':
            return produce(state, draft => {

                // console.log(action.payload.name);
                // console.log(state.cart);
                // state.cart && state.cart.forEach(item => {
                //     if (action.payload.name == item.name) console.log('f')
                // })

                draft.cart.push(action.payload)
                draft.cartPrice = draft.cart.reduce((sum, el) => { return sum + el.pizzaPrice }, 0)
                draft.cartItemsCount = draft.cart.length
            })

        case 'ADD_CART_ITEM':
            return produce(state, draft => {

                // console.log(action.payload.name);
                // console.log(state.cart);
                // state.cart && state.cart.forEach(item => {
                //     if (action.payload.name == item.name) console.log('f')
                // })

                draft.cart.push(action.payload)
                draft.cartPrice = draft.cart.reduce((sum, el) => { return sum + el.pizzaPrice }, 0)
                draft.cartItemsCount = draft.cart.length
            })

        default:
            return state
    }
}