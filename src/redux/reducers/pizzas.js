const defaultState = {
    pizzas: [],
    isLoading: true,
}

export const pizzas = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                pizzas: [...action.payload],
            }
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}