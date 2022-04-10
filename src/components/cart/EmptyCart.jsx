import React from 'react'
import { Link } from "react-router-dom";

import cart from '../../img/empty-cart.png'

function EnmtyCart() {
    return (
        <div className="container container--cart">
            <div className="cart cart--empty">
                <h2>Корзина пустая <i>😕</i></h2>
                <p>
                    Вероятней всего, вы не заказывали ещё пиццу.<br />
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src={cart} alt="Empty cart" />
                <Link to="/" className="button button--black">
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
    )
}

export default EnmtyCart