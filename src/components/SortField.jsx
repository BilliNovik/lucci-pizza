import classNames from 'classnames'
import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import { setPizzas, fetchPizzasByParams } from '../redux/actions/pizzas'

const sortItems = [
    { id: 0, value: 'rating', text: 'популярности' },
    { id: 1, value: 'price', text: 'цене' },
    { id: 2, value: 'name', text: 'алфавиту' },
]

function SortField() {
    const [isShow, setIsShow] = React.useState(false)
    const [activeSort, setActiveSort] = React.useState(0)
    const sortRef = React.useRef();
    const isMounted = React.useRef(false);
    const [orderType, setOrderType] = React.useState(true)
    // true === desc, false === incr

    const dispatch = useDispatch()
    const navigate = useNavigate()

    React.useEffect(() => {

        const decOrInc = orderType ? 'desc' : 'incr'
        const type = sortItems[activeSort].value

        if (isMounted.current) {
            const queryString = qs.stringify({
                sortBy: type,
                order: decOrInc
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true

        axios.get(`https://62d937e65d893b27b2e0cf08.mockapi.io/lucci-pizza/pizzas?&sortBy=${type}&order=${decOrInc}`)
            .then(({ data }) => dispatch(setPizzas(data)))

    }, [activeSort, orderType])

    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            console.log(params)

            dispatch(fetchPizzasByParams(params))
            setOrderType(params.order === 'desc' ? true : false)
            setActiveSort(sortItems.find(el => el.value === params.sortBy).id)
        }

    }, [])

    const closePopup = (id) => {
        setActiveSort(id)
        setIsShow(false)
    }

    const handleClickOutside = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(sortRef.current)) {
            setIsShow(false)
        }
    }

    React.useEffect(() => {
        if (isShow) {
            document.addEventListener('click', handleClickOutside)
            return () => {
                document.removeEventListener('click', handleClickOutside)
            }
        }
    }, [isShow])

    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label">
                <svg className={classNames({ 'active': orderType })} onClick={() => setOrderType(!orderType)}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={() => setIsShow(!isShow)}>{sortItems[activeSort].text}</span>
            </div>
            {
                isShow && <div className="sort__popup">
                    <ul>
                        {sortItems.map((sort, i) => (
                            <li key={i} className={classNames({ 'active': activeSort === sort.id })}
                                onClick={() => closePopup(sort.id)}>{sort.text}</li>
                        ))}
                    </ul>
                </div>
            }
        </div >
    )
}

export default SortField