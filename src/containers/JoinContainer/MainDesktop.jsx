import React from 'react';
import MainDesktopContent from '../../components/JoinSection/MainDesktopContent';

const MainDesktop = () => {
    return (
        <div className='bg-desktop bg-light-green bg-[50%] bg-[length:auto_100%] bg-no-repeat w-full flex text-left'>
            <div className='pb-[56.25%]'></div>
            <MainDesktopContent />
        </div>
    )
}

export default MainDesktop;