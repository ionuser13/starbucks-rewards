import React from 'react';
import StarLogo from '../components/starLogo';
import MenuOptions from '../components/MenuOptions';
import FindStore from '../components/FindStore';
import SignButton from '../components/SignButton';
import JoinButton from '../components/JoinButton';
import LowerHeader from '../components/LowerHeader';
import "../styles/upperHeader.css";

const Header = () => {
    return (
        <header className='flex flex-col'>
            <div className='upperHeader flex flex-row align-center px-[4rem]'>
                <div className='leftPart flex items-center gap-x-[4rem]'>
                    <StarLogo/>
                    <MenuOptions />
                </div>
                <div className='rightPart flex items-center ml-auto gap-x-[4.8rem]'>
                    <FindStore />
                    <div className='flex gap-[16px] items-center'>
                        <SignButton innerText={"Sign In"}/>
                        <JoinButton innerText={"Join now"}/>
                     </div>
                </div>
            </div>
            <div className='stickyHeader'>
                <LowerHeader />
            </div>
        </header>
    )
}
export default Header