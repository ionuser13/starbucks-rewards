import React from 'react';
import FindStore from '../../components/Header/FindStore';
import JoinButton from '../../components/Header/JoinButton';
import MenuOptionsMobile from '../../components/Header/MenuOptionsMobile';
import SignButton from '../../components/Header/SignButton';

const MobileMenuContainer = () => {
    return (
        <div className='absolute bg-white'>
            <MenuOptionsMobile />
            <hr aria-hidden="true" className="my-[3.2rem]" />
            <div className='flex'>
                <SignButton />
                <JoinButton />
            </div>
            <div>
                <FindStore />
            </div>
        </div>
    )
}

export default MobileMenuContainer