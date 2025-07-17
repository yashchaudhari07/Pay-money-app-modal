import React from 'react'
import { useState } from 'react'
import Breadcrumb from '../../Components/BreadCrumb/Index';
import Buttons from '../../Components/Buttons';
import Models from '../../Component1/Models';
import './Style.css';
import { Link, useLocation } from 'react-router-dom';
import Img1 from './Assets/img-1.png';
import Img2 from './Assets/img-2.png';
import Img3 from './Assets/img-3.png';
import Img4 from './Assets/img-4.png';
import Img5 from './Assets/img-5.png';
import Img6 from './Assets/img-6.png';
import Img7 from './Assets/img-7.png';
import Img8 from './Assets/img-8.png';
import Img9 from './Assets/img-9.png';
const data = [
  {
    id: 1,
    path: Img1,
    name: 'Net Banking',
    time: '10 min-5 hours',
  },
  {
    id: 2,
    path: Img2,
    name: 'UPI Transfer',
    time: '10 min-5 hours',
  },
  {
    id: 3,
    path: Img3,
    name: 'IMPS',
    time: 'Upto 10 minutes',
  },
  {
    id: 4,
    path: Img4,
    name: 'Debit Cards',
    time: 'Instantly',
  },
  {
    id: 5,
    path: Img5,
    name: 'New PayTM',
    time: 'Upto 10 minutes',
  },
  {
    id: 6,
    path: Img6,
    name: 'Bank Transfer',
    time: 'Upto 10 minutes',
  },
  {
    id: 7,
    path: Img7,
    name: 'Google Pay',
    time: 'Upto 10 minutes',
  },
  {
    id: 8,
    path: Img8,
    name: 'Phone Pe',
    time: 'Upto 10 minutes',
  },
  {
    id: 9,
    path: Img9,
    name: 'BHIM',
    time: 'Upto 10 minutes',
  }
]

export const Payment = () => {
  let {state} = useLocation();  
  console.log(state)
  const [isActiveIndex, setIsActiveIndex] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  function handleClickText(val) {
    setIsActiveIndex(val);
 }
 const handleCloseModal = () =>{
  setIsOpenModal(false);
}
const handlePayNow= () => {
  setIsOpenModal(true);
}
  return (
    <div>
      <Breadcrumb
        title='Payment Method'
        path='/amount'
      />
      <div className='pageContainer'>
        <div className='Main-section'>
          <div className='Amount-container'>
            <h5>Amount:</h5>
            <h4>₹ {state?.amount || 0}</h4>
          </div>
        </div>
        <div className=' row'>
          {
            data.map((item, index) => {
              return (
                <div className=' col-6'  >
                  <div className='payment-method-box' style={isActiveIndex === index ? { background: '#F85010' } : { background: '#fafafa' }} onClick={() => { handleClickText(index) }}>
                    <div className='main-container'>
                      <img src={item.path} />
                    </div>
                    <div className='text-section' style={isActiveIndex === index ? { color: '#fff' } : { color: '#322D2D' }}>
                      <h5>{item.name}</h5>
                      <h6>{item.time}</h6>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='bottomAction' style={{position:'relative'}}>
          <div className='bottomActionInner'>
            <Buttons.PrimaryButton
              value="Pay Now" onClick={handlePayNow}
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
      {isOpenModal &&
        <>
          {
              <Models.SuccessModel
                title='Successfull!'
                description='Add fund successfully completed, you can check now.'
                handleClose={handleCloseModal}
                path='/home'
              />
          }
          </>
        }
    </div>
  )
}
