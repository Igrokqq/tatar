import './BlockWithText.scss';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default ({ title, text, text2, bot }) => {
    const blockRef = useRef(null);

    useEffect(() => {
        const direction = 0
        gsap.fromTo(
        blockRef.current,
        {
            x: direction,
            opacity: 0,
        },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
            trigger: blockRef.current,
            start: 'top 67%',
            },
        }
        );
    }, []);

    return (
    <div className={`BlockWithText ${bot && 'BlockWithText_bot'}`} ref={blockRef}>
        <div className={`BlockWithText_content ${bot && 'BlockWithText_content_bot'}`}>
            <div className='BlockWithText_content_title'>
                {title}
            </div>
            <div className={`BlockWithText_content_text ${bot && 'BlockWithText_content_text_bot'}`}>
                {text}
            </div>
            {
                text2 && <div className='BlockWithText_content_text'>
                    {text2}
                </div>
            }
        </div>
    </div>
)}