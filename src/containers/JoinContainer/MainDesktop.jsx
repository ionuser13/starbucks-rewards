import React from 'react';
import MainDesktopContent from '../../components/JoinComponents/MainDesktopContent';

const MainDesktop = () => {
    return (
        <div className='bg-desktop bg-light-green bg-[50%] bg-cover md:bg-[length:auto_100%] bg-no-repeat w-full flex text-left mb-[128px]'>
            <div>
                <div className='pb-[56.25%]'></div>
                <MainDesktopContent />
            </div>
        </div>
    )
}

export default MainDesktop;