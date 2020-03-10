import { Injectable } from '@angular/core';
import { WindowRefService } from './window.service';

@Injectable()
export class SmoothScrollService {
    private win: Window;

    constructor(
        private _windowRef: WindowRefService) {
        this.win = _windowRef.nativeWindow;
    }

    public scrollTo(yPoint: number, duration: number) {
        setTimeout(() => {
            this.win.window.scrollTo(0, yPoint);
        }, duration);
        return;
    }

    public scrollWithinElement(scrollingElementID, topOffset) {

        const element = document.getElementById(scrollingElementID);
        if (element) {
            element.scrollTop = topOffset;
        }
    }

    public smoothScrollToElement(eID) {
        let stopY = elmYPosition(eID);
        this.smoothScroll(stopY);
    }

    public smoothScroll(stopY){
        let startY = currentYPosition();
        let distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            this.win.window.scrollTo(0, stopY); return;
        }
        let speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        let step = Math.round(distance / 100);
        let leapY = stopY > startY ? startY + step : startY - step;
        let timer = 0;
        if (stopY > startY) {
            for (let i = startY; i < stopY; i += step) {
                this.scrollTo(leapY, timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for (let i = startY; i > stopY; i -= step) {
            this.scrollTo(leapY, timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
    }

    public getCurrentScrollPosition(): number {
        return currentYPosition();
    }
}

function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(eID) {
    let elm = document.getElementById(eID);
    let y = elm.offsetTop;
    let node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = <HTMLElement>node.offsetParent;
        y += node.offsetTop;
    } return y;
}