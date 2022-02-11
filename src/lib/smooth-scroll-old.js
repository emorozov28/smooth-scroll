export class SmoothScroll {
    constructor(selector, {
        speed = 300
    }) {

        // console.log(selector);
        // console.log(speed);

        this.selector = selector;
        this.speed = speed;

        this.anchorLink = [...document.querySelectorAll('a[href*="#"]')];
        this.anchorSelector = [...document.querySelectorAll('.js-scroll-link')];

        this.self = '';
        this.isScroll = true;


        this.init();
    }

    init() {
       
    }

    innerSmoothScroll() {
        // console.log(this.self);
        if (!this.self.hasAttribute('href') && !this.self.hasAttribute('data-scroll-href')) return;

        if(!this.isScroll) return;
        this.isScroll = false;

        const fixElem = document.querySelector(this.selector) ? document.querySelector(this.selector).offsetHeight : '';
        const href = this.self.getAttribute('href') || this.self.getAttribute('data-scroll-href');

        const block = this.searchBlock(href);
        const coordBlock = this.getCoords(block);
        let positionUser = parseInt(window.pageYOffset);
        const distance = Math.round(Math.abs(coordBlock - positionUser) / 100 * (this.speed / 100));
        // const distance = this.speed < 0.5 ? 2 * this.speed * this.speed : -1 + (4 - 2 * this.speed) * this.speed;

        if (Math.round(positionUser) === Math.round(coordBlock - fixElem)) {
            return;
        } else if (positionUser <= (coordBlock - fixElem)) {
            let aaa = positionUser;
            window.scrollTo(0, aaa);

            const scrollDown = setInterval( () => {
                positionUser > (coordBlock - fixElem) ?
                    positionUser += 1 :
                    positionUser += distance
                window.scroll(0, positionUser - fixElem);
                if (positionUser >= coordBlock) {
                    clearInterval(scrollDown);
                };
            }, 20);

        } else {
            window.scrollTo(0, positionUser);
            const scrollUp = setInterval( () => {
                positionUser < (coordBlock + fixElem) ?
                    positionUser -= 1 :
                    positionUser -= distance;
                window.scroll(0, positionUser - fixElem);
                if (positionUser <= coordBlock) {
                    clearInterval(scrollUp);
                };
            }, 20);
        }

        setTimeout(() => {
            this.isScroll = true;
            console.log(this.isScroll);

        }, this.speed * 1.2)
    }

    searchBlock(selector) {
        if (!selector) return;
        return document.querySelector(selector) ? document.querySelector(selector) : null;
    }

    getCoords(elem) {
        const box = elem.getBoundingClientRect();
        const body = document.body;
        const docEl = document.documentElement;
        const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        const clientTop = docEl.clientTop || body.clientTop || 0;
        const top = box.top + scrollTop - clientTop;
        return top;
    }

}

// const smoothScroll = function (selector, speed = 300) {

// const anchorLink = [...document.querySelectorAll('a[href*="#"]')];
// const anchorSelector= [...document.querySelectorAll('.js-scroll-link')];

// if(!anchorLink && !anchorSelector) return;

// anchorLink.forEach(item => {
//     item.addEventListener('click', innerSmoothScroll);
// });
// anchorSelector.forEach(item => {
//     item.addEventListener('click', innerSmoothScroll);
// });

// function innerSmoothScroll(e) {
//     e.preventDefault();
//     if (!this.hasAttribute('href') && !this.hasAttribute('data-scroll-href')) return;

//     const fixElem = document.querySelector(selector) ? document.querySelector(selector).offsetHeight : '';
//     const href = this.getAttribute('href') || this.getAttribute('data-scroll-href');
//     const block = searchBlock(href);
//     const coordBlock = getCoords(block);
//     let positionUser = parseInt(window.pageYOffset);
//     const distance = Math.round(Math.abs(coordBlock - positionUser) / 100 * (speed / 100));
//     // const distance = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

//     if(positionUser === (coordBlock - fixElem)) return;
//     else if (positionUser <= (coordBlock - fixElem)) {
//         window.scrollTo(0, positionUser);
//         const scrollDown = setInterval(function () {
//             positionUser > (coordBlock - fixElem) 
//                 ? positionUser += 1 
//                 : positionUser += distance
//             window.scroll(0, positionUser - fixElem);
//             if (positionUser >= coordBlock) clearInterval(scrollDown);
//         }, 20);
//     } else {
//         window.scrollTo(0, positionUser);
//         const scrollUp = setInterval(function () {
//             positionUser < (coordBlock + fixElem) 
//                 ? positionUser -= 1
//                 : positionUser -= distance;
//             window.scroll(0, positionUser - fixElem);
//             if (positionUser <= coordBlock) clearInterval(scrollUp);
//         }, 20);
//     }
// }

// function searchBlock(selector) {
//     if (!selector) return;
//     return document.querySelector(selector) ? document.querySelector(selector) : null;
// }

// function getCoords(elem) {
//     const box = elem.getBoundingClientRect();
//     const body = document.body;
//     const docEl = document.documentElement;
//     const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
//     const clientTop = docEl.clientTop || body.clientTop || 0;
//     const top = box.top + scrollTop - clientTop;
//     return top;
// }

// };


// smoothScroll('.js-fix', 300);