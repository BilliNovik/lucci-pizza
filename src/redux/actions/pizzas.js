import axios from "axios"

export const fetchPizzas = () => {
    return (dispatch) => {
        axios.get('http://localhost:3100/pizzas')
            .then(({ data }) => dispatch({ type: 'GET_PIZZAS', payload: data }))
    }
}