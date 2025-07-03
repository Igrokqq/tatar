import './OurPeopleEl.scss';
import React, { forwardRef, useState } from 'react';

const OurPeopleEl = forwardRef(({ title, text, index, setopenMM }, ref) => {


    return (
        <>
            <div className='OurPeopleEl' ref={ref} onClick={() => (setopenMM(index))}>
                <div className='OurPeopleEl_left'>
                    <div className='OurPeopleEl_left_name fs_m fsw_m'>{title}</div>
                    <div className='OurPeopleEl_left_text fs_m fsw_s'>{text}</div>
                </div>
                <div className='OurPeopleEl_right'>
                    <img src="/img/arrow.svg" alt="" />
                </div>


            </div>

        </>
    );
});

export default OurPeopleEl;
