import axios from "axios"

export const fetchPizzas = () => {
    return (dispatch) => {
        axios.get('https://62d937e65d893b27b2e0cf08.mockapi.io/lucci-pizza/pizzas')
            .then(({ data }) => (dispatch(setPizzas(data))))
    }
}

export const setPizzas = (pizzas) => {
    return {
        type: 'SET_PIZZAS',
        payload: pizzas,
    }
}

export const setIsLoading = (action) => {
    return {
        type: 'SET_IS_LOADING',
        payload: action,
    }
}