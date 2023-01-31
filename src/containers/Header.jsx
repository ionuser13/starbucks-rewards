import React from 'react';
import StarLogo from '../components/starLogo';
import MenuOptions from '../components/MenuOptions';
import FindStore from '../components/FindStore';
import ButtonsSection from '../components/Buttons';
import LowerHeader from '../components/LowerHeader';

const Header = () => {
    return (
        <header>
            <div className='upperHeader'>
                <div className='leftPart'>
                    <StarLogo />
                    <MenuOptions />
                </div>
                <div className='rightPart'>
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