import React from 'react'
import Appbar from '../../Components/Appbar/index';
import { Navbar } from '../../Components/Navbar';
import linkimg from './Assets/chat-link.svg';
import navigation from './Assets/Navigation.png';
import { useState } from 'react'
import './Style.css';
const chat = [
    {
        type: 'sender',
        message: 'Hey',
        time: '10.00 pm',
        seen: 'true',
    },
    {
        type: 'receiver',
        message: 'Hello',
        time: '10.03 pm',
        seen: 'false',
    },
]


export const Support = () => {
    const [chatList, setChatList] = useState(chat)
    const [Message, setMessage] = useState("")
    const newObj = {
        type: 'receiver',
        message: Message,
        time: '10.04 pm',
        seen: 'false',
    }
    const handleChangeMessage = (e) => {
        setMessage(e.target.value)
    }
    const sendChat = () => {
        chat.push(newObj);
        setChatList(chat);
        setMessage("");
        console.log(chat);
    }
    return (
        <div>
            <div className='pageContainer'>
                <Appbar
                    title='Supports'
                    path ='/profile' />
                <div className='chat-main'>
                    <div className='date-section'>
                        <h6>Today, 10:23 am</h6>
                    </div>
                    <div className='chat-section'>
                        {
                            chatList.map((item) => {
                                return (
                                    <div style={item.type == 'sender' ? { display: 'flex', justifyContent: "left"} : { display: 'flex', justifyContent: "right" }}>
                                        <div className='chat-container' style={item.type == 'sender' ? { borderBottomLeftRadius: '0px', background: '#F85010', } : { borderBottomRightRadius: '0px',background:'#FEEDE6' }}>
                                            <div className='support-section' >
                                                <span  style={item.type == 'sender' ?  {color:'#fff'} : {color:"#322D2D"}}>{item.message}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='chat-action'>
                        <img src={linkimg} />
                        <input
                            type='text'
                            placeholder='Type Message'
                            onChange={handleChangeMessage}
                            value={Message}
                        />
                        <div className='btn-section' onClick={sendChat}>
                            <img src={navigation} />
                        </div>
                    </div>
                </div>
                <Navbar />
            </div>
        </div>
    )
}
