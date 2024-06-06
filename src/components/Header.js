import React, { useState } from 'react'
import { FaShoppingBag } from "react-icons/fa"
import Order from './Order'


const showOrders = (props) => {
    console.log(props.orders);
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='summa'>Sum: {new Intl.NumberFormat().format(summa)}$</p>
        </div>
    )
}

function showNothing() {
    return (
        <div className='empty'>
            <h2>No item</h2>
        </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
  return (
      <header>
          <div>
              <span className='logo'>Books</span>
              <ul className='nav'>
                  <li>About us</li>
                  <li>Contacts</li>
                  <li>Cabinet</li>
              </ul>
              <FaShoppingBag onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-card-button ${cartOpen && 'active'}`} />
              
              {cartOpen && (
                  <div className='shop-card'>
                      {props.orders.length > 0 ?
                      showOrders (props) : showNothing()}
                  </div>
              )}
          </div>
          <div className='presentation'></div>
    </header>
  )
}
