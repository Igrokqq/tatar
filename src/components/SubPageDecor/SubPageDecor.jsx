import { useGSAP } from '@gsap/react';
import FramePlayer from '../FramePlayer/FramePlayer';
import './SubPageDecor.scss';
import gsap from 'gsap';
import { useRef } from 'react';
import { mainPageStore } from '../../stores/mainPageStore';
import { observer } from 'mobx-react-lite';

// playType = 'autoLoop' | 'fingerLoop' 

export default ({ frameCount, basePath, playType = 'autoLoop', loopFrame = 0, controllByScroll = false }) => {
    const scope = useRef(null)

    useGSAP(() => {
        gsap.fromTo(`.RealEstate_hero_decor`, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 1,
            delay: 1
        })
    }, { scope: scope })




    return (
        <div className='SubPageDecor' ref={scope}>

            <div className='RealEstate_hero_decor_fade RealEstate_hero_decor_fade_r free_img'>
                <div className='RealEstate_hero_decor_fade_inner'></div>
            </div>
            <div className='RealEstate_hero_decor free_img'>
                <FramePlayer
                    frameCount={frameCount}
                    basePath={basePath}
                    playType={playType}
                    loopFrame={loopFrame}
                    controllByScroll={controllByScroll}
                />
            </div>
            <div className='RealEstate_hero_decor_fade free_img'>
                <div className='RealEstate_hero_decor_fade_inner'></div>
            </div>
        </div>
    )
}