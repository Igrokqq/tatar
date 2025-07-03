import BlockTitle from '../../components/BlockTitle/BlockTitle';
import HeaderHeroPageEl from '../../components/HeaderHeroPageEl/HeaderHeroPageEl';
import NumBlock from '../../components/NumBlock/NumBlock';
import SubPageDecor from '../../components/SubPageDecor/SubPageDecor';
import TextBlock from '../../components/TextBlock/TextBlock';
import './Energy.scss';
export default () => {

    const els = [
        {
            title: 'Our Foundation: Critical Energy Infrastructure',
            text: 'From transmission networks and storage terminals to local distribution systems and energy control nodes — we build and operate reliable, large-scale energy assets. Our platforms are designed with redundancy, regulatory compliance, and long-term industrial relevance in mind.'
        },
        {
            title: 'What Sets Us Apart: Adaptive Energy Strategy',
            text: 'We go beyond passive infrastructure — integrating intelligent control, risk-aware delivery models, and modular systems. Our focus: resilient, cross-border ecosystems ready for ESG alignment and technological transformation — capable of withstanding both market and environmental pressures.'
        },
        {
            title: 'How We Operate',
            text: 'We act as energy partners and think like infrastructure architects. Our team blends deep operational experience in the oil & gas sector with long-term investment strategy. Each asset is structured for resilience, modernization, and continuity. The result: energy systems that combine stability with adaptability in a changing global energy landscape.'
        }
    ]

    const numEl = [
        {
            title: 'Core Energy Infrastructure',
            text: 'We develop and operate gas pipelines, oil storage facilities, and regional power distribution networks. Our projects are designed for system stability, grid integration, and uninterrupted large-scale supply — delivering long-term energy security and resilience.'
        },
        {
            title: 'Smart Energy Systems & Grid Optimization',
            text: 'We invest in management systems, flexible demand platforms, and digital monitoring to balance loads, reduce losses, and maximize efficiency across complex national and cross-border networks.'
        },
        {
            title: 'Modular & Transition-Ready Energy Assets',
            text: 'Our portfolio includes LNG terminals, hybrid generation units, and upgradable infrastructure — allowing clients to meet current energy demands while aligning with ESG requirements and emerging technologies.'
        },
        {
            title: 'ESG Integration & Strategic Energy Agreements',
            text: 'All our energy assets operate under long-term contracts with governments, grid operators, or sovereign entities. Our strategy aligns with global ESG standards — delivering investments with sustainable impact and strong value for national infrastructure.'
        }
    ]

    return (
        <>

            <SubPageDecor
                frameCount={114}
                basePath={'/sectorsSequences/EnergyLarge/'}
            />
            <HeaderHeroPageEl bg={'/1.webp'} title={'Energy'} text={'Investing in the Future of Energy Resilience'} description={'Since 2014, we’ve been investing in traditional and hybrid energy infrastructure — including gas pipelines, oil storage facilities, power grids, and critical utility systems. Our strategy is rooted in stability, security, and long-term value creation. We focus on assets that ensure uninterrupted supply, national grid integration, and energy transition compatibility — enabling industrial reliability and sovereign energy autonomy.'} />
            <div className='Energy container'>
                <div className='Energy_content'>
                    {
                        els.map((el, index) => (
                            <TextBlock title={el.title} text={el.text} key={`TextBlock_${index}`} />
                        ))
                    }
                </div>
                <BlockTitle text1={'What We Build in'} text2={'Energy Infrastructure'} />
                <div className='Telecomunication_num'>
                    {
                        numEl.map((el, index) => (
                            <NumBlock index={index + 1} title={el.title} text={el.text} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}