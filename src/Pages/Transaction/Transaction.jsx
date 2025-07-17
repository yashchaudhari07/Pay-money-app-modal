import React, { useState } from 'react'
import Appbar from '../../Components/Appbar/index';
import './Style.css';
import { TransactionCard } from '../../Components/TransactionCard/Index';
import { Navbar } from '../../Components/Navbar';

const data = [
    {
        orderid: '5efde2sdef5e6e8',
        amount: '-745.45',
        date: '28 Jan 2024 | 10:00 am',
        requesttype: 'Deposit',
        mode: 'UPI',
        status: 'Failed',
    },
    {
        orderid: '5efde2sdef5e6e8',
        amount: '+641.57',
        date: '28 Jan 2024 | 10:00 am',
        requesttype: 'Withdraw',
        mode: 'Bank Transfer',
        status: 'Success',
    },
    {
        orderid: '5efde2sdef5e6e8',
        amount: '-400.57',
        date: '28 Jan 2024 | 10:00 am',
        requesttype: 'Deposit',
        mode: 'UPI',
        status: 'Pending',
    },
]

export const Transaction = () => {
    const [txnData, setTxnData] = useState(data);
    const [filterBy, setFilterBy] = useState('All');
    console.log('filter By ==> ', filterBy)

    function handleFilter(value) {
        setFilterBy(value)
        if (value === "All") {
            setTxnData(data);
        } else {
            const result = data.filter((item) => item.status === value);
            setTxnData(result);
        }

    }
    return (
        <div>
            <div className='pageContainer'>
                <Appbar
                    title='Transactions' 
                    path='/profile'
                    />
                <div className='transaction-button'>
                    <button onClick={() => { handleFilter("All") }}>All</button>
                    <button onClick={() => { handleFilter("Failed") }}>Failed</button>
                    <button onClick={() => { handleFilter("Success") }}>Approved</button>
                    <button onClick={() => { handleFilter("Pending") }}>Pending</button>
                </div>
                <div style={{paddingBottom:"100px"}}>
                {
                    txnData?.map((item) => {
                        return (
                            <TransactionCard cardData={item} />
                        )
                    })
                }
                </div>
            </div>
            <Navbar />
        </div>
    )
}
