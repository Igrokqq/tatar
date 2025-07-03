import { useEffect, useRef, useState } from 'react';
import './SectorsElement.scss';

const bgConfig = {
    'Digital': {
        path: 'sectorsSequences/Digital.webp',
        w: 500,
        h: 281,
        frames: 96,
        framesPerRow: 8,
        shW: 4000,
        shH: 3372
    },
    'Energy': {
        path: 'sectorsSequences/Energy.webp',
        w: 500,
        h: 283,
        frames: 90,
        framesPerRow: 8,
        shW: 4000,
        shH: 3396
    },
    'Green': {
        path: 'sectorsSequences/Green.webp',
        w: 500,
        h: 276,
        frames: 103,
        framesPerRow: 8,
        shW: 4000,
        shH: 3588
    },
    'RealEstate': {
        path: 'sectorsSequences/RealEstate.webp',
        w: 500,
        h: 277,
        frames: 70,
        framesPerRow: 8,
        shW: 4000,
        shH: 2493
    },
    'Telecom': {
        path: 'sectorsSequences/Telecom.webp',
        w: 500,
        h: 264,
        frames: 97,
        framesPerRow: 8,
        shW: 4000,
        shH: 3432
    },
    'Water': {
        path: 'sectorsSequences/Water.webp',
        w: 500,
        h: 283,
        frames: 95,
        framesPerRow: 8,
        shW: 4000,
        shH: 3396
    },
};
const fps = 30;

export default ({ size, seq, title, text }) => {
    const sectorDiv = useRef(null)
    const xScale = useRef(null);
    const yScale = useRef(null);
    const frameW = useRef(null);
    const frameH = useRef(null);
    const frameRef = useRef(null);
    const [backgroundW, setbackgroundW] = useState(0);
    const [backgroundH, setbackgroundH] = useState(0);
    const mouseInArea = useRef(null)

    const handleResize = () => {
        const div = sectorDiv.current.getBoundingClientRect();

        let bgW = bgConfig[seq].shW
        xScale.current = div.width / bgConfig[seq].w
        frameW.current = bgConfig[seq].w * xScale.current
        setbackgroundW(bgW * xScale.current)

        let bgH = bgConfig[seq].shH
        yScale.current = div.height / bgConfig[seq].h
        frameH.current = bgConfig[seq].h * yScale.current
        setbackgroundH(bgH * yScale.current)
    };

    // useEffect(() => {
    //     handleResize()
    // }, [scale])

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const [frameX, setframeX] = useState(0);
    const [frameY, setframeY] = useState(0);

    const [showPreview, setshowPreview] = useState(true);

    const timer = useRef(null);
    useEffect(() => {
        mouseInArea.current = false
        frameRef.current = 0;
        const runFrame = () => {
            if (mouseInArea.current) {
                frameRef.current = Math.min(bgConfig[seq].frames - 1, frameRef.current + 1)
            } else {
                frameRef.current = Math.max(0, frameRef.current - 1)
            }

            setshowPreview(frameRef.current === 0)

            const frameXLocal = -frameW.current * (frameRef.current % bgConfig[seq].framesPerRow);
            const frameYLocal = -frameH.current * Math.floor(frameRef.current / bgConfig[seq].framesPerRow)

            // console.log(`${mouseInArea.current} frame: ${frameRef.current} x: ${frameXLocal} y: ${frameYLocal}`);

            setframeX(frameXLocal)
            setframeY(frameYLocal)

            timer.current = setTimeout(() => { runFrame() }, 1000 / fps);
        }

        runFrame()

        return () => {
            clearTimeout(timer.current)
        }
    }, [])



    return (
        <div className={`SectorsElement SectorsElement_${size}`} style={{
            backgroundImage: `url('${bgConfig[seq].path}')`,
            backgroundSize: `${backgroundW}px ${backgroundH}px`,
            backgroundPosition: `${frameX}px ${frameY}px`,
        }}
            ref={sectorDiv}
            onMouseEnter={() => { mouseInArea.current = true }}
            onMouseLeave={() => { mouseInArea.current = false }}
        >
            {/* {!['Energy222', 'RealEstate', 'Water2'].includes(seq) && */}
            {/* <img src={`/preview${bgConfig[seq].path}`} alt="" style={{
                opacity: showPreview ? 1 : 0
            }} /> */}
            {/* } */}
            <div className='SectorsElement_text'>
                <div className='SectorsElement_text_title'>
                    {title}
                </div>
                <div className='SectorsElement_text_text'>
                    {text}
                </div>
                <div className='SectorsElement_text_btn'>
                    <a href="#">More</a>
                </div>
            </div>
        </div>
    )
}