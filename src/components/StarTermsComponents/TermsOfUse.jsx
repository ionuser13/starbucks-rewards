import React from 'react';
import WindowLogo from '../../Assets/Icons/WindowLogo';

const TermsOfUse = () => {
    return (
        <div className='w-[50%] pb-[3.2rem] pl-[3.2rem] inline-block relative] text-left align-top'>
            <h2 className='uppercase tracking-widest font-bold text-[1.4rem] pb-[1.6rem] text-[#00000094]'>Terms Of Use</h2>
            <p className='text-[1.4rem] pb-[1.6rem]'>For full program details visit&nbsp; 
                <a href='/' target={'_blank'} className='text-green inline-flex underline hover:no-underline'> 
                    <span>starbucks.com/rewards/terms</span>
                    <WindowLogo />           
                </a>
            </p>
            <p className='text-[1.4rem] pb-[1.6rem]'>Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the&nbsp; 
                <a href='/' target={'_blank'} className='text-green inline-flex underline hover:no-underline'> 
                    <span>Starbucks Store Locator</span>
                    <WindowLogo />           
                </a>
            and search for locations honoring “Redeem Rewards”.</p>
            <p className='text-[1.4rem]'>Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC</p>
        </div>
    )
};

export default TermsOfUse;