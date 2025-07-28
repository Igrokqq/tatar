import ScrollDown from '../../components/ScrollDown/ScrollDown';
import './Hero.scss';
import { observer } from 'mobx-react-lite';
import { mainPageStore } from '../../stores/mainPageStore';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import SubPageVideo from '../SubPageDecor/SubPageVideo';

export default observer(() => {

    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            if (mainPageStore.currentSlide === -1) return;
            if (!mainPageStore.checkScroll) return

            if (window.scrollY > 1) {
                console.log('scrolled down');
                mainPageStore.nextSlide()
            } else if (window.scrollY < 1) {
                console.log('scrolled up');
                mainPageStore.prevSlide()
            }
            setTimeout(() => {
                mainPageStore.checkScroll = false
                setTimeout(() => {
                    window.scrollTo({
                        top: 1,
                    });
                    setTimeout(() => {
                        mainPageStore.checkScroll = true
                    }, 100);
                }, 100);
            }, 100);

        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mainPageStore.slidePlaying) {
            console.log('Start slide playin');
        } else {
            console.log('End slide playin');
        }

    }, [mainPageStore.slidePlaying])



    return (
        <>
            <SubPageVideo
                path="/Header_final.mp4"
                pathLoop="/Header_loop.mp4"
            />
            <div className={`Hero ${mainPageStore.currentSlide !== -1 && 'Hero_inactive'}`}>

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

            {/* <div className={`Hero_fade free_img ${themeStore.isLight ? 'Hero_fade_light' : ''}`}>
                <div className='Hero_fade_inner'></div>
            </div> */}
        </>
    );
});
