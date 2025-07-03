import { makeAutoObservable } from 'mobx';
import i18n from '../i18n';

class LanguageStore {
  language = 'en';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setLanguage(lang) {
    console.log('Changing language to:', lang);
    this.language = lang;
    i18n.changeLanguage(lang);
  }
}

const languageStore = new LanguageStore();
export default languageStore;