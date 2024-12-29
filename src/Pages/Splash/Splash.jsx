import React from 'react'
import CircleImg from '../../Assets/circle.png.png';
export const Splash = () => {
    const myStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        background: "#F85010",
        height: '100vh',
    }
    const myImg = {
        margin:"auto",  
    }
    return ( 
        <div className='Container' style={myStyle}>
                <img src={CircleImg} style={myImg} />
        </div>
    );
}