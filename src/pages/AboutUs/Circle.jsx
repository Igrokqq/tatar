import { observer } from 'mobx-react-lite';
import './Circle.scss';
import { themeStore } from '../../stores/themeStore';
export default observer(() => {
    return (
        <div className='Circle'>
            <div className='Circle_center_wrapper free_img'>
                <div className={`Circle_center ${themeStore.isLight && 'Circle_center_dark'}`}></div>
            </div>
            <div className='Circle_line_wrapper free_img'>
                <div className={`Circle_line ${themeStore.isLight && 'Circle_line_dark'} Circle_line_1`}></div>
            </div>
            <div className='Circle_line_wrapper free_img'>
                <div className={`Circle_line ${themeStore.isLight && 'Circle_line_dark'} Circle_line_2`}></div>
            </div>
        </div>
    )
})