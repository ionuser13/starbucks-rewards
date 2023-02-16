import React from 'react';
import "../styles/lowerHeader.css"

const LowerHeader = () => {
    return (
        <div className='lowerHeader flex items-center bg-dark-green h-[50px] sticky'>
            <h1 className='tracking-widest uppercase pl-[131px] font-bold text-white text-sm'>Starbucks® Rewards</h1>
            <a className='hidden' href="/">Join in the app</a>
        </div>
    )
}

export default LowerHeader