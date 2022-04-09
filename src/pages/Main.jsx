import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Categories from '../components/Categories'
import PizzaCard from '../components/PizzaCard'
import SortField from '../components/SortField'
import { fetchPizzas, setIsLoading } from '../redux/actions/pizzas'
import PizzaCardLoader from '../components/PizzaCardLoader'

function Main() {
    const dispatch = useDispatch();
    const pizzas = useSelector(state => state.pizzas.pizzas);
    const isLoading = useSelector(state => state.pizzas.isLoading);
    const sortItems = [
        { id: 0, value: 'rating', text: 'популярности' },
        { id: 1, value: 'price', text: 'цене' },
        { id: 2, value: 'name', text: 'алфавиту' },
    ]
    const categoryItems = [
        { id: 0, category: 0, text: 'Мясные' },
        { id: 1, category: 1, text: 'Вегетарианская' },
        { id: 2, category: 2, text: 'Гриль' },
        { id: 3, category: 3, text: 'Острые' },
        { id: 4, category: 4, text: 'Закрытые' }
    ]

    React.useEffect(() => {
        dispatch(fetchPizzas())
    }, [])

    React.useEffect(() => {
        if (pizzas.length) {
            dispatch(setIsLoading(false));
        }
    }, [pizzas]);

    return (

        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories categoryItems={categoryItems} />
                    <SortField sortItems={sortItems} />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading ?
                        Array(12).fill(0).map((_, index) => <PizzaCardLoader key={index} />)
                        :
                        pizzas && pizzas.map((pizza) => (
                            <PizzaCard key={pizza.id} {...pizza} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Main