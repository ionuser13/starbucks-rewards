import React from 'react';
import StarLogo from '../components/starLogo';
import MenuOptions from '../components/MenuOptions';
import FindStore from '../components/FindStore';
import ButtonsSection from '../components/Buttons';
import LowerHeader from '../components/LowerHeader';
import "../styles/upperHeader.css";

const Header = () => {
    return (
        <header className='flex flex-col'>
            <div className='upperHeader flex flex-row align-center px-10'>
                <div className='leftPart flex items-center gap-x-10'>
                    <StarLogo/>
                    <MenuOptions />
                </div>
                <div className='rightPart flex items-center ml-auto gap-x-12'>
                    <FindStore />
                    <ButtonsSection />
                </div>
            </div>
            <div className='stickyHeader'>
                <LowerHeader />
            </div>
        </header>
    )
}
export default Header