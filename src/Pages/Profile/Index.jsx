import React from 'react'
import Breadcrumb from '../../Components/BreadCrumb/Index';
import Circle from './Assets/logo.png';
import Img1 from './Assets/password/vuesax/linear/vuesax/linear/password-check.png';
import Img2 from './Assets/photo/vuesax/linear/vuesax/linear/user-edit.png';
import Img3 from './Assets/photo1/vuesax/linear/vuesax/linear/bank.png';
import Img4 from './Assets/photo2/vuesax/linear/vuesax/linear/profile.png';
import Buttons from '../../Components/Buttons';
import './Style.css';
export const Profile = () => {
    return (
        <div >
            <div className='pageContainer' style={{height:'97vh'}}>
                <Breadcrumb
                    title='Profile' 
                />
                <div className='profile-image'>
                    <img src={Circle} />
                </div>
                <div className='name-section'>
                    <h4>Yash Chaudhari</h4>
<<<<<<< HEAD
                    <h6>98908277@gamapay.com</h6>
=======
                    <h6>yc98908277@gmail.com</h6>
>>>>>>> 5c32ecae3834b6aed6f9aad7e3d406103df3755e
                </div>
                <div className='bank-section'>
                    <h5>Bank Details</h5>
                    <button>Add new</button>
                </div>
                <div className='details-grid'>
                    <img src={Img1} />
                    <input
                        type='number'
                        placeholder='Enter Number' />
                </div>
                <div className='Account-grid'>
                    <img src={Img2} />
                    <input
                        type='number'
                        placeholder='Account Number' />
                </div>
                <div className='Bankname-section'>
                    <img src={Img3} />
                    <input
                        type='text'
                        placeholder='Bank Name' />
                </div>
                <div className='Accountname-grid'>
                    <img src={Img4} />
                    <input
                        type='text'
                        placeholder='Account holder name' />
                </div>
                <div className='bottomAction'>
                    <div className='bottomActionInner'>
                        <Buttons.PrimaryButton
                            value="Submit"
                            style={{ width: '100%',marginTop:'30px' }}
                        />
                    </div>
                </div>
            </div>


        </div>
    )
}
