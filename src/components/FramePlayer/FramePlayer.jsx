import { observer } from 'mobx-react-lite';
import './FramePlayer.scss';
import { useEffect, useRef, useState } from 'react';
import { mainPageStore } from '../../stores/mainPageStore';

// playType = 'autoLoop' | 'fingerLoop' | 'triggerLoop' | 'endlessLoop'


const FramePlayer = ({ frameCount = 60, startFrame = 1, fps = 30, basePath = '/img/frames/', filePrefix = '', ext = 'webp', playType = 'autoLoop', loopFrame = 0, leaveTrigger = 0, enterTrigger = 0, withLight = false, controllByScroll = false, rounded = false, setcurrFrame = () => { }, startLoopTrigger = 0, setframesLoaded = () => { } }) => {
    const [current, setCurrent] = useState(0);
    const canPlay = useRef(null)
    const frames = useRef([]);
    const alTimeOut = useRef(null)
    const flTimeOut = useRef(null)
    const direction = useRef(null)
    const [loaded, setloaded] = useState(false);


    if (window.innerWidth < 700 && playType === 'fingerLoop') {
        playType = 'autoLoop'
    }


    // Предзагрузка
    useEffect(() => {
        direction.current = 1
        canPlay.current = false
        const promises = [];
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            const src = `${basePath}${filePrefix}${i}.${ext}`;
            img.src = src;
            frames.current[i] = img;
            promises.push(new Promise(res => { img.onload = res }));
        }
        Promise.all(promises).then(() => {
            setframesLoaded(true)
            setloaded(true)
            canPlay.current = true
            loopFrameEnd.current = false
            if (playType === 'autoLoop' && !controllByScroll) {
                loop()
            } else if (playType === 'endlessLoop') {
                endlessLoop()
            } else {
                setCurrent(startFrame);
            }

            if (controllByScroll) {
                mainPageStore.slidePlaying = false
                if (mainPageStore.currentSlide === -1) setCurrent(frameCount - 1)
            }
        });

        return () => {
            clearTimeout(alTimeOut.current)
        }
    }, []);

    const loopFrameEnd = useRef(null)
    const [loopFrameBlinker, setloopFrameBlinker] = useState(false);
    // loopFrame

    useEffect(() => {
        setCurrent(0)
    }, [startLoopTrigger])

    const endlessLoop = () => {
        setCurrent((prev) => {
            return (prev + 1) % frameCount
        });
        alTimeOut.current = setTimeout(() => {
            endlessLoop()
        }, 1000 / fps);
    }

    useEffect(() => {
        return () => {
            clearTimeout(alTimeOut.current)
        }
    }, [])

    const loop = () => {
        setCurrent((prev) => {
            if (prev + 1 > frameCount - 1) {
                if (loopFrame === -1) {
                    setloopFrameBlinker(true)
                    loopFrameEnd.current = true
                    return prev
                }
                direction.current = -1
            }
            if (prev - 1 < loopFrame) {
                direction.current = 1
            }
            return prev + direction.current
        });
        alTimeOut.current = setTimeout(() => {
            if (!loopFrameEnd.current) {
                loop()
            }
        }, 1000 / fps);
    };

    const startFingerPlay = () => {
        clearTimeout(flTimeOut.current)
        setCurrent((prev) => {
            setcurrFrame(Math.min(prev + 1, frameCount - 1))
            setboxShadow(prev / frameCount)
            return Math.min(prev + 1, frameCount - 1)
        });
        flTimeOut.current = setTimeout(() => {
            startFingerPlay()
        }, 1000 / fps);
    }

    const endFingerPlay = () => {
        clearTimeout(flTimeOut.current)
        setCurrent((prev) => {
            setcurrFrame(Math.max(prev - 1, 0))
            setboxShadow(prev / frameCount)
            return Math.max(prev - 1, 0)
        });
        flTimeOut.current = setTimeout(() => {
            endFingerPlay()
        }, 1000 / fps);
    }


    useEffect(() => {
        if (leaveTrigger) {
            endFingerPlay()
        }
    }, [leaveTrigger])
    useEffect(() => {
        if (enterTrigger) {
            startFingerPlay()
        }
    }, [enterTrigger])


    const [boxShadow, setboxShadow] = useState(0);



    // deprecated, nigde ne used
    // controllByScroll
    useEffect(() => {
        if (mainPageStore.currentSlide < 1) return
        if (!controllByScroll) return
        const keypoints = [0, 77, 163, frameCount]
        startHeroAnim(keypoints[mainPageStore.currentSlide])
        console.log(`Start hero anim ${mainPageStore.currentSlide}`);
    }, [mainPageStore.currentSlide])

    const startHeroAnim = (toFrame) => {
        clearTimeout(flTimeOut.current)
        let newFrame = 0
        setCurrent((prev) => {
            newFrame = prev + 1
            return Math.min(prev + 1, toFrame - 1)
        });
        if (newFrame >= toFrame - 1) {
            console.log(`End hero anim on frame ${newFrame}`);
            mainPageStore.slidePlaying = false
            if (toFrame === frameCount) mainPageStore.currentSlide = -1
            return
        }
        flTimeOut.current = setTimeout(() => {
            startHeroAnim(toFrame)
        }, 1000 / fps);
    }



    return (
        <>
            <img
                onPointerEnter={() => {
                    if (playType === 'autoLoop') return
                    console.log('enter');
                    startFingerPlay()
                }}
                onPointerLeave={() => {
                    if (playType === 'autoLoop') return
                    console.log('leave');
                    endFingerPlay()
                }}
                src={frames.current[current]?.src}
                style={{
                    opacity: `${loaded ? 1 : 0}`,
                    width: '100%',
                    objectFit: 'cover',
                    userDrag: 'none',
                    pointerEvents: playType === 'triggerLoop' ? 'none' : 'all',
                    boxShadow: `${withLight ? `0px 0px 45px #ffffff${toHexAlpha(boxShadow)}` : 'none'}`,
                }}
                draggable={false}
                className={`${loopFrameBlinker && 'frameBlinker'} ${rounded && 'framePlayerImg_rounded'} framePlayerImg`}
            />
        </>
    );
};

export default observer(FramePlayer);


function toHexAlpha(value) {
    const clamped = Math.max(0, Math.min(1, value));
    const intVal = Math.round(clamped * 255);
    return intVal.toString(16).padStart(2, '0');
}
