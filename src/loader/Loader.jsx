import React from 'react';

const Loader = () => {
    return (
        <div className='container z-10 mx-auto p-12 flex flex-col items-center justify-center'>
            <span className='loading loading-dots loading-lg'></span>
        </div>
    );
};

export default Loader;