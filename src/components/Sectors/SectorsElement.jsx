import { useEffect, useRef, useState } from 'react';
import './SectorsElement.scss';
import FramePlayer from '../FramePlayer/FramePlayer';
import { Link, useNavigate } from 'react-router-dom';

const config = {
    'Digital': {
        pathToFolder: 'sectorsSequences/DigitalNew/',
        frames: 96,
    },
    'Energy': {
        pathToFolder: 'sectorsSequences/Energy/',
        frames: 90,
    },
    'Green': {
        pathToFolder: 'sectorsSequences/Green/',
        frames: 103,
    },
    'RealEstate': {
        pathToFolder: 'sectorsSequences/RealEstate/',
        frames: 70,
    },
    'Telecom': {
        pathToFolder: 'sectorsSequences/Telecom/',
        frames: 97,
    },
    'Water': {
        pathToFolder: 'sectorsSequences/Water/',
        frames: 85,
    },
};

export default ({ seq, title, text, href, setcurrFrame = () => { }, setframesLoaded = () => { } }) => {
    const nav = useNavigate()

    const [currentFrame, setcurrentFrame] = useState(0);
    const [showPreview, setshowPreview] = useState(true);

    useEffect(() => {
        setcurrFrame(currentFrame)

        if (currentFrame === 0) {
            setshowPreview(true)
        } else {
            setshowPreview(false)
        }
    }, [currentFrame])


    return (
        <div className={`SectorsElement`} onClick={() => {
            nav(`/${href}`)
        }}>

            <div className={`SectorsElement_frameAndFade `}>
                <div className='SectorsElement_fade free_img'>
                    {/* <div className='SectorsElement_fade_inner'></div> */}
                </div>
                <div className='SectorsElement_content'>
                    {/* {seq === 'Digital' &&
                        <div className='SectorsElement_preview free_img'>
                            <img src={`/sectorsSequences/Digital/60.webp`} alt="" style={{
                                opacity: showPreview ? 1 : 0
                            }} />
                        </div>
                    } */}
                    <FramePlayer
                        frameCount={config[seq].frames}
                        basePath={config[seq].pathToFolder}
                        playType='fingerLoop'
                        withLight
                        rounded
                        setcurrFrame={setcurrentFrame}
                        setframesLoaded={setframesLoaded}
                    // startFrame={80}
                    />
                </div>
                <div className='SectorsElement_fade SectorsElement_fade_right free_img'>
                    {/* <div className='SectorsElement_fade_inner'></div> */}
                </div>
            </div>


            <div className='SectorsElement_text'>
                <div className='SectorsElement_text_title '>
                    {title}
                </div>
                <div className='SectorsElement_text_text '>
                    {/* {text} */}
                    More
                </div>

                {/* <div className='SectorsElement_text_btn'>
                    <Link to={href} className='SectorsElement_text_btn_a'>
                        More
                    </Link>
                </div> */}
            </div>
        </div>
    )
}