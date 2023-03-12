import React from 'react';
import FindStore from '../../components/Header/FindStore';
import JoinButton from '../../components/Header/JoinButton';
import MenuOptionsMobile from '../../components/Header/MenuOptionsMobile';
import SignButton from '../../components/Header/SignButton';

const MobileMenuContainer = () => {
    return (
        <div>
            <MenuOptionsMobile />
            <hr aria-hidden="true" className="mt-[1.6rem] mb-[3.2rem] mx-[3.2rem]" />
            <div className='inline-block px-[2.4rem]'>
                <div className='ml-auto text-[1.4rem] shrink-0'>
                    <SignButton innerText={"Sign In"} />
                    <JoinButton innerText={"Join now"} />    
                    <div className='block text-center pr-[0.8rem] mt-[1.6rem]'>
                        <FindStore />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenuContainer

