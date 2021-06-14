import React, { useContext, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import Items from './Items';
import './Cart.css'
import { CartContext } from './Cart';


const ContextCart = () => {


    const { item, clearCart,totalItem, totalAmount} = useContext(CartContext);
    if (item.length === 0) {
        return (
            <>
                <header >
                    <div className='continue-shopping'>
                        <img src="./arrow.png" alt="arrow" className='arrow-icon' />
                        <h3>Mobile Shopping Cart (inspired from Benod Bahadur)</h3>
                    </div>
                    <div className='cart-icon'>
                        <img src="./cart.png" alt="cart" />
                        <p>0</p>
                    </div>
                </header>

                <section className='main-cart-section'>
                    <h1>My Shopping Cart</h1>
                    <p className='total-items'>you have <span className='total-items-count'>NOTHING</span> left in cart</p>
                </section>
            </>
        )
    }
    return (
        <>
            <header >
                <div className='continue-shopping'>
                    <img src="./arrow.png" alt="arrow" className='arrow-icon' />
                    <h3>Mobile Shopping Cart</h3>
                </div>
                <div className='cart-icon'>
                    <img src="./cart.png" alt="cart" />
                    <p>{totalItem}</p>
                </div>
            </header>

            <section className='main-cart-section'>
                <h1>My Shopping Cart (inspired from Benod Bahadur)</h1>
                <p className='total-items'>you have <span className='total-items-count'>{totalItem}</span> items in cart</p>
                <div className='cart-items'>
                    <div className='cart-items-container'>
                        <Scrollbars>
                            {
                                item.map((curItem) => < Items key={curItem.id} {...curItem} />)
                            }
                        </Scrollbars>
                    </div>

                </div>
                <div className='card-total'>
                    <h3>Cart Total: <span>{totalAmount} ৳</span></h3>
                    <button>Checkout</button>
                    <button
                        onClick={clearCart}
                        className='clear-cart'>Clear All</button>
                </div>
            </section>
        </>
    )
}


export default ContextCart;