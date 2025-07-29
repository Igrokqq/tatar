import SubPageDecor from '../../components/SubPageDecor/SubPageDecor';
import './Telecommunication.scss';
import HeadingHeroPageEl from "../../components/HeadingHeroPageEl/HeadingHeroPageEl.jsx";
import BlockDividerText from "../../components/BlockDividerText/BlockDividerText.jsx";
import SubPagePlayer from "../../components/SubPageDecor/SubPagePlayer.jsx";
import BlockWithText from "../../components/BlockWithText/BlockWithText.jsx";
export default () => {
    const els = [
        {
            title: 'Core Telecom Infrastructure',
            text: 'Fiber networks, towers, and data highways designed to support digital growth, latency-free connectivity, and regional integration.',
            left: true
        },
        {
            title: 'Dynamic Network Intelligence',
            text: 'AI-driven systems optimizing bandwidth, managing network loads, and predicting disruptions across complex telecom grids.',
            left: false
        },
        {
            title: 'Scalable Edge & Satellite Systems',
            text: 'Low-orbit satellite constellations and edge nodes expanding coverage, enabling real-time communication across remote zones.',
            left: true
        },
        {
            title: 'Sovereign Digital Access Agreements',
            text: 'Cross-sector alliances delivering national connectivity goals, infrastructure security, and inclusive digital development through long-term public-private models.',
            left: false
        }
    ]

    return (
      <>
          <SubPageDecor
            frameCount={97}
            basePath={'/sectorsSequences/TelecomLarge/'}
          />
          <HeadingHeroPageEl title={'Telecommunication'}/>
          <BlockDividerText
            className={'Telecom'}
            center
            title={'Expanding Critical Telecommunication Networks'}
            text={'Investing in fiber, satellite, and 5G infrastructure to enable seamless connectivity, digital inclusion, and national-scale data resilience.'}
          />
          <div className='Telecom container'>
              <SubPagePlayer
                src="/video/Telecom_loop.mp4"
              />
              <div className='Telecom_content'>
                  <div className='Telecom_info mt_xl'>
                      {
                          els.map((el, index) => (
                            <BlockWithText className={'Telecom'} title={el.title} text={el.text} text2={el.text2} left={el.left}
                                           index={index + 1} key={`BlockWithLines_${index}`}/>
                          ))
                      }
                  </div>

              </div>
          </div>
      </>
    )
}