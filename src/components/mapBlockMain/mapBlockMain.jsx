import { Link } from 'react-router-dom';
import MapNumBlock from '../mapNumBlock/mapNumBlock';
import './mapBlockMain.scss';
export default () => {

    const els = [
        {
            title: 'Strategic Focus',
            text: 'Creating long-term, stable value.',
        },
        {
            title: 'Real Estate',
            text: 'Investments across Germany in the real estate sector.',
            small: true
        },
        {
            title: 'Hospitality',
            text: 'Operating a nationwide network of restaurants.',
            small: true
        },
        {
            title: 'Technology & Venture Capital',
            text: 'Supporting IT companies within the holding through a dedicated venture capital division.',
            width: true
        }
    ]

    return (
        <div className='mapBlockMain'>
            <Link to={'/AboutUs'} className='mapBlockMain_map'>
                <img src="./minimap.webp" alt="" />
            </Link>
            <div className='mapBlockMain_content'>
                <div className='mapBlockMain_content_top'>
                    {
                        els.slice(0, 2).map((el, index) => (
                            <MapNumBlock index={index} title={el.title} text={el.text} key={`MapNumBlock_${index}`} />
                        ))
                    }
                </div>
                <div className='mapBlockMain_content_bottom'>
                    {
                        els.slice(2, 4).map((el, index) => (
                            <MapNumBlock index={index + 2} title={el.title} text={el.text} small={el.small} key={`MapNumBlock_${index + 2}`} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}