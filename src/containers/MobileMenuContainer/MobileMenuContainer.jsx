import React from 'react';
import FindStore from '../../components/Header/FindStore';
import JoinButton from '../../components/Header/JoinButton';
import MenuOptionsMobile from '../../components/Header/MenuOptionsMobile';
import SignButton from '../../components/Header/SignButton';

const MobileMenuContainer = () => {
    return (
        <div className='bg-[#fff] block pt-[3.2rem] left-[20vw] overflow-auto fixed right-0 w-[80vw] bottom-auto top-[64px] h-[calc(100%-64px)] min-[375px]:h-[calc(100%-72px)] min-[375px]:top-[72px] md:h-[calc(100%-83px)] md:top-[100px] text-left' style={{boxShadow: "inset 0 4px 3px -3px rgb(0 0 0 / 10%), inset 0 4px 2px -2px rgb(0 0 0 / 7%)",}}>
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
        </div>
    )
}

export default MobileMenuContainer