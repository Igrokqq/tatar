import { useEffect, useState, useRef } from 'react';
import './AboutUsMapDecorBlock.scss';
import Circle from './Circle';
import SubPagePlayer from "../../components/SubPageDecor/SubPagePlayer.jsx";
export default ({ config }) => {
    const videoRef = useRef(null);
    const [x, setx] = useState('0px');
    const [y, sety] = useState('0px');
    const [openModal, setopenModal] = useState(false);



    let padding = 0;
    useEffect(() => {
        const handleResize = () => {
            console.log('resize');

            const width = window.innerWidth;
            // padding = 100
            // if (width <= 1600) {
            //     padding = 20
            // }
            // const imgWidth = (Math.min(1900, width) - padding * 2)
            const imgWidth = width
            const imgHeight = imgWidth / 1.436

            const xtmp = `${config.position.x * imgWidth}px`
            const ytmp = `${config.position.y * imgHeight}px`
            setx(xtmp)
            sety(ytmp)
            console.log(xtmp);
            console.log(ytmp);

        };

        window.addEventListener('resize', handleResize);
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);





    return (
        <div className={`AboutUsMapDecorBlock free_img ${openModal && 'AboutUsMapDecorBlock_top'}`} style={{
            top: y,
            left: x,
        }}
            onMouseEnter={() => (setopenModal(true))}
            onMouseLeave={() => {
                setopenModal(false);
                if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play();
                }
            }}

            onPointerEnter={() => {
                setopenModal(true)
            }}

        >
            <div className={`AboutUsMapDecorBlock_textAndCircle ${config?.textPos === 'center' && 'AboutUsMapDecorBlock_textAndCircle_center'}`}>

                <Circle />
                <div className={`AboutUsMapDecorBlock_container free_img ${config?.textPos === 'left' && 'AboutUsMapDecorBlock_container_left'} ${config?.textPos === 'center' && 'AboutUsMapDecorBlock_container_center'}`}>
                    <div className='AboutUsMapDecorBlock_container_inner'>
                        <div className={`AboutUsMapDecorBlock_title fs_m AboutUsMapDecorBlock_title_bold ${config?.textPos === 'left' && 'AboutUsMapDecorBlock_title_left'} ${config?.textPos === 'center' && 'AboutUsMapDecorBlock_title_center'}`} >{config.city}</div>
                        <div className={`AboutUsMapDecorBlock_title ${config?.textPos === 'left' && 'AboutUsMapDecorBlock_title_left'} ${config?.textPos === 'center' && 'AboutUsMapDecorBlock_title_center'}`}>{config.country}</div>
                    </div>
                </div>
            </div>
            <div className={`AboutUsMapDecorBlock_mm_wrapper  ${config?.textPos === 'left' && 'AboutUsMapDecorBlock_mm_wrapper_left'} free_img`}>
                <div className={`AboutUsMapDecorBlock_mm ${openModal && 'AboutUsMapDecorBlock_mm_active'}`}>
                    <SubPagePlayer
                        ref={videoRef}
                        src={config.video}
                        mode={config.mode || 'loop'}
                        endImage={config.endImage}
                    />
                    <div className='AboutUsMapDecorBlock_mm_text'>
                        <div className='AboutUsMapDecorBlock_mm_text_title fs_xl fsw_m'>{config.city}</div>
                        <div className='AboutUsMapDecorBlock_mm_text_description fs_l fsw_s'>{config.address}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}