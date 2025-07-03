import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollDown from '../../components/ScrollDown/ScrollDown';
import WhiteBtn from '../../components/WhiteBtn/WhiteBtn';
import './fullPortfolio.scss';
import PageHeader from '../../components/PageHeader/PageHeader';

export default () => {
    const { t } = useTranslation();
    const [activeTab, setactiveTab] = useState('all');

    const images = [
        {
            img: '/img/portfolio/0.webp',
            type: 'office',
            name: 'Dortmund',
        },
        {
            img: '/img/portfolio/1.webp',
            type: 'office',
            name: 'Straße Hagen',
        },
        {
            img: '/img/portfolio/2.webp',
            type: 'office',
            name: 'Coesfeld',
        },
        {
            img: '/img/portfolio/3.webp',
            type: 'office',
            name: 'Recklinghausen',
        },
        {
            img: '/img/portfolio/4.webp',
            type: 'office',
            name: 'Wuppertal',
        },
        {
            img: '/img/portfolio/5.webp',
            type: 'office',
            name: 'Paderborn',
        },
        {
            img: '/img/portfolio/6.webp',
            type: 'office',
            name: 'Woldemai 17 Lippstadt',
        },
        {
            img: '/img/portfolio/7.webp',
            type: 'office',
            name: 'Mainz',
        },
        {
            img: '/img/portfolio/8.webp',
            type: 'office',
            name: 'Wolfrathshauser Straße 49 München',
        },
        {
            img: '/img/portfolio/9.webp',
            type: 'office',
            name: 'Düsseldorf',
        },
        {
            img: '/img/portfolio/10.webp',
            type: 'office',
            name: 'Dortmund',
        },
        {
            img: '/img/portfolio/11.webp',
            type: 'residential',
            name: 'Karlsruhe',
        },
        {
            img: '/img/portfolio/12.webp',
            type: 'residential',
            name: 'Karlsruhe',
        },
        {
            img: '/img/portfolio/13.webp',
            type: 'retail',
            name: 'Starnberg',
        },
        {
            img: '/img/portfolio/14.webp',
            type: 'retail',
            name: 'Krefeld',
        },
        {
            img: '/img/portfolio/15.webp',
            type: 'retail',
            name: 'Lippstadt',
        },
        {
            img: '/img/portfolio/16.webp',
            type: 'retail',
            name: 'Paderborn',
        }
    ]

    const tabs = ['all', 'office', 'residential', 'retail'];

    return (
        <div className='fullPortfolio container'>

            <PageHeader text={t('portfolio')} />

            <div className='fullPortfolio_content mt_xl'>
                <div className='fullPortfolio_content_btns'>
                    {
                        tabs.map((key, index) => (
                            <WhiteBtn
                                title={t(key)}
                                key={`fullPortfolio_content_btns_${index}`}
                                index={index + 1}
                                activeTab={activeTab}
                                onclick={() => setactiveTab(key)}
                            />
                        ))
                    }
                </div>
                <div className='fullPortfolio_content_gallery'>
                    {images.map((img, index) => {

                        if (activeTab !== img.type && activeTab !== 'all') return <></>
                        return <div className='fullPortfolio_content_gallery_el' key={`fullPortfolio_${index}`}>
                            <img src={img.img} alt="" />
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}
