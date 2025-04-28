import React from 'react'
import Dish from '../components/Dish'
import Featured from '../components/Featured'
function Home() {
  const dishes = [
    {
      name: 'Green Salad',
      description: 'A refreshing blend of crisp romaine lettuce, cherry tomatoes, cucumber, red onions, and Kalamata olives, tossed in a light lemon-oregano vinaigrette and topped with crumbled feta cheese',
      price: 10.99,
      image: 'dish1.png'
    },
    {
      name: 'Bruchetta',
      description: 'Grilled artisan bread topped with a vibrant mix of vine-ripened tomatoes, garlic, fresh basil, and extra virgin olive oil. Finished with a hint of balsamic glaze for a bold yet balanced appetizer.',
      price: 12.99,
      image: 'dish2.png'
    },
    {
      name: 'Lemon Dessert',
      description: 'A light, moist sponge cake infused with fresh lemon zest and juice, layered with tangy lemon curd and topped with a smooth lemon glaze. The perfect citrusy finish to your dining experience.',
      price: 8.99,
      image: 'dish3.png'

    }
  ]
  const dishElements = dishes.map((dish, index) => (
    <Dish key={index} {...dish} />
  ))
  return (
    <div>
      <Featured/>
    <section className='Home'>
      <header>
        <h1>This Weeks Special !</h1>
        <button type='button'>Online Order</button>
      </header>
      <h2>Our Dishes</h2>
      <section className='dishes'>
        {dishElements}
      </section>
      
    </section>
    </div>

  )
}

export default Home