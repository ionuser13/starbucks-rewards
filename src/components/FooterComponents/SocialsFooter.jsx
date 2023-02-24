import React from 'react';
import Spotify from '../Icons/Spotify';
import Facebook from '../Icons/Facebook';
import Pinterest from '../Icons/Pinterest';
import Instagram from '../Icons/Instagram';
import Youtube from '../Icons/Youtube';
import Twitter from '../Icons/Twitter';

const SocialsFooter = () => {
    return (
        <ul className='flex ml-[-5px] list-none'>
            <li>
                <a href="/" className='min-w-[44px] min-h-[44px] transition-all duration-200 ease-out relative inline-block'>
                    <Spotify />
                </a>
            </li>
            <li>
                <a href="/" className='min-w-[44px] min-h-[44px] transition-all duration-200 ease-out relative inline-block'>
                    <Facebook />
                </a>
            </li>
            <li>
                <a href="/" className='min-w-[44px] min-h-[44px] transition-all duration-200 ease-out relative inline-block'>
                    <Pinterest />
                </a>
            </li>
            <li>
                <a href="/" className='min-w-[44px] min-h-[44px] transition-all duration-200 ease-out relative inline-block'>
                    <Instagram />
                </a>
            </li>
            <li>
                <a href="/" className='min-w-[44px] min-h-[44px] transition-all duration-200 ease-out relative inline-block'>
                    <Youtube />
                </a>
            </li>
            <li>
                <a href="/" className='min-w-[44px] min-h-[44px] transition-all duration-200 ease-out relative inline-block'>
                    <Twitter />
                </a>
            </li>
            
        </ul>
    )
};

export default SocialsFooter