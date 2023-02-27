import React from 'react';

const CashBodyOne = () => {
    return (
        <div className='OneDollar block m-0 p-0 text-[16px] text-left'>
            <div className='inline-block m-0 p-0 relative text-left align-top w-full'>
                <p className='font-semibold text-[24px]'>1 <span aria-hidden="true" class="color-black text-sm">★</span> per dollar</p>
                <p>Pay as you go</p>
            </div>
            <div className='inline-block w-[33.33%] relative text-left align-top px-[24px]'>
                <div className='flex gap-[16px] scan'>
                    <div className='flex max-w-[128px] shrink-0 relative text-left align-top'>
                        <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" alt="Scan and pay separately" className='w-full h-auto' width={112}/>
                    </div>
                    <div>
                        <h3 className='text-[19px] font-semibold'>Scan and pay separately</h3>
                        <p className='pt-[16px]'>Use cash or credit/debit card at the register.</p>
                    </div>
                </div>
            </div>
            <div className='inline-block w-[33.33%] relative text-left align-top px-[24px]'>
                <div className='save flex gap-[16px]'>
                    <div className='flex max-w-[128px] shrink-0'>
                        <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" alt="Save payment in the app" className='w-full h-auto' width={112} />
                    </div>
                    <div>
                        <h3 className='text-[19px] font-semibold'>Save payment in the app</h3>
                        <p className='pt-[16px]'>Check-out faster by saving a credit/debit card or PayPal to your account. You&#8217;ll be able to order ahead or scan and pay at the register in one step.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CashBodyOne;