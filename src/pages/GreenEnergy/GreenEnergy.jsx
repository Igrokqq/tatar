import './GreenEnergy.scss';
import SubPageDecor from '../../components/SubPageDecor/SubPageDecor';
import HeadingHeroPageEl from "../../components/HeadingHeroPageEl/HeadingHeroPageEl.jsx";
import BlockDividerText from "../../components/BlockDividerText/BlockDividerText.jsx";
import SubPagePlayer from "../../components/SubPageDecor/SubPagePlayer.jsx";
import BlockWithText from "../../components/BlockWithText/BlockWithText.jsx";
export default () => {
    const els = [
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
            frameCount={105}
            basePath={'/sectorsSequences/GreenLarge/'}
          />
          <HeadingHeroPageEl title={'Green Energy'}/>
          <BlockDividerText
            className={'GreenEnergy'}
            center
            title={'Driving Scalable Renewable Power'}
            text={'We fund solar, wind, battery, and hydrogen platforms — targeting efficiency, sustainability, and global impact.'}
          />
          <div className='GreenEnergy container'>
              <SubPagePlayer
                forwardSrc="/video/Green_energy.mp4"
                reverseSrc="/video/reverse_Green_energy.mp4"
              />
              <div className='GreenEnergy_content'>
                  <div className='GreenEnergy_info mt_xl'>
                      {
                          els.map((el, index) => (
                            <BlockWithText className={'GreenEnergy'} title={el.title} text={el.text} text2={el.text2} left={el.left}
                                           index={index + 1} key={`BlockWithLines_${index}`}/>
                          ))
                      }
                  </div>

              </div>
          </div>
      </>
    )
}