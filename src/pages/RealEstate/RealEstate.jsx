import './RealEstate.scss';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import WhiteBtn from '../../components/WhiteBtn/WhiteBtn';
import RealEstateEl from './RealEstateEl/RealEstateEl';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { themeStore } from '../../stores/themeStore';
import { useGSAP } from '@gsap/react';
import BigNumBlock from '../../components/BigNumBlock/BigNumBlock';
import HeaderHeroPageEl from '../../components/HeaderHeroPageEl/HeaderHeroPageEl';
import SubPageDecor from '../../components/SubPageDecor/SubPageDecor';

gsap.registerPlugin(ScrollTrigger);

export default observer(() => {

    const { t } = useTranslation();

    const steps = [
        {
            title: t('residential_investments_title'),
            text: t('residential_investments_text'),
        },
        {
            title: t('commercial_investments_title'),
            text: t('commercial_investments_text'),
        },
        {
            title: t('income_generation_title'),
            text: t('income_generation_text'),
        },
        {
            title: t('capital_preservation_title'),
            text: t('capital_preservation_text'),
        }
    ];


    const [openMM, setopenMM] = useState(false);

    const clickMmHandler = () => {
        setopenMM(prev => !prev);
    }

    const [activeTab, setactiveTab] = useState(2);

    const profileText = [
        {
            title: t('investment_volume'),
            text1: t('investment_volume_value')
        },
        {
            title: t('location_quality'),
            text1: t('location_quality_values')
        },
        {
            title: t('location_quality'),
            text1: t('location_types')
        },
        {
            title: t('property_condition'),
            text1: t('property_condition_values')
        },
        {
            title: t('tenants'),
            text1: t('tenants_values')
        },
        {
            title: t('other'),
            text1: t('other_values')
        }
    ];


    const [sliderProgress, setsliderProgress] = useState(0);

    const scope = useRef(null);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }, [])

    useGSAP(() => {
        setTimeout(() => {
            console.log('reinit');

            gsap.to('.RealEstate_gallery_content', {
                y: '0px',
                ease: 'none',
                scrollTrigger: {
                    trigger: '.RealEstate_gallery',
                    scrub: 0,
                    // markers: true,
                    pin: '.RealEstate_gallery',
                    pinSpacing: false,
                    start: 'top 0%',
                    end: 'bottom 100%',
                    onUpdate: self => {
                        setsliderProgress(self.progress)
                    }
                }
            })
        }, 500);


        let spacer = 0
        if (window.innerWidth > 1500) spacer = 200
        if (window.innerWidth > 1000 && window.innerWidth < 1500) spacer = 120



        for (let i = 0; i < 4; i++) {
            gsap.fromTo(`.RealEstate_steps_content_el_${i}`, {
                x: -100 + (spacer * i),
                opacity: 0,
            }, {
                x: 0 + (spacer * i),
                opacity: 1,
                scrollTrigger: {
                    trigger: `.RealEstate_steps_content_el_${i}`,
                    scrub: 1,
                    // markers: true,
                    start: '0% 85%',
                    end: '100% 85%',
                }
            })
        }

        gsap.fromTo(`.RealEstate_hero_content`, {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 1
        })

        // gsap.fromTo(`.RealEstate_hero_decor`, {
        //     opacity: 0
        // }, {
        //     opacity: 1,
        //     duration: 1,
        //     delay: 1
        // })
        // 


    }, { scope: scope })


    return (
        <>
            <SubPageDecor
                frameCount={96}
                basePath={'/sectorsSequences/RealEstateLarge/'}
            />
            <div className='RealEstate container' ref={scope}>
                <HeaderHeroPageEl bg={'/1.webp'} title={'Real Estate'} text={'Navigating Markets with a Long-Term Perspective'} description={'We’ve been building our real estate portfolio since 2013 — steadily, deliberately, and always with a hands-on approach. Today, we own and operate over 300,000 square meters (~3.2 million square feet) of real estate across Germany and the United States, with a portfolio value of over €1 billion.'} />
                <div className='RealEstate_info mt_xl'>
                    {
                        [t('info_1'), t('info_2'), t('info_3')].map((el, index) => (
                            <div className='RealEstate_info_el gradienBlock fs_m fsw_s' key={`RealEstate_info_el_${index}`}>
                                {el}
                            </div>
                        ))
                    }
                </div>
                <div className='RealEstate_steps mt_xl'>
                    <div className='RealEstate_steps_title fs_2xl fsw_m'>
                        {t('guiding_principles')}
                    </div>
                    <div className='RealEstate_steps_content mt_m'>
                        {
                            steps.map((el, index) => (
                                <BigNumBlock index={index} title={el.title} text={el.text} key={`BigNumBlock_${index + 2}`} />
                            ))
                        }
                    </div>
                </div>
                <div className='RealEstate_gallery mt_l'>
                    <div className='RealEstate_gallery_content'>
                        <div className='RealEstate_gallery_header'>
                            <div className='RealEstate_gallery_header_content'>

                                <div className='RealEstate_gallery_header_title fs_xl fsw_m'>{t('gallery_title')}</div>
                                <div className='RealEstate_gallery_header_text fs_m fsw_s'>{t('gallery_subtitle')}</div>
                            </div>
                            <div className='RealEstate_gallery_header_func'>
                                <WhiteBtn title={t('view_portfolio')} to={'/Portfolio'} />
                            </div>
                        </div>
                        <div className='RealEstate_gallery_items'>
                            {Array(5)
                                .fill(0)
                                .map((_, index) => {
                                    const totalCount = 5;
                                    const offsetPercent = (1 / (totalCount - 2)) * index

                                    let offset = 2000 * offsetPercent - 3000 * sliderProgress
                                    let translate = 0
                                    let scale = 1
                                    if (offset < 0) {
                                        scale = Math.max(1 + (offset / 3000), .5)

                                        translate = 0
                                        if (index === totalCount - 1) {
                                            scale = 1
                                            translate = 0
                                        }
                                        offset = 0
                                    }

                                    return <div className={`RealEstate_gallery_items_el free_img`} style={{
                                        transform: `translateY(${offset}px)`,
                                        scale: `${scale}`,
                                        translate: `0px ${translate}px`
                                    }}>
                                        <div className='RealEstate_gallery_items_el_text free_img'>
                                            <div className='RealEstate_gallery_items_el_text_inner fs_3xl fsw_xxl'>
                                                {[t('Office'), t(`Revitalisation`), t('Administration'), t('Retail'), t('Residental')][index]}
                                            </div>
                                        </div>
                                        <img src={`/img/gallery/${index + 1}.webp`} alt="" />
                                    </div>
                                })}
                        </div>
                    </div>
                    {/* <div className='RealEstate_gallery_btn'>
                    </div> */}
                </div>
                <div className='RealEstate_execution mt_m'>
                    <div className='RealEstate_execution_header mt_m fs_xl fsw_m'>
                        {t('deal_execution_title')}
                    </div>
                    <div className='RealEstate_execution_content mt_m'>
                        <div className='RealEstate_execution_content_left fs_m fsw_s'>
                            {t('deal_execution_left')}
                        </div>
                        <div className='RealEstate_execution_content_right fs_m fsw_s'>
                            {t('deal_execution_right')}
                        </div>
                    </div>
                    <div className='RealEstate_execution_btn mt_m'>
                        <WhiteBtn title={t('acquisition_profile')} onclick={clickMmHandler} />
                    </div>
                </div>
            </div>
            <div className={`RealEstate_mm ${openMM ? 'RealEstate_mm_active' : ''} ${themeStore.isLight && 'RealEstate_mm_light'}`} onClick={clickMmHandler}>
                <div className='RealEstate_mm_content' onClick={(e) => { e.stopPropagation() }}>
                    <div className='RealEstate_mm_content_header'>
                        <div className='RealEstate_mm_content_header_title fs_l fsw_m'>
                            {t('acquisition_modal_title')}
                        </div>
                        <div className='RealEstate_mm_content_header_text fs_m fsw_s'>
                            {t('acquisition_modal_text')}
                        </div>
                    </div>
                    <div className='RealEstate_mm_content_list mt_l'>
                        <div className='RealEstate_mm_content_list_btns'>
                            {
                                [t('portfolios'), t('office'), t('residential'), t('hotel')].map((el, index) => (
                                    <WhiteBtn title={el} key={`RealEstate_mm_content_list_btns_${index}`} index={index + 1} activeTab={activeTab} onclick={() => setactiveTab(index + 1)} />
                                ))
                            }
                        </div>
                        <div className='RealEstate_mm_content_list_info'>
                            {
                                activeTab == 1 && profileText.slice(0, 2).map((el, index) => (
                                    <RealEstateEl first={index === 0} last={index === 1} title={el.title} text1={el.text1} text2={el.text2} key={`RealEstateEl_${index}`} />
                                ))
                            }
                            {
                                activeTab == 2 && profileText.map((el, index) => (
                                    <RealEstateEl first={index === 0} last={index === 5} title={el.title} text1={el.text1} text2={el.text2} key={`RealEstateEl_${index}`} />
                                ))
                            }
                            {
                                activeTab == 3 && profileText.slice(2, 4).map((el, index) => (
                                    <RealEstateEl first={index === 0} last={index === 1} title={el.title} text1={el.text1} text2={el.text2} key={`RealEstateEl_${index}`} />
                                ))
                            }
                            {
                                activeTab == 4 && profileText.slice(4, 5).map((el, index) => (
                                    <RealEstateEl firstNlast title={el.title} text1={el.text1} text2={el.text2} key={`RealEstateEl_${index}`} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
})