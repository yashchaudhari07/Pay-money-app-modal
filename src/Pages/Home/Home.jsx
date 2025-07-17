import React from 'react'
import './Home.css';
import CircleImg from '../Home/Assets/circlelogo.png';
import LogoImg from '../Home/Assets/Rectangle 8 (1).png';
import RectangleImg from '../Home/Assets/box.png';
import { ReactComponent as Icon1 } from './Assets/Logo.svg';
import { ReactComponent as Icon2 } from './Assets/Icon.svg';
import { ReactComponent as Icon3 } from './Assets/Bicon.svg';
import { Navbar } from '../../Components/Navbar';
import { Link } from 'react-router-dom';
const data = [
    {
        id: 1,
        name: 'Credited',

        date: '24 Dec 2023',

        date: '24 March 2024',
 
        amount: 30000,
        Svg: Icon1,
    },
    {
        id: 2,
        name: 'UPI',

        date: '25 Jan 2024',

        date: '25 june 2024',
 
        amount: 40000,
        Svg: Icon2,
    },
    {
        id: 3,
        name: 'Deposited',

        date: '26 Feb 2024',

        date: '26 Sep 2024',
 
        amount: 50000,
        Svg: Icon3,
    }
]

export const Home = () => {
    return (
        <div className='' style={{ paddingBottom: '60px' }}>
            <div className='pageContainer'>
                <div className='Head-container'>
                    <div className='left-container'>
                        <img src={CircleImg} width={55} />
                    </div>
                    <div className='side-section'>
                        <div className='Content'>
                            <h5>Welcome</h5>

                            <h4>YASH.C</h4>

                            <h4>YASH CHAUDHARI</h4>
 
                        </div>
                        <div className='image-container'>
                            <Link to='/profile'>
                                <img src={LogoImg} width={55} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='homeCard'>
                <div className='homeCard-bg'>
                    <img src={RectangleImg} />
                </div>
                <div className='homeCardContent'>
                    <div>
                        <h6 className='m-0'>Balance</h6>
                        <h3 className='m-0 '>₹ 30,000</h3>
                        <Link to='/amount'>
                            <button>Add fund</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='pageContainer'>
                <div className='custom-field'>
                    <div className='custom-area'>
                        <h5 className='mb-1'>Transactions</h5>
                    </div>
                    {
                        data.map((item, index) => {
                            return (
                                <div className={'box-section'} key={index}>
                                    <div className='main'>
                                        <item.Svg />
                                    </div>
                                    <div className='header'>
                                        <div className='text-content'>
                                            <h5>{item.name}</h5>
                                            <h3>{item.date}</h3>
                                        </div>
                                        <div className='payment'>
                                            <h4>₹{item.amount?.toLocaleString()}</h4>
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
