const defaultState = {
    pizzas: []
}

export const card = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_PIZZAS':
            return { ...state, ...action.payload }
        default:
            return state
    }
}