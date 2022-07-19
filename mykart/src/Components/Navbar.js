import React from 'react'
import { useSelector } from 'react-redux'
import {CartIcon} from '../icons'


const Navbar = () => {
    const { amount } = useSelector((state) => state.cart);
    // console.log(amount);
  return (
        <nav>
            <div className='nav-center'>
                <div className='nav-container'>
                <h3>My Kart</h3>
                    <CartIcon />
                    <div className='amount-container'>
                        <p className='total-amount'>{amount}</p>
                    </div>
                </div>
            </div>
    </nav>

  )
}

export default Navbar





