import { useEffect, useRef } from 'react';
import './Water.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SubPageDecor from '../../components/SubPageDecor/SubPageDecor';
import HeadingHeroPageEl from "../../components/HeadingHeroPageEl/HeadingHeroPageEl.jsx";
import BlockDividerText from "../../components/BlockDividerText/BlockDividerText.jsx";
import SubPagePlayer from "../../components/SubPageDecor/SubPagePlayer.jsx";
import BlockWithText from "../../components/BlockWithText/BlockWithText.jsx";

gsap.registerPlugin(ScrollTrigger);
export default () => {
    const els = [
        {
            title: 'Clean Water Infrastructure',
            text: 'We develop and operate large-scale water treatment plants, desalination units, and municipal pipelines across urban and industrial zones. Our projects are designed for long-term operational reliability, environmental safety, and stable water supply.',
            left: true
        },
        {
            title: 'Smart Water Management & Monitoring',
            text: 'We invest in digital monitoring systems, pressure control tools, and leak detection platforms to improve efficiency, reduce loss, and maintain consistent water flow during peak demand and environmental stress.',
            left: false
        },
        {
            title: 'Innovative Water Reuse & Circular Systems',
            text: 'Our portfolio includes gray water reuse systems, rainwater harvesting, and pilot filtration technologies — with a focus on regenerative water solutions for the next generation of city infrastructure.',
            left: true
        },
        {
            title: 'Water Access & Resilience Partnerships',
            text: 'Global and municipal collaborations ensuring long-term access, climate resilience, and equitable water distribution.',
            left: false
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
          <HeadingHeroPageEl title={'Water'}/>
          <BlockDividerText
            className={'Water'}
            center
            title={'Scaling Water Treatment Infrastructure'}
            text={'Backing purification plants and utility-scale systems that deliver clean water with long-term reliability and environmental impact.'}
          />
          <div className='Water container'>
              <SubPagePlayer
                src="/video/Water_loop.mp4"
              />
              <div className='Water_content'>
                  <div className='Water_info mt_xl'>
                      {
                          els.map((el, index) => (
                            <BlockWithText className={'Water'} title={el.title} text={el.text} text2={el.text2} left={el.left}
                                           index={index + 1} key={`BlockWithLines_${index}`}/>
                          ))
                      }
                  </div>

              </div>
          </div>
      </>
    )
}