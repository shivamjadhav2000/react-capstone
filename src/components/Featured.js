import React from 'react'

function Featured() {
  return (
    <section className='featured'>
        <aside>
            <h1>Featured</h1>
            <h2>Featured</h2>
            <summary>Check out our latest featured items!</summary>
            <a role="button" href="/featured">See More</a>
        </aside>
        <main>
            <img src="https://via.placeholder.com/150" alt="Featured" />
        </main>
    </section>
  )
}

export default Featured