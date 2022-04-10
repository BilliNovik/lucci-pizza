import React from 'react'
import { Link } from "react-router-dom";

import logo from './../img/pizza-logo.svg'
import Button from './Button';

function Header() {

    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="38" src={logo} alt="Lucci Pizza" />
                        <div>
                            <h1>Lucci Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <div className="header__cart">
                    <Link to="/cart" >
                        <Button />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header