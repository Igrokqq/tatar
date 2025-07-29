import SubPageDecor from '../../components/SubPageDecor/SubPageDecor';
import './Energy.scss';
import HeadingHeroPageEl from "../../components/HeadingHeroPageEl/HeadingHeroPageEl.jsx";
import BlockDividerText from "../../components/BlockDividerText/BlockDividerText.jsx";
import SubPagePlayer from "../../components/SubPageDecor/SubPagePlayer.jsx";
import BlockWithText from "../../components/BlockWithText/BlockWithText.jsx";
export default () => {
    const els = [
        {
            title: 'Foundational Energy Infrastructure',
            text: 'Critical oil, gas, and thermal assets supporting national grids — engineered for longevity, capacity, and geopolitical resilience.',
            left: true
        },
        {
            title: 'Integrated Control & Load Systems',
            text: 'Advanced platforms orchestrating energy flows across regions — minimizing losses and maximizing operational uptime.',
            left: false
        },
        {
            title: 'Adaptive Thermal & LNG Platforms',
            text: 'Next-gen modular terminals and co-gen units designed to flex between traditional supply and transition-ready use cases.',
            left: true
        },
        {
            title: 'Energy Sovereignty Agreements',
            text: 'Strategic collaborations ensuring domestic supply, infrastructure independence, and stable returns through long-term contracts.',
            left: false
        }
    ]

    return (
      <>
          <SubPageDecor
            frameCount={114}
            basePath={'/sectorsSequences/EnergyLarge/'}
          />
          <HeadingHeroPageEl title={'Energy'}/>
          <BlockDividerText
            className={'Energy'}
            center
            title={'Building Reliable Traditional Energy Systems'}
            text={'Financing critical oil, gas, and power infrastructure to support industrial growth, energy security, and operational stability.'}
          />
          <div className='Energy container'>
              <SubPagePlayer
                src="/video/Energy_loop.mp4"
              />
              <div className='Energy_content'>
                  <div className='Energy_info mt_xl'>
                      {
                          els.map((el, index) => (
                            <BlockWithText className={'Energy'} title={el.title} text={el.text} text2={el.text2} left={el.left}
                                           index={index + 1} key={`BlockWithLines_${index}`}/>
                          ))
                      }
                  </div>

              </div>
          </div>
      </>
    )
}