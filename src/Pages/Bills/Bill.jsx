import React from 'react'
 
import Appbar from '../../Components/Appbar/index';
import { Navbar } from '../../Components/Navbar';
import './Style.css';
import Img1 from './Assets/Img1.png';
import Img2 from './Assets/Img2.png';
import Img3 from './Assets/Img3.png';
import Img4 from './Assets/Img4/vuesax/bold/vuesax/bold/send-2.png';
import Img from './Assets/Img.png';
import Img6 from './Assets/Newfigma (15)/vuesax/bold/vuesax/bold/menu.png';

const data = [
  {
    id: 1,
    path: Img1,
    name: 'Mobile Recharge',
  },
  {
    id: 2,
    path: Img2,
    name: 'Book a Cylinder',
  },
  {
    id: 3,
    path: Img3,
    name: 'DTH Recharge',
  },
  {
    id: 4,
    path: Img4,
    name: 'Send Money',
  },
  {
    id: 5,
    path: Img,
    name: 'Electricity Bill',
  },
  {
    id: 6,
    path: Img6,
    name: 'More',
  },

]
export const Bill = () => {
  return (
    <div>
      <div className='pageContainer'>

       <Appbar
        title='Utility Bills'
          path='/profile'
       />

        <Appbar
          title='Utility Bills'
          path='/profile' />
 
        <div className='row mt-5'>
          {
            data.map((item) => {
              return (
                <div className='col-4'>
                  <div className='bill-section mb-4'>
                    <div className='logo-grid d-flex justify-content-center align-items-center'>
                      <img src={item.path} />
                    </div>
                    <div className='Recharge-section mt-2'>
                      <h6 className='text-center'>{item.name}</h6>
                    </div>
                  </div>
                </div>

              )
            })
          }
        </div>
      </div>
      <Navbar />
    </div>
  )
}
