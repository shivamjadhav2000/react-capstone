import React from 'react'

function Dish(dish) {
  return (
    <article className='dish'>
        <img src={process.env.PUBLIC_URL+dish.image} alt={dish.name} />
        <header>
        <p>{dish.name}</p>
        <p className='price'>${dish.price}</p>
        </header>
        <main>

        <p>{dish.description}</p>
        <a >Add to Cart</a>
        </main>
    </article>
  )
}

export default Dish