import React from 'react';
import WindowLogo from '../../Assets/Icons/WindowLogo';

const QuestionContainer = () => {
    return (
        <div className='px-[4rem] max-w-[1440px] mb-[128px]'>
            <div>
                <div className='w-[50%] ml-[16.67%] text-left'>
                    <h2 className='font-semibold text-[2.8rem] leading-[1.385] pb-[1.6rem]'>Questions?</h2>
                    <p className='pb-[1.6rem] text-[16px]'>We want to help in anyway we can. You can ask your barista anytime or we've answered the most commonly asked questions&nbsp; 
                        <a href='/' target={'_blank'} className='text-green inline-flex underline hover:no-underline'> 
                            <span>right over here</span>
                            <WindowLogo />           
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default QuestionContainer;