import React from 'react';
import StartedTitle from '../../components/StartedSection/StartedTitle';
import StartedBody from '../../components/StartedSection/StartedBody';

const StartedSection = () => {
    return (
        <div className='startedSection flex flex-col items-center gap-[48px] px-[48px] mb-[128px]'>
            <StartedTitle />
            <StartedBody />
        </div>
    )
}

export default StartedSection