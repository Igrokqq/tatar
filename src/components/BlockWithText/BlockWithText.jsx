import './BlockWithText.scss';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default ({ title, text, text2, left, index }) => {
    
    const blockRef = useRef(null);

    useEffect(() => {
        const direction = index % 2 === 0 ? -200 : 200;

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
            start: 'top 70%',
            },
        }
        );
    }, []);
    
    return (
    <div className={`BlockWithText ${left && 'BlockWithText_left'}`}  ref={blockRef}>
        <div className={`BlockWithText_content ${left && 'BlockWithText_content_left'}`}>
            <div className='BlockWithText_content_title'>
                {title}
            </div>
            <div className={`BlockWithText_content_text ${left && 'BlockWithText_content_text_left'}`}>
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