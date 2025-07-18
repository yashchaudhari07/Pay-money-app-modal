import React from 'react'
import { Link } from 'react-router-dom';
import './OTP.css'
import ArrowImg from '../../Assets/Arrow left.png';
import Buttons from '../../Components/Buttons';
import Models from '../../Component1/Models';
import { useState } from "react";
import OTPInput from "otp-input-react";
export const OTP = () => {
  const [OTP, setOTP] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [otpIsVerified, setOtpIsVerified] = useState(false);

  const handleChangeOtp = (e) => {
    setOTP(e)
  }


  const handleDone = () => {
    if(OTP){
      if (OTP === '5678') {
        setOtpIsVerified(true);
        setIsOpenModal(true);
      }
      else {
        setOtpIsVerified(false);
        setIsOpenModal(true);
      }
    }else{
      setIsOpenModal(false);
      alert("OTP Is Required")
    }
   
  }
  const handleCloseModal = () =>{
    setIsOpenModal(false);
  }
  
  return (
    <>
      <div className='pageContainer' style={{height:'95vh'}}>
        <div className='container'>
          <div className='head-container'>
            <img src={ArrowImg} />
            <Link to='/' style={{ color: '#322D2D' }}>
              <b>Back</b>
            </Link>
          </div>
          <div className='gridBox'>
            <h2 >Enter OTP</h2>
            <p style={{ padding: 10 }}>Enter One Time Password (OTP) to enter the app.</p>
          </div>
          <div className='centerBox pt-3'>
            <>
              <OTPInput className='custom-otp-field' value={OTP} onChange={handleChangeOtp} autoFocus OTPLength={4} otpType="number" disabled={false} secure />
            </>
          </div>
        </div>
        <div className='bottomAction'>
          <div className='bottomActionInner'>
            <Buttons.PrimaryButton
              value="Done" onClick={handleDone}
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
      {isOpenModal &&
        <>
          {
            otpIsVerified ?
              <Models.SuccessModel
                title='OTP Is Verified'
                description='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                handleClose={handleCloseModal}
                path='/home'
              />
              
              :
              <Models.FailedModel
                title='OTP Is Not Verified'
                description='Lorem Ipsum is simply dummy text of the printing and typesetting industry'
                handleClose={handleCloseModal}
              />
          }
        </>
      }

    </>


  )
}
