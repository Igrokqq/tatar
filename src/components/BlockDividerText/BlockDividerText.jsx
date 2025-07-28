import './BlockDividerText.scss';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { themeStore } from "../../stores/themeStore.js";

gsap.registerPlugin(ScrollTrigger)

export default ({ title, text, text2, left, center, index, className }) => {

    return (
    <div className={`BlockDividerText ${className} ${!themeStore.isLight && 'BlockDividerText_light'}  BlockDividerText ${left && 'BlockDividerText_left'} ${left && 'BlockDividerText_center'}`}>
        <div className={`BlockDividerText_content ${left && 'BlockDividerText_content_left'} ${center && 'BlockDividerText_content_center'}`}>
            <div className='BlockDividerText_content_title'>
                {title}
            </div>
            <div className={`BlockDividerText_content_text ${left && 'BlockDividerText_content_text_left'} ${center && 'BlockDividerText_content_text_center'}`}>
                {text}
            </div>
            {
                text2 && <div className='BlockDividerText_content_text'>
                    {text2}
                </div>
            }
        </div>
    </div>
)}