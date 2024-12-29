import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Screen1 } from "./Component1/Screen1";
import { Screen2 } from "./Component1/Screen2";
import { Header } from './Components/Header';
import { Splash } from './Pages/Splash/Splash';
import { LoginPage } from './Pages/Login/Index';
import { OTP } from './Pages/Otp/OTP';
import { Home } from "./Pages/Home/Home";
import { Amount } from "./Pages/Amount/Amount";
import {Payment} from './Pages/Payment/Index';
import { Main } from "./Components/Main";
import { Bill} from './Pages/Bills/Bill';
import { Transaction } from "./Pages/Transaction/Transaction";
import { Notification } from "./Pages/Notification/Notification";
import { Support} from './Pages/Support/Support';
import { Profile } from './Pages/Profile/Index';
function App() {
  const [isOpenSplash , setIsOpenSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsOpenSplash(false);
    }, 2000);
  }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={isOpenSplash ? <Splash /> : <LoginPage />} />
          <Route path="otp" element={<OTP/>}/>
          <Route path="home"element={<Home/>}/>
          <Route path="amount" element={<Amount/>}/>
          <Route path="payment" element={<Payment/>}/>
          <Route path="screen1" element={<Screen1/>}/>
          <Route path="screen2" element={<Screen2/>}/>
          <Route path="main" element={<Main/>}/>
          <Route path="bill" element={<Bill/>}/>
          <Route path="transaction" element={<Transaction/>}/>
          <Route path="notification" element={<Notification/>}/>
          <Route path="support" element={<Support/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
