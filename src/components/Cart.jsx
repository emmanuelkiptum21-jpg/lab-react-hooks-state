import React from 'react'

const Cart = ({ items = [] }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>{item} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
