import React, { useState } from 'react'
import './Style.css';
import Breadcrumb from '../../Components/BreadCrumb/Index';
import Buttons from '../../Components/Buttons';
import { Link, useNavigate } from 'react-router-dom';

const data = [
   {
      id: 1,
      amount: 10,
   },
   {
      id: 2,
      amount: 25
   },
   {
      id: 1,
      amount: 50,
   },
   {
      id: 1,
      amount: 100,
   },
   {
      id: 1,
      amount: 250,
   },
   {
      id: 1,
      amount: 500,
   },
]
export const Amount = () => {
   const [amount, setAmount] = useState(10);
   const [isActiveIndex, setIsActiveIndex] = useState(0);
   let navigate = useNavigate();
   const handleChangeAmount = (e) => {
      setAmount(e.target.value);
   }
   function handleClickAmount(amountValue, val) {
      setAmount(amountValue);
      setIsActiveIndex(val);
   }
   const handleProceed = () => {
      navigate('/payment')
   }
   return (
      <div>

         <div className='pageContainer' style={{height:'90vh'}}>
            <Breadcrumb
               title='Amount' />
            <div className='Amount-section'>
               <p style={{ fontWeight: '400' }}>Enter Amount</p>
               <div className='amount-input'>
                  <div className='rupee'>
                     ₹
                  </div>
                  <div className='rupee-input'>
                     <input
                        type="text"
                        value={amount}
                        onChange={handleChangeAmount}
                     />

                  </div>
               </div>
            </div>
            <div className='row'>
               {
                  data.map((item, index) => {
                     return (
                        <div className='col-4 '>
<<<<<<< HEAD
                           <div className='amount-box' style={isActiveIndex ===index ? { background: '#F85010' } : { background: '#fafafa' }} onClick={() => { handleClickAmount(item.amount, index) }}>
                              <h5 style={isActiveIndex ===index ? { color: '#fff' } : { color: '#322D2D' }}>₹{item.amount?.toLocaleString()}</h5>
=======
                           <div className='amount-box' style={isActiveIndex == index ? { background: '#F85010' } : { background: '#fafafa' }} onClick={() => { handleClickAmount(item.amount, index) }}>
                              <h5 style={isActiveIndex == index ? { color: '#fff' } : { color: '#322D2D' }}>₹{item.amount?.toLocaleString()}</h5>
>>>>>>> 5c32ecae3834b6aed6f9aad7e3d406103df3755e
                           </div>
                        </div>
                     )
                  })
               }
            </div>
            <div className='bottomAction'>
               <div className='bottomActionInner'>
                  <Link to="/payment" state={{ amount: amount }}>
                     <Buttons.PrimaryButton
                        value="Proceed"
                        style={{ width: '100%' }}
                     />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}
