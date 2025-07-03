import { useRef, useState } from 'react';
import './Sectors.scss';
import SectorsElement from "./SectorsElement";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import BlockTitle from '../BlockTitle/BlockTitle';


const totalElements = 6;
const oneElTimePart = 1 / (totalElements - 1);
const offset = .1
const animDuration = .4

export default () => {

    const [sliderProgress, setsliderProgress] = useState(0);
    const scope = useRef(null);

    useGSAP(() => {
        gsap.to('.Sectors', {
            y: '0px',
            ease: 'none',
            scrollTrigger: {
                trigger: '.Sectors_wrapper',
                scrub: 0,
                // markers: true,
                pin: '.Sectors_wrapper',
                pinSpacing: false,
                start: 'top 0%',
                end: 'bottom 100%',

                onUpdate: self => {
                    setsliderProgress(self.progress);
                }
            }
        });
    }, { scope });


    return (
        <div className='Sectors_gsap' ref={scope}>
            <div className='Sectors_wrapper' style={{
                height: `${totalElements * 60}vh`
            }}>
                <div className='Sectors container' >
                    {/* NEED TRANSLATE */}
                    {/* <div className='Sectors_header  fsw_m fs_3xl'>
                        Our Investment Sectors
                    </div> */}
                    {/* NEED TRANSLATE */}
                    <div className='Sectors_headerAndProgress'>
                        <BlockTitle text1={'Our Investment Sectors'} />
                        <div className='Sectors_progressBar'>
                            <div className='Sectors_progressBar_inner' style={{
                                width: `${100 * sliderProgress}%`
                            }}></div>
                        </div>
                    </div>
                    <div className='Sectors_content'>
                        {
                            [
                                // СТРОГО НЕ МЕНЯТЬ ПОСЛЕДОВАТЕЛЬНОСТЬ
                                {
                                    seq: 'RealEstate',
                                    title: 'Real Estate',
                                    text: 'From acquisition and financing to rental and asset management — we are involved in every detail.',
                                    href: 'RealEstate'
                                },
                                {
                                    seq: 'Digital',
                                    title: 'Digital',
                                    text: 'Our investments include broadband networks, fiber-optic systems, and data centers, forming the backbone of the digital economy.',
                                    href: 'Digital'
                                },
                                {
                                    seq: 'Telecom',
                                    title: 'Telecommunication',
                                    text: 'We invest in mobile networks, data centers, and fiber optics to support global connectivity and digital growth.',
                                    href: 'Telecomunication'
                                },
                                {
                                    seq: 'Energy',
                                    title: 'Energy',
                                    text: 'We invest in traditional energy systems, including gas pipelines, storage facilities, and power grids to ensure long-term stability and energy security.',
                                    href: 'Energy'
                                },
                                {
                                    seq: 'Green',
                                    title: 'Green Energy',
                                    text: 'We support the transition to clean energy by investing in solar, wind, and hydroelectric infrastructure — enhancing sustainability, reducing emissions, and building a resilient energy future.',
                                    href: 'GreenEnergy'
                                },
                                {
                                    seq: 'Water',
                                    title: 'Water',
                                    text: 'Water treatment plants, waste disposal systems, and supply networks to support urban growth and industrial efficiency.',
                                    href: 'Water'
                                },
                            ].map((el, index) => {

                                let riseFrom = offset + oneElTimePart * (index - 1);
                                let riseTo = offset + oneElTimePart * (index - (1 - animDuration));
                                let fallFrom = offset + oneElTimePart * (index);
                                let fallTo = offset + oneElTimePart * (index + animDuration);
                                // console.log(`ind: ${index} rf:${riseFrom.toFixed(2)} rt:${riseTo.toFixed(2)} ff:${fallFrom.toFixed(2)} ft:${fallTo.toFixed(2)}`);

                                let yDelta = 200;

                                // default
                                let sOpacity = 0;
                                let y = 0;


                                if (sliderProgress < riseFrom) {
                                    sOpacity = 0;
                                    y = yDelta;
                                }
                                if (sliderProgress >= riseFrom && sliderProgress < riseTo) {
                                    const percentProgressOnThisSprint = getPercentageBetween(riseFrom, riseTo, sliderProgress)
                                    y = yDelta * (1 - percentProgressOnThisSprint);
                                    sOpacity = percentProgressOnThisSprint;
                                }
                                if (sliderProgress >= riseTo && sliderProgress < fallFrom) {
                                    y = 0
                                    sOpacity = 1
                                }
                                if (sliderProgress >= fallFrom && sliderProgress < fallTo) {
                                    const percentProgressOnThisSprint = getPercentageBetween(fallFrom, fallTo, sliderProgress)
                                    y = yDelta * percentProgressOnThisSprint
                                    sOpacity = 1 - percentProgressOnThisSprint;
                                }
                                if (sliderProgress >= fallTo) {
                                    y = yDelta
                                    sOpacity = 0
                                }

                                // if (index !== 1) {
                                //     sOpacity = 0
                                // }

                                return <div className='Sectors_element free_img' style={{
                                    opacity: sOpacity,
                                    transform: `translate(0px, ${y}px)`,
                                    pointerEvents: sOpacity === 1 ? 'all' : 'none'
                                }}>
                                    <SectorsElement
                                        seq={el.seq}
                                        title={el.title}
                                        text={el.text}
                                        href={el.href}
                                    />
                                </div>
                            })
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

const getPercentageBetween = (from, to, value) => {
    const t = (value - from) / (to - from);
    const clamped = Math.max(0, Math.min(1, t));
    return clamped < 0.5
        ? 2 * clamped * clamped
        : 1 - Math.pow(-2 * clamped + 2, 2) / 2;
};
