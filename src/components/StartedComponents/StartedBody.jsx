import React from 'react';

const StartedBody = () => {
    return (
        <div className='flex gap-[48px] max-w-[1440px] px-[4rem]'>
            <div className='step1 flex flex-col items-center gap-[24px] w-[33.33%]'>
                <div className='img-container'>
                    <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg" alt="step one to get started on Starbucks Rewards" className='w-[48px]'/>
                </div>
                <div className='text-container flex flex-col items-center gap-[16px] min-w-[calc(100%-128px)]'>
                    <h3 className='text-[19px] font-semibold'>Create an account</h3>
                    <p className='text-[16px]' >To get started, <a href='/' className='text-green underline hover:no-underline'>join now</a>. You can also <a href='/' className='text-green underline hover:no-underline'>join in the app</a> to get access to the full range of Starbucks® Rewards benefits.</p>    
                </div> 
            </div>
            <div className="step2 flex flex-col items-center gap-[24px] w-[33.33%]">
                <div className='img-container'>
                    <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg" alt="step two to get started on Starbucks Rewards" className='w-[48px]' />
                </div>
                <div className='text-container flex flex-col items-center gap-[16px] min-w-[calc(100%-128px)]'>
                    <h3 className='text-[19px] font-semibold'>Order and pay how you'd like</h3>
                    <p className='text-[16px]'>Use cash, credit/debit card or save some time and pay right through the app. You'll collect Stars all ways. <a href="/" className='text-green underline hover:no-underline'>Learn how</a></p>
                </div>
            </div>
            <div className='step3 flex flex-col items-center gap-[24px] w-[33.33%]'>
                <div className='img-container'>
                    <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg" alt="step two to get started on Starbucks Rewards" className='w-[48px]' />
                </div>
                <div className='text-container flex flex-col items-center gap-[16px] min-w-[calc(100%-128px)]'>
                    <h3 className='text-[19px] font-semibold'>Earn Stars, get Rewards</h3>
                    <p className='text-[16px]'>As you earn Stars, you can redeem them for Rewards &#8212; like free food, drinks and more. Start redeeming with as little as 25 Stars!</p>
                </div>
            </div>
        </div>
    )
};

export default StartedBody;