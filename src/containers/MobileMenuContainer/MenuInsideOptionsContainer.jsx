import React from 'react';
import Arrow from "../../Assets/Icons/Arrow";
import MenuItem from '../../components/Header/MenuItem';

const MenuInsideOptionsContainer = () => {
  return (
    <ul className='absolute top-0 left-0 w-full block'>
        <li>
            <button className='relative text-center bg-[#f9f9f9] py-[1.6rem] px-[3.2rem] w-full block text-[1.9rem] no-underline' style={{boxShadow: "inset 0 4px 5px -3px rgba(0,0,0,.2);"}}>
                <div className='absolute left-[24px] top-[16px] h-[24px] w-[24px] align-middle rotate-90'>
                    <Arrow />
                </div>
                <span>Menu</span>
            </button>
        </li>
        <li>
            <MenuItem link={"https://www.starbucks.com/menu"} innerText={"All products"}/>
        </li>
        <li>
            <MenuItem link={"https://www.starbucks.com/menu/featured/"} innerText={"Featured"}/>
        </li>
        <li>
            <MenuItem link={"https://www.starbucks.com/menu/previous"} innerText={"Previous"}/>
        </li>
        <li>
            <MenuItem link={"https://www.starbucks.com/menu/favorites"} innerText={"Favorites"}/>
        </li>
    </ul>
  )
}

export default MenuInsideOptionsContainer