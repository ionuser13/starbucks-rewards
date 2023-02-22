import React from 'react';

const QuestionContainer = () => {
    return (
        <div className='px-[4rem] max-w-[1440px] mb-[128px]'>
            <div>
                <div className='w-[50%] ml-[16.67%] text-left'>
                    <h2 className='font-semibold text-[2.8rem] leading-[1.385] pb-[1.6rem]'>Questions?</h2>
                    <p className='pb-[1.6rem] text-[16px]'>We want to help in anyway we can. You can ask your barista anytime or we've answered the most commonly asked questions&nbsp; 
                        <a href='/' target={'_blank'} className='text-green inline-flex underline hover:no-underline'> 
                            <span>right over here</span>
                            <svg aria-hidden="true" className="align-middle" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{width: "24px", height: "24px", overflow: "visible", fill: "currentcolor"}}><path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path></svg>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default QuestionContainer;