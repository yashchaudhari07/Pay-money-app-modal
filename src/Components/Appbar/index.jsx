import React from 'react'
import './App.css';
import CircleImg from '../../Components/Appbar/Assets/circlelogo.png';
import LogoImg from '../../Components/Appbar/Assets/user.png';
import { Link } from 'react-router-dom';
let Index = ({ title, name ,path }) => {
    return (
        <div className='' >
            <div className=''>
                <div className='Head-container'>
                    <div className='left-container'>
                        <img src={CircleImg} width={55} />
                    </div>
                    <div className='side-section'>
                        <div className='Content'>
                            <h5>{title}</h5>
                            <h4>{name}</h4>
                        </div>
                        <div className='image-container'>
                            <Link to ={path}>
                            <img src={LogoImg} width={55} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Index