import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ products, onAddToCart }) => {
  if (products.length === 0) {
    return (
      <div>
        <h2>Available Products</h2>
        <p>No products available.</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Available Products</h2>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductList
