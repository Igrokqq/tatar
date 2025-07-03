import { observer } from 'mobx-react-lite';
import './ArrowHeight.scss';
import { themeStore } from '../../stores/themeStore';
export default observer(({ rotate }) => {
    return (
        <div className={`ArrowHeight ${rotate ? 'ArrowHeight_rotate' : ''} ${themeStore.isLight && 'ArrowHeight_light'}`}>
            <img src="/img/arrow.svg" alt="" />
        </div>
    )
})