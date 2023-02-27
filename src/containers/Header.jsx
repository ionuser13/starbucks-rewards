import React from 'react';
import StarLogo from '../Assets/Icons/starLogo';
import MenuOptions from '../components/Header/MenuOptions';
import FindStore from '../components/Header/FindStore';
import SignButton from '../components/Header/SignButton';
import JoinButton from '../components/Header/JoinButton';
import "../styles/upperHeader.css";

const Header = () => {
    return (
        <header className='relative z-[2] upperHeader'>
            <div className='px-[1.6rem] md:px-[2.4rem] lg:px-[4rem] min-[1520px]:mx-[auto] min-[1520px]:max-w-[1440px] min-[1520px]:px-[0] min-[1520px]:relative'>
                <div className='flex items-center'>
                    <div className="mr-[1.6rem] my-[1.6rem] md:my-0 md:mr-[2.4rem] lg:mr-[4rem] w-[32px] h-[32px] min-[375px]:w-[40px] min-[375px]:h-[40px] md:w-[51px] md:h-[51px] min-[1702px]:absolute min-[1702px]:right-[100%] min-[1702px]:top-[50%] min-[1702px]:translate-y-[-50%]">
                        <StarLogo />
                    </div>
                    <div className='hidden md:flex md:items-center grow'>
                        <MenuOptions />
                        <div className='rightPart flex items-center ml-auto gap-x-[4.8rem] shrink-0 text-[1.4rem]'>
                            <FindStore />
                            <div className='flex gap-[16px] items-center'>
                                <SignButton innerText={"Sign In"}/>
                                <JoinButton innerText={"Join now"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header