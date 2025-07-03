import BlockTitle from '../../components/BlockTitle/BlockTitle';
import BlockWithLines from '../../components/BlockWithLines/BlockWithLines';
import HeaderHeroPageEl from '../../components/HeaderHeroPageEl/HeaderHeroPageEl';
import TextBlock from '../../components/TextBlock/TextBlock';
import './GreenEnergy.scss';
import SeqVideo from '../../components/SeqVideo/SeqVideo';
import SubPageDecor from '../../components/SubPageDecor/SubPageDecor';
export default () => {

    const els = [
        {
            title: 'Our Foundation: Renewable Infrastructure',
            text: 'From solar parks and wind farms to battery storage and hydrogen installations — we build and operate sustainable energy systems that form the backbone of tomorrow’s power supply. Our platforms are engineered for the mass production of clean, high-efficiency electricity — with a focus on long-term stability and minimal environmental impact.'
        },
        {
            title: 'What Sets Us Apart: Intelligent Energy Design',
            text: 'We don’t just deploy energy assets — we design adaptive, modular systems. Our focus is scalable clean energy infrastructure with integrated storage, intelligent grid logic, and predictive management. Each asset is optimized for output, resilience, and long-term strategic value.'
        },
        {
            title: 'How We Operate',
            text: 'We act as developers with the mindset of energy system architects. Our team combines deep expertise in clean energy with the rigor of infrastructure investment. Every project is designed for future scalability, regulatory compliance, and climate alignment. The result: Energy systems that scale fast, operate reliably, and drive the shift to net-zero.'
        }
    ]

    const bottomEls = [
        {
            title: 'Renewable Energy Infrastructure',
            text: 'We develop and operate industrial-scale solar and wind power plants in strategically critical regions. Our projects are designed with a focus on energy efficiency, grid stability, and long-term generation reliability.',
            left: true
        },
        {
            title: 'Battery Storage & Smart Grid Systems',
            text: 'We invest in energy storage systems and interactive grid management technologies — ensuring load balancing, energy availability, and optimized renewable supply during peak demand periods.',
            left: false
        },
        {
            title: 'Next-Gen Green Technologies',
            text: 'Our portfolio includes pilot and commercial deployments of hydrogen, green ammonia, and carbon-neutral thermal systems — focused on the next generation of low-carbon solutions.',
            left: true
        },
        {
            title: 'ESG Integration & Energy Agreements',
            text: 'All our assets operate under long-term power purchase agreements (PPAs) or national energy programs. Our strategy aligns with global ESG targets, ensuring investments with environmental impact and stable long-term returns.',
            left: false
        }
    ]

    return (
        <>

            <SubPageDecor
                frameCount={110}
                basePath={'/sectorsSequences/GreenLarge/'}
            />
            <HeaderHeroPageEl bg={'/1.webp'} title={'Green Energy'} text={'Investing in the Future of Clean Energy'} description={'Since 2017, we’ve been investing in scalable, resilient energy infrastructure — including industrial-scale solar power plants, onshore and offshore wind farms, battery storage systems, and hydrogen facilities.'} description2={'Our mission is to accelerate the transition to renewable energy sources by building clean energy platforms that ensure long-term efficiency, environmental sustainability, and global impact.'} smallTitle />
            <div className='GreenEnergy container'>
                <div className='GreenEnergy_content'>
                    {
                        els.map((el, index) => (
                            <TextBlock title={el.title} text={el.text} key={`TextBlock_${index}`} />
                        ))
                    }
                </div>
                <BlockTitle text1={'What We Build in'} text2={'Clean Energy'} />
                <div className='GreenEnergy_content'>
                    {
                        bottomEls.map((el, index) => (
                            <BlockWithLines title={el.title} text={el.text} text2={el.text2} left={el.left} index={index + 1} key={`BlockWithLines_${index}`} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}