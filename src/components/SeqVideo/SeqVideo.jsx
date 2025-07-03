import { useEffect, useRef, useState } from 'react';
import './SeqVideo';


const config = {
    realEstate: {
        path: `/img/heroVideos/realEstate/RealEstateLarge_`,
        aspectRatio: 1.777778, //16/9
        spritesCount: 12,
        framesLastSprite: 8,
        framesPerRow: 2,
        framesPerSprite: 8,
        w: 3200,
        h: 3600,
    }
}


// bgSize.width

export default ({ type = 'realEstate', size }) => {

    const [bgSize, setBgSize] = useState({ width: 0, height: 0 });
    const [isVert, setisVert] = useState(false);

    const videoRef = useRef(null)

    const sizeInit = () => {
        const el = videoRef.current;
        if (!el) return;

        const videoAspectRatio = config[type].aspectRatio

        const width = el.offsetWidth;
        const height = el.offsetHeight;

        const blockAspectRatio = width / height;
        let bgWidth, bgHeight;


        if (blockAspectRatio > videoAspectRatio) {
            // экран "широкий" → ширина фиксированная
            setisVert(false)
            bgWidth = width;
            bgHeight = width / videoAspectRatio;
        } else {
            // экран "высокий" → высота фиксированная
            setisVert(true)
            bgHeight = height;
            bgWidth = height * videoAspectRatio;
        }
        setBgSize({
            width: bgWidth * config[type].framesPerRow,
            height: bgHeight * (config[type].framesPerSprite / config[type].framesPerRow)
        });
    };

    useEffect(() => {
        sizeInit()
        window.addEventListener('resize', sizeInit);
        return () => window.removeEventListener('resize', sizeInit);
    }, []);


    return (
        <div className={`HeroVideo HeroVideo_${size}`} ref={videoRef}>
            {
                Array(config[type].spritesCount)
                    .fill(0)
                    .map((_, index) => {

                        // const frameWidth = bgSize.width / config[type].framesPerRow;
                        // const frameHeight = bgSize.height / (config[type].framesPerSprite / config[type].framesPerRow);

                        let xOffset = 0;
                        xOffset = isVert ? bgSize.width * .25 + window.innerWidth * .5 : 0;
                        // const yOffset = (bgSize.height - frameHeight) / 2;

                        return (
                            <div className='HeroVideo_element_wrapper free_img' key={`HeroVideo_element_${index}`}>
                                <div
                                    className={`HeroVideo_element HeroVideo_${size}`}
                                    style={{
                                        backgroundImage: `url(${config[type].path}${index}.webp)`,
                                        backgroundSize: `${bgSize.width}px ${bgSize.height}px`,
                                        backgroundPosition: `${xOffset}px ${0}px`,
                                    }}
                                />
                            </div>
                        );
                    })

            }
        </div>
    )
}