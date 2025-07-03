import { useEffect, useRef, useState } from "react";
import FramePlayer from "../FramePlayer/FramePlayer"
import SectorsElement from "../Sectors/SectorsElement"

const framesCountLines = 90

export default ({ index, el, hovered }) => {

    const [enterTrigger, setenterTrigger] = useState(0);
    const [leaveTrigger, setleaveTrigger] = useState(0);
    const [startLoopTrigger, setstartLoopTrigger] = useState(0);

    const showLoopTO = useRef(null)

    const [showLoop, setshowLoop] = useState(false);
    const [showStart, setshowStart] = useState(false);

    const [currFrame, setcurrFrame] = useState(0);

    // useEffect(() => {
    //     if (enterTrigger !== 0) {
    //         showLoopTO.current = setTimeout(() => {
    //             setshowLoop(true)
    //             setTimeout(() => {
    //                 setshowStart(true)
    //             }, 20);
    //         }, (1000 / 30) * (framesCountLines - 10));
    //     }
    //     return () => {
    //         clearTimeout(showLoopTO.current)
    //     }
    // }, [enterTrigger])

    // useEffect(() => {
    //     clearTimeout(showLoopTO.current)
    //     setshowStart(false)
    //     setTimeout(() => {
    //         setshowLoop(false)
    //     }, 20);
    // }, [leaveTrigger])

    useEffect(() => {
        if (currFrame === framesCountLines - 1) {
            setshowLoop(true)
            setshowStart(true)
            setstartLoopTrigger(Math.random())
        } else {
            clearTimeout(showLoopTO.current)
            setshowStart(false)
            setshowLoop(false)
        }

        return () => {
            clearTimeout(showLoopTO.current)
        }
    }, [currFrame])

    // const startLoop = ()=>{

    // }

    const [framesLoaded, setframesLoaded] = useState(false);

    return (
        <div className='Lines_element'
            onMouseEnter={() => {
                console.log('lines start');
                setenterTrigger(Math.random())
            }}
            onMouseLeave={() => {
                console.log('lines end');
                setleaveTrigger(Math.random())
            }}
            style={{
                filter: `brightness(${(hovered === -1) || (hovered === index) ? 1 : .5})`
            }}
        >

            {framesLoaded && window.innerWidth > 1000 && <>

                <div className={`Lines_decor Lines_decor_${index} free_img`} style={{
                    opacity: showStart ? 0 : 1
                }}>
                    <FramePlayer
                        frameCount={framesCountLines}
                        basePath={{
                            0: `Lines/leftTop/start/`,
                            1: `Lines/centerTop/start/`,
                            2: `Lines/rightTop/start/`,
                            3: `Lines/leftBot/start/`,
                            4: `Lines/centerBot/start/`,
                            5: `Lines/rightBot/start/`,
                        }[index]}
                        fps={45}
                        // startFrame={index === 1 ? 88 : 1}
                        // playType={ }
                        playType={'triggerLoop'}
                        enterTrigger={enterTrigger}
                        leaveTrigger={leaveTrigger}
                        setcurrFrame={setcurrFrame}
                    />
                </div>

                <div className={`Lines_decor Lines_decor_${index} free_img`} style={{
                    opacity: showLoop ? 1 : 0
                }}>
                    <FramePlayer
                        frameCount={90}
                        basePath={{
                            0: `Lines/leftTop/idle/`,
                            1: `Lines/centerTop/idle/`,
                            2: `Lines/rightTop/idle/`,
                            3: `Lines/leftBot/idle/`,
                            4: `Lines/centerBot/idle/`,
                            5: `Lines/rightBot/idle/`,
                        }[index]}
                        // startFrame={index === 1 ? 88 : 1}
                        fps={45}
                        // playType={ }
                        playType={'endlessLoop'}
                        startLoopTrigger={startLoopTrigger}
                    />
                </div>
            </>}
            <div className='Lines_content'>
                <SectorsElement
                    seq={el.seq}
                    title={el.title}
                    text={el.text}
                    href={el.href}
                    setframesLoaded={setframesLoaded}
                />
            </div>
        </div>
    )
}