import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Categories from '../components/Categories'
import PizzaCard from '../components/PizzaCard'
import SortField from '../components/SortField'
import { fetchPizzas, setIsLoading } from '../redux/actions/pizzas'
import PizzaCardLoader from '../components/PizzaCardLoader'
import { addCartItem } from '../redux/actions/cart'

const categoryItems = [
    { id: 0, category: 0, text: 'Мясные' },
    { id: 1, category: 1, text: 'Вегетарианская' },
    { id: 2, category: 2, text: 'Гриль' },
    { id: 3, category: 3, text: 'Острые' },
    { id: 4, category: 4, text: 'Закрытые' }
]

function Main() {
    const dispatch = useDispatch();
    const { pizzas, isLoading } = useSelector(state => state.pizzas);

    React.useEffect(() => {
        dispatch(fetchPizzas())
    }, [])

    React.useEffect(() => {
        if (pizzas.length) {
            dispatch(setIsLoading(false));
        }
    }, [pizzas]);

    const addPizzaInCart = (obj) => {
        dispatch(addCartItem(obj))
    }

    return (

        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories categoryItems={categoryItems} />
                    <SortField />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading ?
                        Array(12).fill(0).map((_, index) => <PizzaCardLoader key={index} />)
                        :
                        pizzas && pizzas.map((pizza) => (
                            <PizzaCard key={pizza.id} {...pizza} addPizzaInCart={addPizzaInCart} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Main