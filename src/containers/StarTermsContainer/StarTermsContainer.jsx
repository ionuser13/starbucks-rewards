import React from 'react';
import Restrictions from '../../components/StarTermsComponents/Restrictions';
import EarningStars from '../../components/StarTermsComponents/EarningStars';
import Benefits from '../../components/StarTermsComponents/Benefits';
import TermsOfUse from '../../components/StarTermsComponents/TermsOfUse';
import ReedemingRewards from '../../components/StarTermsComponents/RedeemingRewards';

const StarTermsContainer = () => {
    return (
        <div className='mb-[4.8rem]'>
            <div className='bg-[#f9f9f9]'>
                <div className='px-[4rem] py-[4.8rem] max-w-[1440px] mx-auto block text-left'>
                    <Restrictions />
                    <EarningStars />
                    <TermsOfUse />
                    <Benefits />
                    <ReedemingRewards />
                </div>
            </div>
        </div>
    )
};

export default StarTermsContainer;