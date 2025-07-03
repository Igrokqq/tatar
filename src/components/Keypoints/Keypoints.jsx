import { observer } from 'mobx-react-lite';
import './Keypoints.scss';
import KeypointsEl from './KeypointsEl/KeypointsEl';
import { useTranslation } from 'react-i18next';

export default observer(() => {
    const { t } = useTranslation();

    return (
        <div className='Keypoints container mt_xl'>
            <div className='Keypoints_title fsw_m fs_3xl'>
                {t('keypoints.title')}
            </div>
            <div className='Keypoints_content mt_m'>
                <KeypointsEl
                    title={t('keypoints.sicherheit_title')}
                    text={t('keypoints.sicherheit_text')}
                />
                <KeypointsEl
                    title={t('keypoints.sicherheit_title2')}
                    text={t('keypoints.sicherheit_text2')}
                />
                <KeypointsEl
                    title={t('keypoints.sicherheit_title3')}
                    text={t('keypoints.sicherheit_text3')}
                />
            </div>
        </div>
    );
})
