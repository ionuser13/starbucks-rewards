import React from 'react';

const MenuOptions = () => {
    return (
        <div>
            <ul className='flex gap-x-6 tracking-widest uppercase font-bold py-10'>
                <li>
                    <a href="/" className='hover:text-green'>
                        Menu
                    </a>
                </li>
                <li>
                    <a href="/" className='hover:text-green'>
                        Rewards
                    </a>
                </li>
                <li>
                    <a href="/" className='hover:text-green'>
                        Gift Cards
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MenuOptions;