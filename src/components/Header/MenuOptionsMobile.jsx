import React from 'react';
import Arrow from "../../Assets/Icons/Arrow"

const MenuOptionsMobile = () => {
    return (
        <div className='shrink-0'>
            <ul className='tracking-widest uppercase font-bold py-[4rem] text-sm'>
                <li>
                    <div href="/" className='flex'>
                        <span>Menu</span>
                        <div className=''>
                            <Arrow />
                        </div>
                    </div>
                </li>
                <li>
                    <a href="/" className=''>
                        Rewards
                    </a>
                </li>
                <li>
                    <a href="/" className=''>
                        Gift Cards
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MenuOptionsMobile