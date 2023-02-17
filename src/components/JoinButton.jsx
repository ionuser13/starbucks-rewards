import React from 'react';

const JoinButton = ({innerText, bgColor = "black"}, borColor = "black") => {
    
    return (
        <button className={`button join-now border-solid border-[1px] rounded-[50px] px-[16px] py-[7px] h-max font-semibold text-sm text-[white] hover:bg-black hover:opacity-70 transition duration-200 ease-in-out`} style={{backgroundColor: bgColor, borderColor: borColor}}>{innerText}</button>
    )
}


export default JoinButton