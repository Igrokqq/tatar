import { useEffect, useRef } from 'react';
import BigNumBlock from '../../components/BigNumBlock/BigNumBlock';
import HeaderHeroPageEl from '../../components/HeaderHeroPageEl/HeaderHeroPageEl';
import TextBlock from '../../components/TextBlock/TextBlock';
import './Water.scss';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BlockTitle from '../../components/BlockTitle/BlockTitle';
import SubPageDecor from '../../components/SubPageDecor/SubPageDecor';

gsap.registerPlugin(ScrollTrigger);
export default () => {

    const els = [
        {
            title: 'Our Foundation: Water Infrastructure',
            text: 'From treatment plants and desalination facilities to smart pipeline networks and water reuse technologies — we build and manage critical infrastructure for clean water access. Our platforms are engineered for reliability, scalability, and minimal environmental impact — serving both urban and industrial regions.'
        },
        {
            title: 'What Sets Us Apart: Intelligent Utility Design',
            text: 'We don’t just operate water systems — we optimize them. Our focus is adaptive infrastructure with real-time digital monitoring, leak detection, pressure balancing, and analytics. Every network is designed to improve efficiency, reduce losses, and ensure uninterrupted performance long-term.'
        },
        {
            title: 'How We Operate',
            text: 'We act as engineers and think like resource stewards. Our team combines deep domain expertise in water systems with the operational mindset of infrastructure investors. Every project we deliver is designed with regulatory compliance, resilience, and recovery efficiency in mind. The result: Water networks that scale for future demand, operate reliably, and meet global sustainability needs.'
        }
    ]

    const steps = [
        {
            title: 'Clean Water Infrastructure',
            text: 'We develop and operate large-scale water treatment plants, desalination units, and municipal pipelines across urban and industrial zones. Our projects are designed for long-term operational reliability, environmental safety, and stable water supply.',
        },
        {
            title: 'Smart Water Management & Monitoring',
            text: 'We invest in digital monitoring systems, pressure control tools, and leak detection platforms to improve efficiency, reduce loss, and maintain consistent water flow during peak demand and environmental stress.',
        },
        {
            title: 'Innovative Water Reuse & Circular Systems',
            text: 'Our portfolio includes gray water reuse systems, rainwater harvesting, and pilot filtration technologies — with a focus on regenerative water solutions for the next generation of city infrastructure.',
        },
        {
            title: 'ESG Integration & Water Security Agreements',
            text: 'All our assets operate under long-term municipal contracts or public-private partnerships. Our strategy aligns with global ESG principles and responsible water usage — ensuring investments with a positive resource impact and stable value for communities.',
        }
    ];

    const scope = useRef(null);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }, [])

    useGSAP(() => {
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
                    start: '0% 75%',
                    end: '100% 75%',
                }
            })
        }
    }, { scope: scope })

    return (
        <>
            <SubPageDecor
                frameCount={100}
                basePath={'/sectorsSequences/WaterLarge/'}
            />
            <HeaderHeroPageEl bg={'/1.webp'} title={'Water'} text={'Investing in the Future of Clean Water'} description={'Since 2016, we’ve been investing in scalable, resilient water infrastructure — including advanced treatment facilities, waste management systems, and intelligent municipal water networks. Our mission is to support urban growth and industrial efficiency by building water systems that ensure resource sustainability, uninterrupted operation, and long-term ecological resilience.'} />
            <div className='Water container' ref={scope}>
                <div className='Water_content'>
                    {
                        els.map((el, index) => (
                            <TextBlock title={el.title} text={el.text} key={`TextBlock_${index}`} />
                        ))
                    }
                </div>
                <BlockTitle text1={'What We Build in Water'} text2={'Infrastructure'} />
                <div className='Water_lines'>
                    {
                        steps.map((el, index) => (
                            <BigNumBlock index={index} title={el.title} text={el.text} key={`BigNumBlock_${index + 1}`} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}