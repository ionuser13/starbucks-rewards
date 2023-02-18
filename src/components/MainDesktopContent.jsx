import React from 'react';
import JoinButton from './JoinButton';

const MainDesktopContent = () => {
    return (
        <div className='h-full'>
            <h2 className='text-4xl font-semibold leading-tight'>FREE COFFEE <br /> IS A TAP AWAY </h2>
            <div>
                <p className='text-[19px]'>Join now to start earning Rewards.</p>
                <div className='buttonContainer'>
                    <JoinButton innerText={"Join now"} bgColor={"#008248"} borColor={"#008248"}/>   
                </div>
                <div className='text-[1.9rem]'>
                    <p>Or
                        <a href='/'> join the app </a>
                    for the best experience</p>
                </div>
            </div>
        </div>
    )
}

export default MainDesktopContent;