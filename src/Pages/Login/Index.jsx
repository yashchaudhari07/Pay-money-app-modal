import React from 'react'
import './Login.css';
import Img1 from './assets/img1.png';
import flag from './assets/flag.png';
import Buttons from "../../Components/Buttons";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [MobileNumber, setMobileNumber] = useState("")
  const [MobileNumberValid, setMobileNumberValid] = useState(false)
  let navigate = useNavigate();

  const handleChangeMobileNumber = (e) => {
    setMobileNumber(e.target.value)
    if (e.target.value.length == 10) {
      setMobileNumberValid(true)
    } else {
      setMobileNumberValid(false)
    }
  }

  const handleLogin = () => {
    if (MobileNumber.length > 10) {
      alert('Mobile is to much long');
    } else if (MobileNumber.length < 10) {
      alert('Mobile.no 10 digits required');
    } else {
      navigate('/otp');
    }
  }
  return (
    <div className='pageContainer' style={{height:'95vh'}}> 
      <div style={{ textAlign: 'center',paddingTop:'45px' }}>
        <img src={Img1} style={{ margin: 'auto' }} />
      </div>
      <div className='group-section pt-3'>
        <h4 >Welcome</h4>
        <p>Login into your account with your phone number.</p>
      </div>
      <div className='grid-section'>
        <div className='custom-field pt-4'>
          <lable style={{ fontWeight: '600' }}>Mobile Number</lable>
          <div className='mobilefield' style={{ marginTop: '10px' }}>
            <img src={flag} />
            <input type='number' placeholder='Enter Mobile Number'
              onChange={handleChangeMobileNumber} />
          </div>  
        </div>
      </div>

      <div className='bottomAction'>
        <div className='bottomActionInner'>
          <Buttons.PrimaryButton
            value="Login"
            onClick={handleLogin}
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}
