import React from 'react';
import SignButton from '../Header/SignButton';

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
                    <svg aria-hidden="true" class="valign-middle color-red flex-shrink-none" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{width: "24px", height: "24px", overflow: "visible", fill: "currentcolor"}}><path d="M9.1005 3H14.8995C15.4299 3 15.9386 3.21071 16.3137 3.58579L20.4142 7.68629C20.7893 8.06136 21 8.57007 21 9.1005L21 14.8995C21 15.4299 20.7893 15.9386 20.4142 16.3137L16.3137 20.4142C15.9386 20.7893 15.4299 21 14.8995 21H9.10051C8.57007 21 8.06136 20.7893 7.68629 20.4142L3.58579 16.3137C3.21071 15.9386 3 15.4299 3 14.8995V9.10051C3 8.57007 3.21071 8.06136 3.58579 7.68629L7.68629 3.58579C8.06136 3.21071 8.57007 3 9.1005 3ZM16.7071 7.29289C16.3166 6.90237 15.6834 6.90237 15.2929 7.29289L12 10.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L10.5858 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071C7.68342 17.0976 8.31658 17.0976 8.70711 16.7071L12 13.4142L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L13.4142 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289Z"></path></svg>
                </div>
                <SignButton innerText={"Submit"}/>
            </div>
        </form>
    )
};

export default StarCodesForm;