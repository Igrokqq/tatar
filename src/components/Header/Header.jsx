import { useState } from 'react';
import './Header.scss';
import LanguageChange from '../languageChange/languageChange';
import { observer } from 'mobx-react-lite';
import { modalStore } from '../../stores/modalStore';
import { Link } from 'react-router-dom';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { mainPageStore } from '../../stores/mainPageStore';
import ThemeChanger from '../ThemeChanger/ThemeChanger';
import { themeStore } from '../../stores/themeStore';
import ScrollDown from '../ScrollDown/ScrollDown';




export default observer(({ bot }) => {
    const { t } = useTranslation();

    const [openLinks, setopenLinks] = useState(false);
    const [openSecondLinks, setopenSecondLinks] = useState(false);

    const linksClickHandler = () => {
        setopenLinks(prev => !prev);
    }
    const seclinksClickHandler = () => {
        setopenSecondLinks(prev => !prev);
    }

    return (
        <>
            <div className={`Header container Header_${bot && 'bot'} ${mainPageStore.currentSlide !== -1 && 'Header_mobBot'}`}>
                <Link to={'/'} className={`Header_logo ${mainPageStore.currentSlide !== -1 && 'Header_logo_mobInactive'}`}>
                    <img src="/img/logo.svg" alt="" />
                    {/* {mainPageStore.currentSlide}     */}
                </Link>
                <div className='Header_nav'>
                    <div className='Header_nav_element' onMouseLeave={() => {
                        setopenLinks(false)
                    }}>
                        <div className='Header_nav_who fsw_l fs_m' onMouseEnter={() => {
                            setopenLinks(true)
                        }}>
                            {t('who_we_are')}
                            <img src="/img/arrow.svg" alt="" />
                        </div>
                        <div className='Header_nav_who_mm_wrapper'>
                            <div className={`Header_nav_who_mm ${openLinks && 'Header_nav_who_mm_open'}`}>
                                {
                                    [
                                        { nameKey: 'about_us', link: 'AboutUs' },
                                        { nameKey: 'our_people', link: 'OurPeople' },
                                        { nameKey: 'career', link: 'Career' }
                                    ].map((el, index) => (
                                        <Link to={el.link} key={`Header_nav_who_mm_open_a_${index}`} className='fsw_l fs_m'>
                                            {t(el.nameKey)}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>

                    </div>

                    <div className='Header_nav_element' onMouseLeave={() => {
                        setopenSecondLinks(false)
                    }}>
                        <div className='Header_nav_who fsw_l fs_m' onMouseEnter={() => {
                            setopenSecondLinks(true)
                        }}>
                            {t('what_we_do')}
                            <img src="/img/arrow.svg" alt="" />
                        </div>
                        <div className='Header_nav_who_mmSec_wrapper'>
                            <div className={`Header_nav_who_mmSec ${openSecondLinks && 'Header_nav_who_mmSec_open'}`}>
                                {
                                    [
                                        { href: 'RealEstate', title: 'real_estate' },
                                        { href: 'Digital', title: 'Digital' },
                                        { href: 'Telecomunication', title: 'Telecomunication' },
                                        { href: 'GreenEnergy', title: 'Green Energy' },
                                        { href: 'Water', title: 'Water' },
                                        { href: 'Energy', title: 'Energy' },
                                    ].map((key, index) => (
                                        <Link to={key.href} key={`Header_nav_who_mm_open_a_${index}`} className='fs_m fsw_l'>
                                            {t(key.title)}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <Link to={'/Contact'} className='Header_nav_who fsw_l fs_m'>
                        {t('contact')}
                    </Link>
                </div>
                <div className={`Header_language ${!themeStore.isLight && 'Header_language_dark'}`}>
                    {/* <LanguageChange /> */}

                    {
                        mainPageStore.currentSlide === -1 ? <LanguageChange /> : <ScrollDown />
                    }

                    {/* <ThemeChanger /> */}
                </div>
                {
                    mainPageStore.currentSlide === -1 &&
                    <div className='Header_openMM' onClick={() => modalStore.toggle()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                }

                {
                    mainPageStore.currentSlide !== -1 &&
                    <div className='Header_scrollDownMob'>
                        <ScrollDown />
                    </div>
                }

            </div>



            <div className={`modal ${modalStore.isOpen ? 'modal_open' : ''}`} onClick={() => { modalStore.off() }}>
                <div className='modal_who'>
                    <div className='modal_who_title fsw_l fs_m'>{t('modal_who_title')}</div>
                    {
                        [
                            { nameKey: 'AboutUs', link: 'AboutUs' },
                            { nameKey: 'OurPeople', link: 'OurPeople' },
                            { nameKey: 'Career', link: 'Career' }
                        ].map((key, index) => (
                            <Link to={key.nameKey} key={`modal_who_title_a_${index}`} className='fsw_s fs_s'>
                                {t(key.link)}
                            </Link>
                        ))
                    }
                </div>
                <div className='modal_what'>
                    <div className='modal_what_title fsw_l fs_m'>{t('modal_what_title')}</div>
                    {
                        [
                            {
                                title: 'real_estate',
                                href: 'RealEstate'
                            },
                            { href: 'Digital', title: 'Digital' },
                            { href: 'Telecomunication', title: 'Telecomunication' },
                            { href: 'GreenEnergy', title: 'Green Energy' },
                            { href: 'Water', title: 'Water' },
                            { href: 'Energy', title: 'Energy' },
                        ].map((key, index) => (
                            <Link to={key.href} key={`Header_nav_who_mm_open_a_${index}`} className='fsw_s fs_s'>
                                {t(key.title)}
                            </Link>
                        ))
                    }
                </div>
                <div className='modal_contact'>
                    <Link to={'/Contact'} className='modal_contact_title fsw_s fs_s'>{t('modal_contact_title')}</Link>
                </div>
                {/* <div className='modal_light'>
                    <ThemeChanger />
                </div> */}
            </div>
        </>
    )
})
