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

                const findItem = draft.cart.find(item => action.payload.name == item.name)
                findItem ? findItem.pizzaCount++ : draft.cart.push({ ...action.payload, pizzaCount: 1 })

                draft.cartPrice = draft.cart.reduce((sum, el) => {
                    return sum + (el.pizzaPrice * el.pizzaCount)
                }, 0)

                draft.cartItemsCount = draft.cart.reduce((count, el) => {
                    return count + el.pizzaCount
                }, 0)
            })

        case 'REMOVE_CART_ITEM':
            return produce(state, draft => {

                const findItem = draft.cart.find(obj => obj.name == action.payload.name)
                if (findItem.pizzaCount <= 1) return
                findItem.pizzaCount--

                draft.cartPrice = draft.cart.reduce((sum, el) => {
                    return sum + (el.pizzaPrice * el.pizzaCount)
                }, 0)

                draft.cartItemsCount = draft.cart.reduce((count, el) => {
                    return count + el.pizzaCount
                }, 0)
            })

        case 'CLEAR_ITEM':
            return produce(state, draft => {

                draft.cart = draft.cart.filter(obj => obj.name !== action.payload.name)

                draft.cartPrice = draft.cart.reduce((sum, el) => {
                    return sum + (el.pizzaPrice * el.pizzaCount)
                }, 0)

                draft.cartItemsCount = draft.cart.reduce((count, el) => {
                    return count + el.pizzaCount
                }, 0)
            })

        case 'CLEAR_ITEMS':
            return produce(state, draft => {

                draft.cart = []
                draft.cartItemsCount = 0
                draft.cartPrice = 0
            })

        default:
            return state
    }
}