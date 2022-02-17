export class SmoothScroll {
    constructor(selector, options) {

        const defaultOptions = {
            speed: 600
        }

        this.selector = selector;
        this.options = { ...defaultOptions, ...options };
        this.anchorLink = [...document.querySelectorAll('a[href*="#"]')];
        this.anchorSelector = [...document.querySelectorAll('[data-scroll-href*="#"]')];

        this.init();
    }

    init() {
        if (!this.anchorLink && !this.anchorSelector) return;

        [...this.anchorLink, ...this.anchorSelector].forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const linkHref = link.getAttribute('href') || link.getAttribute('data-scroll-href');
                const blockPosition = linkHref ? document.querySelector(linkHref) : null;
                if(!blockPosition) throw Error(`The section "${linkHref}" not found on the page`);
                const blockCoord = this.getCoords(blockPosition);
                this.scrollToSection(blockCoord, this.options.speed)
            });
        });

    }

    scrollToSection(positionBlock, duration) {
        const durationAnimation = typeof duration === 'number' 
            ? duration 
            : duration.replace(/[^0-9]/g,"");
        const fixBlockHeight = (typeof this.selector === 'string' && document.querySelector(this.selector) )
            ? document.querySelector(this.selector).offsetHeight
            : null;

        const windowPosition = window.scrollY || window.pageYOffset;
        const distance = positionBlock - windowPosition - fixBlockHeight;
        const startTime = new Date().getTime();

        const timeAnimation = (time, from, distance, durationAnimation) => {
          if ((time /= durationAnimation / 2) < 1) return distance / 2 * time * time * time * time + from;
          return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };
        
        if(Math.ceil(positionBlock) === Math.ceil(window.pageYOffset + fixBlockHeight)) return;
        const scrollAnchor = setInterval(() => {
          const time = new Date().getTime() - startTime;
          const posBlock = timeAnimation(time, windowPosition, distance, durationAnimation);
          if (time >= durationAnimation) {
            clearInterval(scrollAnchor);
          }
          window.scroll(0, Math.ceil(posBlock));
        }, 1000 / 60);
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