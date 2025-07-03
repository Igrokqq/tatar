import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import WhiteBtn from '../../../components/WhiteBtn/WhiteBtn';
import './CareerEl.scss';


const CareerEl = ({ title, type, date, short, description, task, profile, weOffer, }) => {
  const { t } = useTranslation();
  const [openTask, setopenTask] = useState(false);
  const [openProfile, setopenProfile] = useState(false);
  const [openWeOffer, setopenWeOffer] = useState(false);



  return (
    <div className={`CareerEl open`}>
      <div className='CareerEl_left gradienBlock'>
        <div className='CareerEl_left_title fs_xl fsw_m'>
          {title}
          <div className='CareerEl_left_title_type fs_m fsw_s'>{type}</div>
        </div>
        <div className={`CareerEl_left_content expanded`}>
          <div className='CareerEl_left_short fs_m fsw_s'>{short}</div>
          <div className='CareerEl_left_description fs_m fsw_s'>{description}</div>
          <div className='CareerEl_left_btn'>
            <WhiteBtn title={t('apply')} />
          </div>
        </div>
      </div>

      <div className='CareerEl_right'>
        <div className='CareerEl_right_title fs_m fsw_s'>{date}</div>
        <div className={`CareerEl_right_content expanded`}>
          <div className='CareerEl_right_content_el' onClick={() => { setopenTask(!openTask) }}>
            <div className='CareerEl_right_content_el_name'>
              <div className='CareerEl_right_content_el_name_text fs_m fsw_s'>
                {t('task')}
              </div>
              <img src="/img/arrow.svg" className={`CareerEl_right_content_el_name_arrow ${openTask && 'CareerEl_right_content_el_name_arrow_open'}`} alt="" />
            </div>

            <div className={`CareerEl_right_content_el_add ${openTask && 'CareerEl_right_content_el_add_open'}`}>
              {task.map((el, index) => {
                return <div className='CareerEl_right_content_el_add_el fs_s fsw_s'>
                  {el}
                </div>
              })}
            </div>

            <div className='CareerEl_right_content_el_line'></div>
          </div>
          <div className='CareerEl_right_content_el' onClick={() => { setopenProfile(!openProfile) }}>
            <div className='CareerEl_right_content_el_name'>
              <div className='CareerEl_right_content_el_name_text fs_m fsw_s'>
                {t('profile')}
              </div>
              <img src="/img/arrow.svg" className={`CareerEl_right_content_el_name_arrow ${openProfile && 'CareerEl_right_content_el_name_arrow_open'}`} alt="" />
            </div>

            <div className={`CareerEl_right_content_el_add ${openProfile && 'CareerEl_right_content_el_add_open'}`}>
              {profile.map((el, index) => {
                return <div className='CareerEl_right_content_el_add_el fs_s fsw_s'>
                  {el}
                </div>
              })}
            </div>

            <div className='CareerEl_right_content_el_line'></div>
          </div>
          <div className='CareerEl_right_content_el' onClick={() => { setopenWeOffer(!openWeOffer) }}>
            <div className='CareerEl_right_content_el_name'>
              <div className='CareerEl_right_content_el_name_text fs_m fsw_s'>
                {t('we_offer')}
              </div>
              <img src="/img/arrow.svg" className={`CareerEl_right_content_el_name_arrow ${openWeOffer && 'CareerEl_right_content_el_name_arrow_open'}`} alt="" />
            </div>
            <div className={`CareerEl_right_content_el_add ${openWeOffer && 'CareerEl_right_content_el_add_open'}`}>
              {weOffer.map((el, index) => {
                return <div className='CareerEl_right_content_el_add_el fs_s fsw_s'>
                  {el}
                </div>
              })}
            </div>
            <div className='CareerEl_right_content_el_line'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerEl;
