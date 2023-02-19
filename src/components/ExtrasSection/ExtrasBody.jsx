import React from 'react';

const ExtrasBody = () => {
    return (
        <div className='flex gap-[48px] max-w-[1440px] px-[4rem]'>
            <div className='extra1 flex flex-col items-center gap-[24px] w-[33.33%]'>
                <div className='img-container'>
                    <img src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg" alt="Fun freebies" className='w-[112px]'/>
                </div>
                <div className='text-container flex flex-col items-center gap-[16px] min-w-[calc(100%-128px)]'>
                    <h3 className='text-[19px] font-semibold'>Fun freebies</h3>
                    <p className='text-[16px]'>Not only you can earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
                    <a href="/" className='text-dark-green underline hover:no-underline text-[16px]'>Learn more</a>
                </div>
            </div>
            <div className='extra2 flex flex-col items-center gap-[24px] w-[33.33%]'>
                <div className='img-container'>
                    <img src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" alt="Order and pay ahead" className='w-[112px]' />
                </div>
                <div className='text-container flex flex-col items-center gap-[16px] min-w-[calc(100%-128px)]'>
                    <h3 className='text-[19px] font-semibold'>Order and pay ahead</h3>
                    <p className='text-[16px]'>Enjoy the convenience of in-store curbside or drive-thru pickup at select stores.</p>
                    <a href="/" className='text-dark-green underline hover:no-underline text-[16px]'>Learn more</a>
                </div>
            </div>
            <div className='extra3 flex flex-col items-center gap-[24px] w-[33.33%]'>
                <div className='img-container'>
                    <img src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" alt="Get to free faster" className='w-[112px]' />
                </div>
                <div className='text-container flex flex-col items-center gap-[16px] min-w-[calc(100%-128px)]'>
                    <h3 className='text-[19px] font-semibold'>Get to free faster</h3>
                    <p className='text-[16px]'>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games</p>
                    <a href="/" className='text-dark-green underline hover:no-underline text-[16px]'>Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default ExtrasBody