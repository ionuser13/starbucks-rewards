import React from 'react';
import JoinButton from './JoinButton';

const MainDesktopContent = () => {
    return (
        <div className='flex flex-col justify-center items-start px-[3.2rem] py-[4rem]'>
            <h2 className='text-4xl font-semibold leading-tight'>FREE COFFEE <br /> IS A TAP AWAY </h2>
            <div>
                <p className='text-[19px] mt-[1.6rem]'>Join now to start earning Rewards.</p>
                <div className='buttonContainer mt-[3.2rem]'>
                    <JoinButton innerText={"Join now"} bgColor={"#008248"} borColor={"#008248"}/>   
                </div>
                <div className='text-[1.9rem] mt-[1.6rem]'>
                    <p>Or&nbsp;
                        <a href='/' className='underline'>join the app</a>
                    &nbsp;for the best experience</p>
                </div>
            </div>
        </div>
    )
}

export default MainDesktopContent;