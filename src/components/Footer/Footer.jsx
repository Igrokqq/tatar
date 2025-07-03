import { useTranslation } from 'react-i18next';
import './Footer.scss';
import { observer } from 'mobx-react-lite';
import { themeStore } from '../../stores/themeStore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default observer(() => {
    const { t } = useTranslation();

    const items = [
        {
            title: t('who_we_are'),
            links: [
                { label: t('about_us'), href: '/AboutUs' },
                { label: t('our_people'), href: '/OurPeople' },
                { label: t('career'), href: '/Career' }
            ]
        },
        {
            title: t('what_we_do'),
            links: [
                { label: t('Green Energy'), href: '/GreenEnergy' },
                { label: t('Water'), href: '/Water' },
                { label: t('Energy'), href: '/Energy' },
            ]
        },
        {
            title: t('what_we_do'),
            links: [
                { label: t('real_estate'), href: '/RealEstate' },
                { label: t('Digital'), href: '/Digital' },
                { label: t('Telecomunication'), href: '/Telecomunication' },
            ]
        },
        {
            title: t('Feedback'),
            links: [
                { label: t('career'), href: '/Career' },
                { label: t('contact'), href: '/Contact' },
            ]
        }
    ];

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const phrases = ['Developed', 'Grow', 'Build', 'Last'];

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1); // вниз
            setTimeout(() => setDirection(-1), 1000); // через 1 секунду — вверх
            setIndex(prev => (prev + 1) % phrases.length);
        }, 2000); // полный цикл — 2 секунды

        return () => clearInterval(interval);
    }, []);

    const getText = (i) => {
        if (phrases[i] === 'grow') return t('grow');
        return phrases[i];
    };

    return (
        <div className='mt_xl'>
            < div className={`Footer container ${themeStore.isLight && 'Footer_light'}`
            }>
                <div className='Footer_content'>
                    {items.map((el, index) => (
                        <div key={index} className="Footer_content_column">
                            <div className='Footer_content_column_title fsw_l mt_l'>{el.title}</div>
                            {el.links.map((link, i) => (
                                // <a href={link.href} key={i} className='mt_s'>{link.label}</a>
                                <Link to={link.href} className='mt_s Footer_content_column_a'>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
                <div className='Footer_privacy mt_xl'>
                    <div className='Footer_privacy_grow'>
                        <div className={`Footer_privacy_grow_1 ${themeStore.isLight && 'Footer_privacy_grow_1_dark'}`}>
                            {phrases.map((_, i) => (
                                <div
                                    key={i}
                                    className={`slide-text ${i === index ? 'enter' : direction === 1 ? 'exit-down' : 'exit-up'
                                        }`}
                                >
                                    {getText(i)}
                                </div>
                            ))}
                        </div>
                        <div className='Footer_privacy_grow_2'>
                            {t('for_generations')}
                        </div>
                    </div>
                    <div className='Footer_privacy_text'>
                        2025 TATAR Holding
                    </div>
                </div>
            </div >
        </div>
    );
})