import React from 'react'
import { Link } from 'react-router-dom';

function Featured() {
  return (
    <section className='featured'>
        <aside>
            <h1>Little Lemon</h1>
            <h2>Denton</h2>
            <summary>Explore our handpicked featured dishes — a delightful mix of fresh ingredients, bold flavors, and seasonal inspirations crafted to elevate your dining experience.</summary>
            <Link to="/booking">Reserve A Table</Link>
        </aside>
        <main>
            <img src="pic1.png" alt="Featured" />
        </main>
    </section>
  )
}

export default Featured