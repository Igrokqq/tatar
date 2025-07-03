import './BlockWithLines.scss';

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
    <div className={`BlockWithLines ${left && 'BlockWithLines_left'}`}  ref={blockRef}>
        <div className={`BlockWithLines_content gradienBlock ${left && 'BlockWithLines_content_left'}`}>
            <div className='BlockWithLines_content_title'>
                {title}
            </div>
            <div className={`BlockWithLines_content_text ${left && 'BlockWithLines_content_text_left'}`}>
                {text}
            </div>
            {
                text2 && <div className='BlockWithLines_content_text'>
                    {text2}
                </div>
            }
        </div>
    </div>
)}