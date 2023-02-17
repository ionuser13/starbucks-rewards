import React from 'react';
import JoinButton from './JoinButton';

const MainDesktopContent = () => {
    return (
        <div>
            <h2>FREE COFFEE <br />IS A TAP AWAY</h2>
            <div>
                <p>Join now to start earning Rewards.</p>
                <div className='buttonContainer'>
                    <JoinButton innerText={"Join now"} bgColor={"#008248"} borColor={"#008248"}/>   
                </div>
                <div className='text'>

                </div>
            </div>
        </div>
    )
}

export default MainDesktopContent;