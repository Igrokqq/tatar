import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollDown from '../../components/ScrollDown/ScrollDown';
import WhiteBtn from '../../components/WhiteBtn/WhiteBtn';
import './Career.scss';
import CareerEl from './CareerEl/CareerEl';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import PageHeader from '../../components/PageHeader/PageHeader';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default () => {
    const { t } = useTranslation();

    const els = [
        {
            title: t('rental_manager_title'),
            type: '(m/f/d)',
            short: t('rental_manager_short'),
            description: t('rental_manager_description'),
            date: '2025-06-02',
            task: [
                t('task1'),
                t('task2'),
                t('task3'),
                t('task4'),
                t('task5'),
                t('task6'),
                t('task7')
            ],
            profile: [
                t('profile1'),
                t('profile2'),
                t('profile3'),
                t('profile4'),
                t('profile5'),
                t('profile6'),
                t('profile7')
            ],
            weOffer: [
                t('offer1'),
                t('offer2'),
                t('offer3'),
                t('offer4'),
                t('offer5'),
                t('offer6')
            ]

        },
        // {
        //     title: t('rental_manager_title'),
        //     type: '(m/f/d)',
        //     short: t('rental_manager_short'),
        //     description: t('rental_manager_description'),
        //     date: '2025-06-02'
        // },
    ]

    const offerRefs = useRef([]);
    offerRefs.current = [];

    const scope = useRef(null);

    useGSAP(() => {
        gsap.fromTo('.Career_content_text',
            { x: '-200px', opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
            }
        );
        gsap.fromTo('.Career_content_info',
            { y: '200px', opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 1,
                ease: 'power3.out',
            }
        );


        gsap.fromTo('.Career_content_img',
            { x: '200px', opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 2,
                ease: 'power3.out',
            }
        );
    }, { scope: scope });


    useEffect(() => {
        offerRefs.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                {
                    x: index % 2 === 0 ? '-100%' : '100%',
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 50%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);



    return (
        <div className='Career container' ref={scope}>
            <PageHeader text={t('career')} />
            <div className='Career_hero_left_text fs_l fsw_s'>
                {t('career_expands_mind')}
            </div>


            <div className='Career_content mt_xl'>
                <div className='Career_content_text gradienBlock '>
                    <div className='Career_content_text_title fs_l fsw_m'>{t('work_alongside_brilliant_minds')}</div>
                    <div className='Career_content_text_text1 fs_m fsw_s'>
                        {t('company_strength_part1')}
                    </div>
                    <div className='Career_content_text_text1 fs_m fsw_s'>
                        {t('company_strength_part2')}
                    </div>
                </div>
                <div className='Career_content_info' >
                    <div className='Career_content_info_text gradienBlock fs_m fsw_s'>
                        {t('purpose_driven_work')}
                    </div>
                    {/* <WhiteBtn title={t('view_open_positions')} href={'position'} /> */}
                </div>
                <div className='Career_content_img'>
                    <img src="/img/tatarReception.webp" alt="" />
                </div>
            </div>

            <div className='Career_offer mt_xl' id='position'>
                <div className='Career_offer_title fs_2xl fsw_m'>
                    {t('unternehmen')}
                </div>
                <div className='Career_offer_content mt_l'>
                    {
                        els.map((el, index) => (
                            <CareerEl
                                title={el.title}
                                type={el.type}
                                short={el.short}
                                date={el.date}
                                task={el.task}
                                profile={el.profile}
                                weOffer={el.weOffer}
                                description={el.description}
                                key={`CareerEl_${index}`}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
