import ScrollDown from '../ScrollDown/ScrollDown';
import './Hero.scss';
import { observer } from 'mobx-react-lite';
import { mainPageStore } from '../../stores/mainPageStore';
import { useTranslation } from 'react-i18next';
import ArrowHeight from '../ArrowHeight/ArrowHeight';
import WhiteBtn from '../WhiteBtn/WhiteBtn';
import { useEffect, useRef, useState } from 'react';
import { themeStore } from '../../stores/themeStore';
import SubPageDecor from '../SubPageDecor/SubPageDecor';

export default observer(() => {
    const { t } = useTranslation();

    const [textSlide, setTextSlide] = useState(mainPageStore.currentSlide);

    const slides = [
        {
            header: 'slide.energie.header',
            desc: 'slide.common.desc',
        },
        {
            header: 'slide.transport.header',
            desc: 'slide.common.desc',
        },
        {
            header: 'slide.franchise.header',
            desc: 'slide.common.desc',
        },
        {
            header: 'slide.digital.header',
            desc: 'slide.common.desc',
        }
    ];

    const isTransition = useRef(null)
    const [trans, settrans] = useState(false);

    // const handleChangePage = (forward) => {
    //     if (isTransition.current) return;
    //     isTransition.current = true
    //     settrans(true)

    //     if (forward) {
    //         mainPageStore.nextSlide()
    //     } else {
    //         mainPageStore.prevSlide()
    //     }

    //     setTimeout(() => {
    //         setTextSlide(mainPageStore.currentSlide);
    //     }, 500);

    //     setTimeout(() => {
    //         settrans(false)
    //         isTransition.current = false
    //     }, 1500);
    // };


    useEffect(() => {
        const handleScroll = () => {
            if (mainPageStore.currentSlide === -1) return;

            if (window.scrollY > 1) {
                console.log('scrolled down');
                mainPageStore.nextSlide()
                // handleChangePage(true)
            } else if (window.scrollY < 1) {
                // console.log('prev');
                // handleChangePage(false)
            }
            setTimeout(() => {
                window.scrollTo({
                    top: 1,
                });
            }, 1000);

        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <>
            <SubPageDecor
                frameCount={386}
                // basePath={'/sectorsSequences/HeroNew/'}
                basePath={'/sectorsSequences/HeroLastPlus/'}
                loopFrame={-1}
                controllByScroll
            />
            <div className={`Hero ${mainPageStore.currentSlide !== -1 && 'Hero_inactive'}`}>
                {/* <div className='Hero_video_fadeTop_wrapper'>
                    <div className='Hero_vido_fadeTop'></div>
                </div> */}


                <div className={`Hero_content container Hero_canBeHided ${mainPageStore.currentSlide !== -1 ? 'Hero_canBeHided_hide' : ''}`}>
                    <div className='Hero_content_left'>
                        <div className='Hero_content_left_title fs_3xl fsw_m'>
                            {t('capital_with_vision')}
                        </div>
                        <div className='Hero_content_left_text fsw_m fs_l '>
                            {t('growth_for_generations')}
                        </div>
                    </div>
                    <div className='Hero_content_right'>
                        <ScrollDown />
                    </div>
                </div>
            </div>

            <div className={`Hero_fade free_img ${themeStore.isLight ? 'Hero_fade_light' : ''}`}>
                <div className='Hero_fade_inner'></div>
            </div>
        </>
    );
});
