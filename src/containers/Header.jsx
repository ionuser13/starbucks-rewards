import React from 'react';
import StarLogo from '../components/starLogo';

const Header = () => {
    return (
        <header>
            <div className='upperHeader'>
                <StarLogo className="" />
            </div>
            <div className='stickyHeader'></div>
        </header>
    )
}
export default Header