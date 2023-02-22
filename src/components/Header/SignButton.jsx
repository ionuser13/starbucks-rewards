import React from 'react';

const SignButton = ({innerText}) => {
    return <button className='button border-solid border-[1px] border-[black] rounded-[50px] px-[16px] py-[7px] h-max font-semibold text-sm hover:bg-white hover:opacity-60 transition duration-200 ease-in-out'>{innerText}</button>
}

export default SignButton;