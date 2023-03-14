import React, { useState } from 'react';
import Cross from '../../Assets/Icons/Cross';
import SimpleCross from '../../Assets/Icons/SimpleCross';

const StarCodesForm = () => {
    const [selected, setSelected] = useState(false);
    const handleSelected = () => {
        setSelected(!selected)
    }
    return (
        <form method='post' noValidate>
            <p className='text-[1.4rem]'><span className='text-green'>* </span>Indicates required field</p>
            <div className='overflow-hidden relative block z-0 mx-[-1.6rem] px-[1.6rem] py-[12px] md:mx-[-0.8rem] md:px-[0.8rem]'>
                <div className='bg-[#fff] rounded-[8px] py-[12px] px-[16px] relative flex items-center' style={{transition: "border .2 linear .2", boxShadow: "0 0 0 1px rgba(0,0,0,.4)"}}>
                    <label htmlFor="starCode" className={selected ? "bg-[#fff] text-[#000000de] cursor-text text-[1.4rem] left-[12px] opacity-100 px-[0.4rem] absolute transform-y-[-50%] select-none z-[2] form-label md:text-[1.4rem] top-[-28%] transition-all  ease-in duration-75" : "bg-[#fff] text-[#000000de] cursor-text text-[1.6rem] left-[12px] opacity-100 px-[0.4rem] top-[15%] absolute transform-y-[-50%] select-none z-[2] form-label md:text-[1.9rem] transition-all ease-in duration-75"}>
                        <span>* </span> Enter your Star Code
                    </label>
                    <input type="text" name="StarCode" id="starCode" className='appearance-none bg-transparent  text-[#000000de] block leading-4 p-0 w-full' onClick={handleSelected} style={{outline: "none"}}/>
                    <div className={selected ? "" : "hidden"}>
                        <Cross />
                    </div> 
                </div>
            </div>
            <div className='pr-[1.6rem]'>
                <div>
                    <div aria-expanded={selected} className={"expandible relative"}>
                        <span className='block pt-[0.4rem]'>
                            <span className='flex relative text-[1.3rem] md:text-[1.4rem]'>
                                <SimpleCross />
                                <span className='inline-block pl-[20px] align-middle'>
                                    <span>
                                        <span className='border-none h-[1px] overflow-hidden p-0 absolute w-[1px]'>Error:</span>
                                        Please enter a Star Code.
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <button className="ml-auto button mt-[0.8rem] block border-solid border-[1px] border-[black] rounded-[50px] px-[16px] py-[7px] h-max font-semibold text-sm hover:bg-white hover:opacity-60 transition-all duration-200 ease-in-out text-center no-underline">
            Submit
            </button>
        </form>
    )
};

export default StarCodesForm;