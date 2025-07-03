import { observer } from 'mobx-react-lite';
import { themeStore } from '../../stores/themeStore';
import './ThemeChanger.scss';

export default observer(() => {
    const isLight = themeStore.isLight;

    return (
        <div className='ThemeChanger' onClick={() => themeStore.toggle()}>
            <img src={isLight ? '/img/light.svg' : '/img/dark.svg'} alt="" />

        </div>
    );
});
