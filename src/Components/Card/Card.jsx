import React from 'react'
import { Link } from 'react-router-dom';
import Icon from './Assets/user.png';
import './Style.css';
let Card = ({data}) => {
   console.log('props data check ==>', data);
    return (
        <div className='pageContainer'>
            <div className='card-section'>
                <div className='card-container'>
                    <div className='image-container'>
                        <img src={Icon} />
                    </div>
                    <div className='text'>
                        <h5>Name: {data?.name}</h5>
                        <h5>Age:  {data?.age}</h5>
                    </div>
                </div>
                <div className='button-section'>
                    <Link to={data?.path}>
                    <button>Proceed</button>
                    </Link>
                    <Link to="/screen2" state={{ Student: data }}>
                    <button>View Profile</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Card