import axios from "axios"

export const fetchPizzas = () => {
    return (dispatch) => {
        axios.get('http://localhost:3100/pizzas')
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