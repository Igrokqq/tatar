import { makeAutoObservable } from 'mobx';

class MainPageStore {
    currentSlide = -1;
    slidePlaying = false
    direction = 1
    checkScroll = true;

    constructor() {
        makeAutoObservable(this);
    }

    nextSlide() {
        if (this.slidePlaying) return
        this.slidePlaying = true
        this.currentSlide = this.currentSlide + 1
        this.direction = 1
    }

    prevSlide() {
        if (this.slidePlaying) return
        if (this.currentSlide === 0) return
        this.slidePlaying = true
        this.currentSlide = this.currentSlide - 1
        this.direction = -1
    }

    end() {
        this.currentSlide = -1;
    }
}

export const mainPageStore = new MainPageStore();