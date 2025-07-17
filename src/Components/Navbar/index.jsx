import React from 'react'
import { useState } from 'react'
import './Style.css';
import { ReactComponent as Home } from "./Assets/home.svg";
import { ReactComponent as Receipt } from "./Assets/receipt-edit.svg";
import { ReactComponent as Calender } from "./Assets/calendar.svg";
import { ReactComponent as Bell } from "./Assets/notification-bing.svg";
import { ReactComponent as Message } from "./Assets/message-notif.svg";

import { NavLink } from 'react-router-dom';

export const Navbar = () => {

  return (
    <div className='Bottom-section' >
      <NavLink className={(navData) => (navData.isActive ? 'active' : 'NavLink')} to='/home'>
        <div className='NavItem' >
          {/* <img src={Home} /> */}
          <Home />
          <h6>Home</h6>
        </div>
      </NavLink>
      <NavLink className={(navData) => (navData.isActive ? 'active' : 'NavLink')} to='/bill'>
        <div className='NavItem' >
          <Receipt />
          <h6 >Utility Bills</h6>
        </div>
      </NavLink>
      <NavLink className={(navData) => (navData.isActive ? 'active' : 'NavLink')} to='/transaction'>
        <div className='NavItem'>
          <Calender />
          <h6>Transactions</h6>
        </div>
      </NavLink>
      <NavLink className={(navData) => (navData.isActive ? 'active' : 'NavLink')} to='/notification'>
        <div className='NavItem'>
          <Bell />
          <h6>Notifications</h6>
        </div>
      </NavLink>
      <NavLink className={(navData) => (navData.isActive ? 'active' : 'NavLink')} to='/support'>
        <div className='NavItem'>
          <Message />
          <h6>Support</h6>
        </div>
      </NavLink>
    </div>
  )
}
