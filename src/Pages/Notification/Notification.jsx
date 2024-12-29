import React from 'react'
import Appbar from '../../Components/Appbar/index';
import { Navbar } from '../../Components/Navbar';
import './Style.css';
import Logo1 from './Assets/photo1.png';
import Logo2 from './Assets/photo2.png';
import Logo3 from './Assets/photo3.png';
import Logo4 from './Assets/photo4.png';


const data = [
    {
        img: Logo1,
        description: "On the other hand, we denounce with righteous indignation.",
        time: '02:02 PM',
        date: '29/1/24',
    },
    {
        img: Logo2,
        description: "Dislike men who are so beguiled and demoralized by the charms..",
        time: '02:02 PM',
        date: '29/1/24',
    },
    {
        img: Logo3,
        description: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45.',
        time: '02:02 PM',
        date: '28/1/24',
    },
    {
        img: Logo4,
        description: '1914 translation by H. Rackham translation by H. Halim.',
        time: '02:02 PM',
        date: '28/1/24',

    },

]
export const Notification = () => {
    return (
        <div>
            <div className='pageContainer'>
                <Appbar
                    title='Notification'
                    path='/profile' />
                <div className=''>
                    {
                        data.map((item, index) => {
                            return (
                                <div className='Section-box'>
                                    {
                                        index == 0 && item.date === '29/1/24' &&
                                        <div className='today-section'>
                                            <h4>Today</h4>
                                        </div>
                                    }
                                    {
                                        index == 2 && item.date !== '29/1/24' &&
                                        <div className='today-section'>
                                            <h4>Yesterday</h4>
                                        </div>
                                    }
                                    <div className='notification-container'>
                                        <div className='description-section'>
                                            <img src={item.img} />
                                        </div>
                                        <div className='notification-grid'>
                                            <h5>{item.description}</h5>
                                            <h6>{item.time} || {item.date}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Navbar />
            </div>
        </div>
    )
}
