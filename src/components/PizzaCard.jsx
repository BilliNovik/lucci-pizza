import classNames from 'classnames'
import React from 'react'

function PizzaCard({ name, imageUrl, price, sizes, types, addPizzaInCart }) {

    const defaultTypes = [{ id: 0, type: 'тонкое' }, { id: 1, type: 'традиционное' }]
    const defaultSizes = [26, 30, 40]
    const [pizzaType, setPizzaType] = React.useState(defaultTypes[types[0]].id)
    const [pizzaSize, setPizzaSize] = React.useState(sizes[0])
    const [pizzaPrice, setPizzaPrice] = React.useState(price)

    const exportObjInCart = {
        name,
        imageUrl,
        pizzaPrice,
        pizzaType,
        pizzaSize,
        pizzaCount: 1,
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt={name}
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {defaultTypes.map((type, i) => (
                        <li key={i} className={classNames({ 'active': (pizzaType === i) },
                            { 'disabled': (!types.includes(i)) })} onClick={() => setPizzaType(type.id)}>{type.type}</li>
                    ))}
                </ul>
                <ul>
                    {defaultSizes.map((size, i) => (
                        <li key={i} className={classNames({ 'active': (pizzaSize === size) },
                            { 'disabled': (!sizes.includes(size)) })} onClick={() => setPizzaSize(size)}>{size} см.</li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{pizzaPrice} ₽</div>
                <div className="button button--outline button--add" onClick={() => addPizzaInCart(exportObjInCart)}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div >
    )
}

export default PizzaCard