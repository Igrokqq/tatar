import { makeAutoObservable } from 'mobx';

class ModalStore {
  isOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
  off() {
    this.isOpen = false;
  }
}

export const modalStore = new ModalStore();