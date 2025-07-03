import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './Advantages.scss';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { themeStore } from '../../stores/themeStore';

const Advantages = () => {
    const { t } = useTranslation();

    const keys = ['real_estate', 'energy', 'water', 'transport', 'digital'];

    const advantages = keys.map(key => ({
        header: t(`advantages.${key}.header`),
        description: t(`advantages.${key}.description`),
        img: `img/advantages/${key}.png`,
    }));

    const [currentElement, setcurrentElement] = useState(0);

    const scope = useRef(null)
    const list = useRef(null)
    const wrapper = useRef(null)

    useGSAP(() => {
        let st = gsap.fromTo(list.current, {
            x: '0px'
        }, {
            x: () => {
                return `${list.current?.offsetWidth > wrapper.current?.offsetWidth ? -(list.current?.offsetWidth - wrapper.current?.offsetWidth + 36) : 0}px`
            },
            ease: 'none',
            scrollTrigger: {
                trigger: wrapper.current,
                scrub: 1,
                // markers: true,
                start: '50% 70%',
                end: '100% 70%',
            }
        });

        const handleResize = () => {
            st.kill(); // Убиваем старую анимацию
            st = gsap.fromTo(list.current, {
                x: '0px'
            }, {
                x: () => {
                    return `${list.current?.offsetWidth > wrapper.current?.offsetWidth ? -(list.current?.offsetWidth - wrapper.current?.offsetWidth + 36) : 0}px`
                },
                ease: 'none',
                scrollTrigger: {
                    trigger: wrapper.current,
                    scrub: 1,
                    // markers: true,
                    start: '50% 70%',
                    end: '100% 70%',
                }
            });
        };

        window.addEventListener('resize', handleResize);
        return () => {
            st.kill();
            window.removeEventListener('resize', handleResize);
        };
    }, { scope: scope });



    return (
        <div className='Advantages' ref={scope}>
            <div className='Advantages_wrapper mt_m' style={{
            }} ref={wrapper}>
                <div className='Advantages_list' ref={list}>
                    {advantages.map((el, index) => (
                        <div
                            key={index}
                            className='Advantages_element_wrapper '
                        >
                            <div className='Advantages_element'>
                                <div className='Advantages_decor free_img'>
                                    <div
                                        className={`Advantages_decor_inner ${themeStore.isLight && 'Advantages_decor_inner_light '}`}
                                        style={{ backgroundImage: `url(${el.img})` }}
                                    />
                                </div>
                                <div className={`Advantages_content ${themeStore.isLight && 'Advantages_content_light '}`}>
                                    <div className='Advantages_header fs_2xl fsw_l'>{el.header}</div>
                                    <div className='Advantages_description fs_l fsw_s'>{el.description}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default observer(Advantages);