import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import Arrow from '../BreadCrumb/Assets/Arrow.png';
import { useNavigate } from 'react-router-dom';
let Index = ({ title, path }) => {
    const navigate = useNavigate();

    return (
        <div className='breadcumbs-main'>
            <img src={Arrow}
                onClick={() => navigate(-1)}
            />
            <h5>{title}</h5>
        </div>
    )
}
export default Index