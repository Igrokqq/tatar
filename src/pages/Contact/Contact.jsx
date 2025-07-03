import { useState } from 'react';
import './Contact.scss';
import ContactInput from './ContactInput/ContactInput';
import { useTranslation } from 'react-i18next';
import WhiteBtn from '../../components/WhiteBtn/WhiteBtn';
import PageHeader from '../../components/PageHeader/PageHeader';

export default () => {
  const { t } = useTranslation();

  const [checkbox, setcheckbox] = useState(false);

  const els = [
    {
      title: t('chat_to_sales'),
      text: 'Thunder614@gmail.com'
    },
    {
      title: t('contact_us'),
      text: '+9190-8687-3345-178'
    },
    {
      title: t('location'),
      text: t('location_text') // перевод для New york, USA
    }
  ];

  return (
    <div className='Contact container'>
      <PageHeader text={t('contact')} />
      <div className='Contact_content mt_l'>
        <form action="SUBMIT" className='Contact_content_form gradienBlock'>
          <div className='Contact_content_form_title fsw_m fs_l'>
            {t('send_message')}
          </div>
          <div className='Contact_content_form_conect'>
            <ContactInput type='text' placeholder={t('you_first_name')} />
            <ContactInput type='text' placeholder={t('you_last_name')} />
            <ContactInput type='email' placeholder={t('enter_email')} />
            <ContactInput type='text' placeholder={t('subject')} />
          </div>
          {/* <ContactInput type='text' placeholder={t('subject')} big /> */}
          <textarea name="subject" placeholder={t('subject')} id="" className='fsw_m fs_m'></textarea>
          <div className='Contact_content_form_footer'>
            <div className={`Contact_content_form_footer_checkbox fs_m fsw_s`} onClick={() => { setcheckbox(!checkbox) }}>
              {/* <input type="checkbox" /> */}
              <div className={`Contact_checkbox Contact_checkbox_${checkbox && 'checked'}`}>
                {/*  */}
                {/* <img src="/cross.svg" alt="" /> */}
                <img src="/check.svg" alt="" />
              </div>
              {/* Subscribe to email newsletter. */}
              {t(`newsletter`)}
            </div>
            <div className='Contact_content_form_footer_btn'>
              <WhiteBtn title={t('submit_now')} />
            </div>
          </div>
        </form>
        <div className='Contact_conect'>
          {els.map((el, index) => (
            <div className='Contact_conect_el gradienBlock' key={`Contact_conect_el_${index}`}>
              <div className='Contact_conect_el_title fs_l fsw_m'>{el.title}</div>
              <div className='Contact_conect_el_text fs_m fsw_s'>{el.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
