import BlockTitle from '../../components/BlockTitle/BlockTitle';
import HeadingHeroPageEl from "../../components/HeadingHeroPageEl/HeadingHeroPageEl.jsx";
import SubPageDecor from '../../components/SubPageDecor/SubPageDecor';
import SubPagePlayer from "../../components/SubPageDecor/SubPagePlayer.jsx";
import './Digital.scss';
import BlockWithText from "../../components/BlockWithText/BlockWithText.jsx";
import { useTranslation } from "react-i18next";
import BlockDividerText from "../../components/BlockDividerText/BlockDividerText.jsx";
import { themeStore } from "../../stores/themeStore.js";
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
    ]

    return (
        <>
            <SubPageDecor
                frameCount={105}
                basePath={'/sectorsSequences/DigitalLarge/'}
            />
            <HeadingHeroPageEl title={'Digital'} smallTitle={'Hello'} />
            <BlockDividerText
              center
              title={'Algorithms, Scalability, and Infinite Possibility'}
              text={'We back technologies that boost efficiency and build resilient businesses. IBERIO reflects our approach-scalable software that combines\n' +
                'adaptability with performance.'}
            />
            <div className='Digital container'>
                <SubPagePlayer
                  forwardSrc="/video/Digital.mp4"
                  reverseSrc="/video/reverse_Digital.mp4"
                />
                <div className='Digital_content'>
                    <div className='Digital_info mt_xl'>
                        {
                            els.map((el, index) => (
                              <BlockWithText title={el.title} text={el.text} text2={el.text2} left={el.left}
                                             index={index + 1} key={`BlockWithLines_${index}`}/>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}