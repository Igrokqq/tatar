import BlockTitle from '../../components/BlockTitle/BlockTitle';
import BlockWithLines from '../../components/BlockWithLines/BlockWithLines';
import HeaderHeroPageEl from '../../components/HeaderHeroPageEl/HeaderHeroPageEl';
import SubPageDecor from '../../components/SubPageDecor/SubPageDecor';
import './Digital.scss';
export default () => {

    const els = [
        {
            title: 'Investments in Technological Infrastructure',
            text: 'The company allocates resources to build scalable, reliable IT systems — including proprietary tools for management, software platforms, and network solutions.',
            left: true
        },
        {
            title: 'In-House Product Development',
            text: 'Custom systems for automation are created — tools for incident management, operations tracking, and financial process monitoring.',
            text2: 'Example: The proprietary platform IBERIO, functioning as the company`s digital `Operational Brain`',
            left: false
        },
        {
            title: 'Focus on Scalability and Adaptability',
            text: 'All IT solutions are built for long-term stability, ease of scaling, reliable performance under high loads, and flexibility in constantly evolving business environments.',
            left: true
        },
        {
            title: 'Integration of AI and LLMs',
            text: 'The company develops and deploys its own large language models (LLMs) and AI systems for business logic automation, data analysis, and decision optimization.',
            left: false
        },
        {
            title: 'Corporate Client Support and B2B Systems',
            text: 'Targeted towards large corporate partners in need of tailored IT solutions and full-scale digital infrastructure deployment.',
            left: true
        }
    ]

    return (
        <>
            <SubPageDecor
                frameCount={105}
                basePath={'/sectorsSequences/DigitalLarge/'}
            />
            <HeaderHeroPageEl bg={'/1.webp'} title={'Digital'} text={'Expanding the Backbone of the Digital Economy'} description={'We’ve been building our digital infrastructure since 2016 — systematically, purposefully, and always with a product-first mindset. Today, we invest in and develop broadband networks, fiber-optic systems, cloud platforms, and AI-driven tools that serve as critical infrastructure for the next generation of global business.'} />
            <div className='Digital container'>
                <BlockTitle text1={'Our IT Focus'} />
                <div className='Digital_content'>
                    {
                        els.map((el, index) => (
                            <BlockWithLines title={el.title} text={el.text} text2={el.text2} left={el.left} index={index + 1} key={`BlockWithLines_${index}`} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}