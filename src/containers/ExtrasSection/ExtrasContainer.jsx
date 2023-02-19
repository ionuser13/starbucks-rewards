import React from 'react';
import ExtrasBody from '../../components/ExtrasSection/ExtrasBody';
import ExtrasTitle from '../../components/ExtrasSection/ExtrasTitle';

const ExtrasContainer = () => {
    return (
        <div className='px-[4rem] mb-[128px]'>
           <div className='w-full flex flex-col items-center gap-[48px]'>
                <ExtrasTitle />
                <ExtrasBody />
           </div>
        </div>
    )
}

export default ExtrasContainer;