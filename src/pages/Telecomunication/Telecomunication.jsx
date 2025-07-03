import BlockTitle from '../../components/BlockTitle/BlockTitle';
import HeaderHeroPageEl from '../../components/HeaderHeroPageEl/HeaderHeroPageEl';
import NumBlock from '../../components/NumBlock/NumBlock';
import SubPageDecor from '../../components/SubPageDecor/SubPageDecor';
import TextBlock from '../../components/TextBlock/TextBlock';
import './Telecomunication.scss';
export default () => {

    const els = [
        {
            title: 'Our Foundation: Global Connectivity',
            text: 'From terrestrial fiber-optic lines to mobile towers and satellites — we design and operate telecom infrastructure that supports the modern connected world. Our networks are engineered for high-speed, low-latency data delivery at planetary scale — ensuring reliability and long-term efficiency across sectors.'
        },
        {
            title: 'What Sets Us Apart: Intelligent Network Design',
            text: 'We don’t just deploy telecom assets — we architect smart, modular systems. Our focus is scalable infrastructure with edge computing integration, efficient spectrum use, and seamless global interoperability. Each deployment is evaluated by access level, coverage potential, and strategic placement value. We operate like telcos — but think like infrastructure architects.'
        },
        {
            title: 'Our Team: Precision Meets Scale',
            text: 'We unite telecom engineering expertise with the precision of institutional investment. Each asset we build is optimized for redundancy, compliance, and future scalability. The result: communication networks that adapt quickly, scale globally, and demonstrate unmatched reliability.'
        }
    ]

    const numEl = [
        {
            title: 'Critical Communications Infrastructure',
            text: 'We invest in the foundation of global connectivity — including backbone fiber-optic lines, mobile tower networks, and satellite channels — with a focus on high availability, resilience, and reliability. Our systems serve enterprises, the public sector, and megacity infrastructure.'
        },
        {
            title: 'Spectrum, 5G & Edge Technologies',
            text: 'Our portfolio includes highly efficient, low-latency communication technologies tailored for both urban and remote regions. From 5G logistics to edge frameworks — we support systems that move data faster and more securely.'
        },
        {
            title: 'IoT Networks and Embedded Systems',
            text: 'We develop infrastructure for connected devices and sensor ecosystems — from smart cities to manufacturing and autonomous systems. Our priority: systems that generate real-time data and enable instant response.'
        },
        {
            title: 'Spectrum, 5G & Edge Technologies',
            text: 'Our portfolio includes highly efficient, low-latency communication technologies tailored for both urban and remote regions. From 5G logistics to edge frameworks — we support systems that move data faster and more securely.'
        }
    ]

    return (
        <>
            <SubPageDecor
                frameCount={97}
                basePath={'/sectorsSequences/TelecomLarge/'}
            />
            <div className='Telecomunication'>
                <>
                    <HeaderHeroPageEl bg={'/1.webp'} title={'Telecommunication'} text={'Strengthening the Arteries of a Connected World'} description={'Since 2018, we’ve been investing in next-generation connectivity infrastructure — building reliable, high-speed systems at the core of digital transformation across industries.'} description2={'From submarine cables and 5G towers to edge networks and IoT integrations — our telecom assets ensure global-scale connectivity and deliver long-term value.'} smallTitle />
                    <div className='Telecomunication container'>
                        <div className='Telecomunication_content'>
                            {
                                els.map((el, index) => (
                                    <TextBlock title={el.title} text={el.text} key={`TextBlock_${index}`} />
                                ))
                            }
                        </div>
                        <BlockTitle text1={'Guiding Principles'} text2={'in Telecom'} />
                        <div className='Telecomunication_num'>
                            {
                                numEl.map((el, index) => (
                                    <NumBlock index={index + 1} title={el.title} text={el.text} />
                                ))
                            }
                        </div>
                    </div>
                </>
            </div>
        </>

    )
}