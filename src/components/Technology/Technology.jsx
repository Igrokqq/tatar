import BlockTitle from '../BlockTitle/BlockTitle';
import './Technology.scss';
import TechnologyEl from './TechnologyEl/TechnologyEl';
export default () => {

    const elements = [
        {
            title: 'Stability',
            text: 'Transaction security is our top priority.',
            bg: '/1.webp'
        },
        {
            title: 'Security',
            text: 'We are financially strong and can therefore carry out real estate purchases quickly and independently of banks.',
            bg: '/2.webp'
        },
        {
            title: 'Agility',
            text: 'We are straightforward and acquire properties without unnecessary bureaucracy.',
            bg: '/3.webp'
        },
    ]

    return (
        <div className='Technology container'>
            <div className='Technology_header fsw_m fs_3xl'>
                {/* NEED TRANSLATE */}

                <BlockTitle text1={'Our real estate'} />

            </div>
            <div className='Technology_content'>
                {
                    elements.map((el, index) => (
                        <TechnologyEl key={`TechnologyEl_${index}`} title={el.title} text={el.text} background={el.bg} />
                    ))
                }
            </div>
        </div >
    )
}