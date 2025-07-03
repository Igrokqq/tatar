import { observer } from 'mobx-react-lite';
import './languageChange.scss';
import languageStore from '../../stores/languageStore';
import { themeStore } from '../../stores/themeStore';


export default observer(() => {
  const { language, setLanguage } = languageStore;

  return (
    <div className={`languageChange ${!themeStore.isLight && 'languageChange_dark'}`}>
      <div
        className={`languageChange_el ${language === 'en' ? 'languageChange_el_active' : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </div>
      <div
        className={`languageChange_el ${language === 'de' ? 'languageChange_el_active' : ''}`}
        onClick={() => setLanguage('de')}
      >
        DE
      </div>
    </div>
  );
});