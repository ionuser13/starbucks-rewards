import React from 'react';

const CashBody = () => {
    return (
        <div className='supremeCashContainer text-[16px] text-left'>
            <div className='OneDollar block'>
                <div className='inline-block w-[16.667%] relative text-left align-top'>
                    <p className='font-semibold text-[24px]'>1 <span aria-hidden="true" class="color-black text-sm">★</span> per dollar</p>
                    <p>Pay as you go</p>
                </div>
                <div className='inline-block w-[41.66667%] relative text-left align-top'>
                    <div className='flex gap-[16px] scan'>
                        <div className='flex max-w-[128px] shrink-0 relative text-left align-top'>
                            <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" alt="Scan and pay separately" className='w-full h-auto' width={112}/>
                        </div>
                        <div>
                            <p className='text-[19px] font-semibold'>Scan and pay separately</p>
                            <p>Use cash or credit/debit card at the register.</p>
                        </div>
                    </div>
                </div>
                <div className='inline-block w-[41.66667%] relative text-left align-top'>
                    <div className='save flex gap-[16px]'>
                        <div className='flex max-w-[128px] shrink-0'>
                            <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" alt="Save payment in the app" className='w-full h-auto' width={112} />
                        </div>
                        <div>
                            <p className='text-[19px] font-semibold'>Save payment in the app</p>
                            <p>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='TwoDollars'></div>
        </div>
    )
}

export default CashBody;