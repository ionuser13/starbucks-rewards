import React from 'react';
import FavTitle from '../../components/FavoritesComponents/FavTitle';
import FavProduct from '../../components/FavoritesComponents/FavProduct';

const FavoritesContainer = () => {
    return (
        <div className='mb-[72px] md:mb-[128px]'>
            <div className='text-center bg-light-green-op px-0 pt-[4.8rem] md:px-[2.4rem] lg:px-[4rem]'>
                <div className='px-[1.6rem]'>
                    <FavTitle />
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default FavoritesContainer