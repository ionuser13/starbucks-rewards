import React from 'react';

const ButtonsSection = () => {
    return (
        <div className='flex gap-[16px] items-center'>
            <button className='button border-solid border-[1px] border-[black] rounded-[50px] px-[16px] py-[7px] h-max font-semibold text-sm hover:bg-white hover:opacity-60 transition duration-200 ease-in-out'>Sign in</button>
            <button className='button join-now border-solid border-[1px] border-[black] rounded-[50px] px-[16px] py-[7px] h-max font-semibold text-sm bg-[black] text-[white] hover:bg-black hover:opacity-70 transition duration-200 ease-in-out'>Join now</button>
        </div>
    )
}

export default ButtonsSection;