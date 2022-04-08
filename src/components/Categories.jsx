import React from 'react'
import classNames from 'classnames'

function Categories({ categoryItems }) {
    const [activeCategory, setActiveCategory] = React.useState(null)

    return (
        <div className="categories">
            <ul>
                <li onClick={() => setActiveCategory(null)} className={classNames({ 'active': (activeCategory === null) })}>Все</li>
                {
                    categoryItems.map((item, i) => (
                        <li onClick={() => { setActiveCategory(item.category) }}
                            className={classNames({ 'active': (activeCategory === item.category) })}>{item.text}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories