import React from 'react'
import './Models.css';
import Buttons from '../Components/Buttons';
import SuccessIcon from '../Component1/Assets/success.png';
import FailedIcon from '../Component1/Assets/failed.png';
import { Link } from 'react-router-dom';

let SuccessModel = ({ title, description, handleClose, path }) => {
    return (
        <div className='modalMain'>
            <div className='modalCard'>
                <div className='text-center mt-3'>
                    <img src={SuccessIcon} width={120} className='m-auto' />
                </div>
                <div className='modalContent'>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div className='text-center mt-4 mb-2'>
                    <Link to={path}>
                        <Buttons.PrimaryButton
                            onClick={handleClose}
                            value="Go Home" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
let FailedModel = ({ title, description, handleClose }) => {
    return (
        <div className='modalMain'>
            <div className='modalCard'>
                <div className='text-center mt-3'>
                    <img src={FailedIcon} width={120} className='m-auto' />
                </div>
                <div className='modalContent'>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div className='text-center mt-4 mb-2'>
                    <Buttons.PrimaryButton
                        onClick={handleClose}
                        value="Go Back" />
                </div>
            </div>
        </div>
    )
}
let Models = { SuccessModel, FailedModel }
export default Models