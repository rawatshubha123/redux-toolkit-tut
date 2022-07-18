import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import CartContainer from './Components/CartContainer'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals } from './feature/cart/cartSlice'
import Modal from './Components/Modal'

const App = () => {
  const dispatch = useDispatch();
  const {cartItems} = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);


  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems])

  return (
    <main>
      {isOpen && <Modal /> }
      <Navbar />   
      <CartContainer />
    </main>
  )
}

export default App

