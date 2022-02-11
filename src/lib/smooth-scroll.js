export class SmoothScroll {
    constructor(selector, options) {

        const defaultOptions = {
            speed: 600
        }

        this.selector = selector;
        this.options = { ...defaultOptions, ...options };
        this.anchorLink = [...document.querySelectorAll('a[href*="#"]')];
        this.anchorSelector = [...document.querySelectorAll('.js-scroll-link')];

        this.init();
    }

    init() {
        if (!this.anchorLink && !this.anchorSelector) return;

        [...this.anchorLink, ...this.anchorSelector].forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const linkHref = link.getAttribute('href') || link.getAttribute('data-scroll-href');
                const blockPosition = this.searchBlock(linkHref);
                const blockCoord = this.getCoords(blockPosition);
                this.scrollTo(blockCoord, this.options.speed)
            });
        });

    }

    scrollTo(positionBlock, duration) {
        let durationAnimation;
        typeof duration === 'number' 
            ? durationAnimation = duration 
            : durationAnimation = duration.replace(/[^0-9]/g,"");
        const fixBlockHeight = document.querySelector(this.selector) ? document.querySelector(this.selector).offsetHeight : null;
        const windowPosition = window.scrollY || window.pageYOffset;
        const distance = positionBlock - windowPosition - fixBlockHeight;
        const startTime = new Date().getTime();

        const timeAnimation = (time, from, distance, durationAnimation) => {
          if ((time /= durationAnimation / 2) < 1) return distance / 2 * time * time * time * time + from;
          return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };
      
        const scrollAnchor = setInterval(() => {
          const time = new Date().getTime() - startTime;
          const posBlock = timeAnimation(time, windowPosition, distance, durationAnimation);
          if (time >= durationAnimation) {
            clearInterval(scrollAnchor);
          }
          window.scroll(0, posBlock);
        }, 1000 / 60);
    }

    searchBlock(selector) {
        if (!selector) return;
        return document.querySelector(selector) ? document.querySelector(selector) : null;
    }

    getCoords(selector) {
        const box = selector.getBoundingClientRect();
        const body = document.body;
        const docEl = document.documentElement;
        const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        const clientTop = docEl.clientTop || body.clientTop || 0;
        const top = box.top + scrollTop - clientTop;
        return top;
    }

}