import FramePlayer from '../FramePlayer/FramePlayer';
import SectorsElement from '../Sectors/SectorsElement';
import LinesElement from './LinesElement';
import './Lines.scss';
import { useState } from 'react';
export default () => {

    const [hovered, sethovered] = useState(-1);

    return (
        <div className='Lines container'>

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
                    // if (index < 3) return <LinesElement index={index} el={el} />
                    return <div
                        onMouseEnter={() => sethovered(index)}
                        onMouseLeave={() => sethovered(-1)}
                        style={{
                            position: 'relative',
                            zIndex: index === 2 ? 9 : index < 3 ? 10 : 0
                        }}
                    >
                        <LinesElement index={index} el={el} hovered={hovered} />
                    </div>
                })
            }


        </div>
    )
}