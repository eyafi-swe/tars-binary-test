import React from 'react';

const Link = ({rout}) => {
    return (
        <div className='mx-2 lg:border-none lg:py-0 lg:mb-0 border-b mb-1 py-2 border-gray-500 '>
            <a href= {rout.path} className=' text-gray-300'>{rout.name}</a>
        </div>
    );
};

export default Link;