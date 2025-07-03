import { makeAutoObservable } from 'mobx';

class MMStore {
    show = false;
    title = '';
    position = '';
    description1 = '';
    description2 = '';
    description3 = '';

    constructor() {
        makeAutoObservable(this);
    }

}

export const mmStore = new MMStore();