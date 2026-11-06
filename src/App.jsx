import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import { sampleProducts } from './components/ProductList'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === selectedCategory)

  const handleAddToCart = (product) => {
    setCart((currentCart) => [...currentCart, product.name])
  }

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#111827' : '#fff',
        color: darkMode ? '#f9fafb' : '#111827',
        minHeight: '100vh',
        padding: '2rem'
      }}
    >
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        darkMode={darkMode}
        onToggle={() => setDarkMode((current) => !current)}
      />

      <div>
        <label>Filter by Category: </label>
        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList
        products={filteredProducts}
        onAddToCart={handleAddToCart}
      />

      <Cart items={cart} />
    </div>
  )
}

export default App
