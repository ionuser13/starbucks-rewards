import React from 'react';

const FindStore = () => {
    return (
        <a href="/" className='flex gap-x-2 items-center hover:text-green'>
            <i class="fa-solid fa-location-dot h-[21px] scale-125 w-[32px]"></i>
            <p className='font-semibold text-sm'>Find a store</p>
        </a>
    )
}

export default FindStore