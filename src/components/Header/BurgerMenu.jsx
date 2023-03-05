import React from 'react';
import MenuOptionsMobile from './MenuOptionsMobile';
import "../../styles/Toggle.css"

const BurgerMenu = () => {
    return (
        <div className='absolute top-0 bottom-0 right-0 left-0 mx-[1.6rem] md:mx-[2.4rem]'>
            <div className='absolute top-[50%] translate-y-[-50%]'>
                <input type="checkbox" className='openSidebarMenu' id='openSidebarMenu' />
                <label htmlFor="openSidebarMenu" className='sidebarIconToggle'>
                    <div className="spinner diagonal part-1"></div>
                    <div className="spinner horizontal"></div>
                    <div className="spinner diagonal part-2"></div>
                </label>
                <div id="sideBarMenu">
                    
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu