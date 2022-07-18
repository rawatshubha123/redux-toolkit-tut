import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import CartContainer from './Components/CartContainer'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals, getCartItems } from './feature/cart/cartSlice'
import Modal from './Components/Modal'

const App = () => {
  const dispatch = useDispatch();
  const {cartItems, isLoading} = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);


  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems])

  useEffect(()=>{
    dispatch(getCartItems());
  },[]);


  if(isLoading){
    return(
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }


  return (
    <main>
      {isOpen && <Modal /> }
      <Navbar />   
      <CartContainer />
    </main>
  )
}

export default App

