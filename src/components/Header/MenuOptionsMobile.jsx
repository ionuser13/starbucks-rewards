import React from 'react';
import Arrow from "../../Assets/Icons/Arrow"

const MenuOptionsMobile = () => {
    return (
        <div className='shrink-0'>
            <ul className='tracking-widest'>
                <li>
                    <button className='py-[1.6rem] px-[3.2rem] text-[1.9rem] decoration-none flex flex flex-row-reverse justify-between w-full md:text-[2.4rem]'>
                        <div className='relative w-[24px] h-[24px] rotate-[270deg]'>
                            <Arrow />
                        </div>
                        <span>Menu</span>
                    </button>
                </li>
                <li>
                    <a href="/" className='text-left block py-[1.6rem] px-[3.2rem] w-full text-[1.9rem] decoration-none md:text-[2.4rem]'>
                        Rewards
                    </a>
                </li>
                <li>
                    <a href="/" className='text-left block py-[1.6rem] px-[3.2rem] w-full text-[1.9rem] decoration-none md:text-[2.4rem]'>
                        Gift Cards
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MenuOptionsMobile