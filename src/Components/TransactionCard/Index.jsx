import React from 'react'
import './Style.css';
export const TransactionCard = ({ cardData }) => {
  return (
    <div className=''>
      <div className='Card-section' style={cardData.status == "Failed" ? { border: ' 1px solid #FCB69C', background: '#FFF8F5' } : cardData.status == "Success" ? { border: " 1px solid #AEEADD", background: "#F7FDFC" } : { border: " 1px solid #FFE999", background: '#FFFDF5' }} >
        <div className='result-section'>
          <div className='order-id'>
            <h4>Order ID</h4>
            <h6>{cardData.orderid}</h6>
          </div>
          <div className='card-amount'>
            <h5 style={cardData.status == "Success" ? { color: 'green' } : cardData.status == "Pending" ? { color: '#FFC700' } : { color: 'red' }}> ₹{cardData.amount}</h5>
            <h6>{cardData.date}</h6>
          </div>
        </div>
        <div className='result-section'>
          <div className='order-id'>
            <h5>Request type</h5>
            <h6>{cardData.requesttype}</h6>
          </div>
          <div className='order-id'>
            <h5>Mode</h5>
            <h6>{cardData.mode}</h6>
          </div>
        </div>

        <div className='status-section' style={cardData.status == "Success" ? { background: 'green' } : cardData.status == "Pending" ? { background: '#FFC700' } : { background: 'red' }}>
          {
            cardData.status == 'Success' ?
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 7L14.6093 13.4688C12.4732 16.0322 11.4051 17.3139 10 17.3139C8.59488 17.3139 7.52681 16.0322 5.39067 13.4688L4 11.8" stroke="white" stroke-width="2" stroke-linecap="round" />
              </svg>
              :
              cardData.status == 'Failed' ?
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 1L15 15M1.00003 15L8.00003 8L15 1" stroke="white" stroke-width="2" stroke-linecap="round" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15.24 2H8.76004C5.00004 2 4.71004 5.38 6.74004 7.22L17.26 16.78C19.29 18.62 19 22 15.24 22H8.76004C5.00004 22 4.71004 18.62 6.74004 16.78L17.26 7.22C19.29 5.38 19 2 15.24 2Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
          }

          <h5 >{cardData.status}</h5>
        </div>
      </div>
    </div>

  )
}
