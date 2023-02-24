import React from 'react';
import CashTitle from '../../components/CashComponents/CashTitle';
import CashBodyOne from '../../components/CashComponents/CashBodyOne';
import CashBodyTwo from '../../components/CashComponents/CashBodyTwo';

const CashContainer = () => {
    return (
        <div className='bg-cream p-[4.8rem] mb-[128px]'>
            <CashTitle />
            <CashBodyOne />
            <hr className='mb-[4.8rem] mt-[2.4rem]'/>
            <CashBodyTwo />
        </div>
    )
};

export default CashContainer;