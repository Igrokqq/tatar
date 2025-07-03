import { observer } from 'mobx-react-lite';
import './ScrollDown.scss';
import { useTranslation } from 'react-i18next';

export default observer(() => {
    const { t } = useTranslation();

    return (
        <div className='Hero_content_right_content'>
            {t('scroll_down')}
            <img src="/img/arrowDown.svg" alt="" />
        </div>
    )
})
