import React from 'react';
import CashTitle from '../../components/CashComponents/CashTitle';
import CashBody from '../../components/CashComponents/CashBody';

const CashContainer = () => {
    return (
        <div className='bg-cream p-[4.8rem]'>
            <CashTitle />
            <CashBody />
        </div>
    )
};

export default CashContainer;