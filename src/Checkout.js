import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';

const Checkout = () => {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' src='https://www.webfx.com/wp-content/uploads/2021/11/img-types-of-amazon-ads__03.png' alt=''/>

            <div>
              <h2 className='checkout__title'>
                Your Shopping Basket
              </h2>

            </div>

        </div>

        <div className='checkout__right'>
        <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout;