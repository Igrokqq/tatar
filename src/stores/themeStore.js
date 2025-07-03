import { makeAutoObservable } from 'mobx';

class ThemeStore {
  isLight = true;

  constructor() {
    // загружаем тему из localStorage
    localStorage.setItem('theme', 'dark');

    const saved = localStorage.getItem('theme');
    this.isLight = saved === 'light';

    makeAutoObservable(this);
  }

  toggle = () => {
    this.isLight = !this.isLight;
    localStorage.setItem('theme', this.isLight ? 'light' : 'dark');
  }
}

export const themeStore = new ThemeStore();