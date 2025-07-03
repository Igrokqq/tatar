import { useGSAP } from '@gsap/react';
import './SubPageDecor.scss';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { mainPageStore } from '../../stores/mainPageStore';
import { observer } from 'mobx-react-lite';

export default observer(({ path, pathEndPhoto, pathLoop }) => {
    const scope = useRef(null)

    // useGSAP(() => {
    //     gsap.fromTo(`.RealEstate_hero_decor_vid`, {
    //         opacity: 0
    //     }, {
    //         opacity: 1,
    //         duration: 1,
    //         delay: 1
    //     })
    // }, { scope: scope })


    const videoRef = useRef(null);




    useEffect(() => {
        const video = videoRef.current;
        const handleTimeUpdate = () => {
            console.log(`time: ${video.currentTime}`);

            // let keypoints = [2.5, 8.13]
            let keypoints = [7.5]
            if (window.innerWidth < 900) {
                keypoints = [0, 2.01, 6.19, 12.8]
            }


            if (video.currentTime >= keypoints[mainPageStore.currentSlide]) {
                console.log('pause');
                video.pause();
                mainPageStore.slidePlaying = false
                if (mainPageStore.currentSlide === 0) mainPageStore.currentSlide = -1
            }
        };
        video.addEventListener('timeupdate', handleTimeUpdate);
        return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }, []);



    useEffect(() => {
        const video = videoRef.current;
        if (mainPageStore.currentSlide < 1) return
        console.log(`Start hero anim ${mainPageStore.currentSlide}`);
        video.play();

    }, [mainPageStore.currentSlide])



    const videoLoopRef = useRef(null)
    useEffect(() => {
        const video = videoLoopRef.current;
        if (mainPageStore.currentSlide === -1) {
            video.play();
        }

    }, [mainPageStore.currentSlide])



    useEffect(() => {
        const video = document.createElement('video');
        video.src = pathLoop;
        video.preload = 'auto';
        video.load(); // Начать загрузку
    }, [pathLoop]);





    return (
        <div className='SubPageDecor' ref={scope}>

            {/* <div className='RealEstate_hero_decor_fade RealEstate_hero_decor_fade_r free_img'>
                <div className='RealEstate_hero_decor_fade_inner'></div>
            </div> */}
            <div className='RealEstate_hero_decor RealEstate_hero_decor_vid free_img' style={{
                // opacity: mainPageStore.currentSlide !== -1 ? 1 : 0
            }}>
                <video src={path}
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                />
            </div>

            {
                mainPageStore.currentSlide === -1 && <div className='RealEstate_hero_decor RealEstate_hero_decor_vid free_img' style={{
                    opacity: `${mainPageStore.currentSlide === -1 ? 1 : 0} !important`
                }}>
                    <video src={pathLoop}
                        ref={videoLoopRef}
                        muted
                        loop
                        playsInline
                    />
                </div>
            }
            {/* <div className='RealEstate_hero_decor free_img' style={{
                opacity: mainPageStore.currentSlide !== -1 ? 0 : 1
            }}>
                <img src={pathEndPhoto} alt="" />
            </div> */}
            {/* <div className='RealEstate_hero_decor_fade free_img'>
                <div className='RealEstate_hero_decor_fade_inner'></div>
            </div> */}
        </div>
    )
})