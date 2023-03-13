import React from 'react';
import SignButton from '../Header/SignButton';
import Cross from '../../Assets/Icons/Cross';

const StarCodesForm = () => {
    return (
        <form method='post' noValidate>
            <p><span className='text-green'>* </span>Indicates required field</p>
            <div className='mx-[-0.8rem] px-[0.8rem] py-[12px] block relative z-0 overflow-hidden w-[600px] ml-[20px]'>
                <div className='bg-[#fff] rounded-[8px] shadow-[0_0_0_1px_rgba(0,0,0,.4)] py-[12px] px-[16px] relative transition-[border] duration-200 ease-linear delay-200 flex items-center'>
                    <label htmlFor="starCode" className='bg-[#fff] text-[#000000de] cursor-text absolute left-[12px] top-[50%] opacity-100 px-[0.4rem] transform-y-[-50%] transition-[color] duration-1 ease-in-out delay-[149] select-none z-[2]'>
                        <span>* </span> Enter your Star Code
                    </label>
                    <input type="text" name="StarCode" id="starCode" className='appearance-none bg-transparent border-0 text-[#000000de] block leading-4 p-0 w-full' />
                    <Cross />
                </div>
                <SignButton innerText={"Submit"}/>
            </div>
        </form>
    )
};

export default StarCodesForm;