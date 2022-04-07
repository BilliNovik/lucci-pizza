import React from 'react'
import Categories from '../components/Categories'
import PizzaCard from '../components/PizzaCard'
import SortField from '../components/SortField'

function Main() {
    return (

        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories />
                    <SortField />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    <PizzaCard />
                </div>
            </div>
        </div>
    )
}

export default Main