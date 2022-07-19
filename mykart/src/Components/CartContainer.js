import React from 'react';
import CartItem from './CartItem';
import cartItems from '../cartItems';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../feature/cart/cartSlice';
import { openModal } from '../feature/modal/modalSlice';

const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartItems, total, amount } = useSelector
    ((state) => state.cart);

    if(amount < 1){
        return (
           <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
           </section>
        )
    }

    return (
        <section className='cart'>
            <header>
                <h2>your bag</h2>
            </header>
            
                <div>
                    {
                        cartItems.map((items) =>{
                            return <CartItem key={items.id} {...items} />
                        })
                    }
                </div>
            
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>₹{total.toFixed(2)}</span>
                    </h4>
                </div>
                <button className='btn clear-btn'
                onClick={() => {
                    dispatch(openModal());
                }}
                >clear cart</button>
            </footer>
        </section>
    )


}

export default CartContainer;