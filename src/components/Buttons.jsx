import React from 'react';

const ButtonsSection = () => {
    return (
        <div className='flex gap-[16px] items-center'>
            <button className='button border-solid border-[1px] border-[black] rounded-[50px] px-[16px] py-[7px] h-max font-semibold text-sm'>Sign in</button>
            <button className='button join-now border-solid border-[1px] border-[black] rounded-[50px] px-[16px] py-[7px] h-max font-semibold text-sm bg-[black] text-[white]'>Join now</button>
        </div>
    )
}

export default ButtonsSection;