const smoothScroll = function (selector, speed = 300) {

    const anchorLink = [...document.querySelectorAll('a[href*="#"]')];
    const anchorSelector= [...document.querySelectorAll('.js-scroll-link')];

    if(!anchorLink && !anchorSelector) return;

    anchorLink.forEach(item => {
        item.addEventListener('click', innerSmoothScroll);
    });
    anchorSelector.forEach(item => {
        item.addEventListener('click', innerSmoothScroll);
    });

    function innerSmoothScroll(e) {
        e.preventDefault();
        if (!this.hasAttribute('href') && !this.hasAttribute('data-scroll-href')) return;

        const fixElem = document.querySelector(selector) ? document.querySelector(selector).offsetHeight : '';
        const href = this.getAttribute('href') || this.getAttribute('data-scroll-href');
        const block = searchBlock(href);
        const coordBlock = getCoords(block);
        let positionUser = parseInt(window.pageYOffset);
        const distance = Math.round(Math.abs(coordBlock - positionUser) / 100 * (speed / 100));

        if(positionUser === (coordBlock - fixElem)) return;
        else if (positionUser <= (coordBlock - fixElem)) {
            window.scrollTo(0, positionUser);
            const scrollDown = setInterval(function () {
                positionUser > (coordBlock - fixElem) 
                    ? positionUser += 1 
                    : positionUser += distance
                window.scroll(0, positionUser - fixElem);
                if (positionUser >= coordBlock) clearInterval(scrollDown);
            }, 20);
        } else {
            window.scrollTo(0, positionUser);
            const scrollUp = setInterval(function () {
                positionUser < (coordBlock + fixElem) 
                    ? positionUser -= 1
                    : positionUser -= distance;
                window.scroll(0, positionUser - fixElem);
                if (positionUser <= coordBlock) clearInterval(scrollUp);
            }, 20);
        }
    }

    function searchBlock(selector) {
        if (!selector) return;
        return document.querySelector(selector) ? document.querySelector(selector) : null;
    }

    function getCoords(elem) {
        const box = elem.getBoundingClientRect();
        const body = document.body;
        const docEl = document.documentElement;
        const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        const clientTop = docEl.clientTop || body.clientTop || 0;
        const top = box.top + scrollTop - clientTop;
        return top;
    }

};

// smoothScroll('.js-fix', 300);