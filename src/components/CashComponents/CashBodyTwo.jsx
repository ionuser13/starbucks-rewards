import React from 'react';

const CashBodyTwo = () => {
    return (
        <div className='supremeCashContainer text-[16px] text-left'>
            <div className='TwoDollar block'>
                <div className='inline-block w-[16.667%] relative text-left align-top'>
                    <p className='font-semibold text-[24px]'>2 <span aria-hidden="true" class="color-black text-sm">★</span> per dollar</p>
                    <p>Add funds in the app</p>
                </div>
                <div className='inline-block w-[33.33%] relative text-left align-top px-[24px]'>
                    <div className='flex gap-[16px] scan'>
                        <div className='flex max-w-[128px] shrink-0 relative text-left align-top'>
                            <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png" alt="Preload" className='w-full h-auto' width={112}/>
                        </div>
                        <div>
                            <p className='text-[19px] font-semibold'>Preload</p>
                            <p>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
                        </div>
                    </div>
                </div>
                <div className='inline-block w-[33.33%] relative text-left align-top px-[24px]'>
                    <div className='save flex gap-[16px]'>
                        <div className='flex max-w-[128px] shrink-0'>
                            <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png" alt="Register your gift card" className='w-full h-auto' width={112} />
                        </div>
                        <div>
                            <p className='text-[19px] font-semibold'>Register your gift card</p>
                            <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CashBodyTwo;