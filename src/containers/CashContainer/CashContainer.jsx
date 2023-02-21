import React from 'react';
import CashTitle from '../../components/CashComponents/CashTitle';
import CashBodyOne from '../../components/CashComponents/CashBodyOne';
import CashBodyTwo from '../../components/CashComponents/CashBodyTwo';

const CashContainer = () => {
    return (
        <div className='bg-cream p-[4.8rem]'>
            <CashTitle />
            <CashBodyOne />
            <hr className='pb-[4.8rem] pt-[2.4rem]'/>
            <CashBodyTwo />
        </div>
    )
};

export default CashContainer;