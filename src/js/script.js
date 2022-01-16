const smoothScroll = (speed) => {

    const selector = document.querySelectorAll('.js-link');

    selector.forEach(item => {
        item.addEventListener('click', innerSmoothScroll);
    });

    function innerSmoothScroll(e) {
        e.preventDefault();
        if (!this.hasAttribute('href')) return;

        const fixElem = document.querySelector('.js-fix').offsetHeight;
        const href = this.getAttribute('href');
        const block = searchBlock(href);
        const coordBlock = getCoords(block);
        let positionUser = window.scrollY;

        const pos = userPosition(positionUser, coordBlock);

        console.clear()
        console.log('user', positionUser);
        console.log('block', coordBlock);
        const distance = Math.abs(coordBlock - positionUser) / 100 * (speed / 100);
        console.log('distance', distance);


        window.scrollTo(0, positionUser);

        if (pos === 'below') {
            const scrollBottomElem = () => {
                if (positionUser >= (coordBlock - fixElem)) {
                    clearTimeout(timer);
                    window.scrollTo(0, coordBlock);
                    window.scrollTo(0, coordBlock - fixElem);
                    return;
                }

                positionUser += distance;
                window.scrollTo(0, positionUser);
                window.scrollTo(0, positionUser);

                timer = setTimeout(scrollBottomElem, 20);
            }
            scrollBottomElem();
        }

        if (pos === 'above') {
            const scrollTopElem = () => {
                if (positionUser <= (coordBlock - fixElem)) {
                    clearTimeout(timer);
                    window.scrollTo(0, coordBlock - fixElem);
                    return;
                }

                positionUser -= distance;
                window.scrollTo(0, positionUser);
                window.scrollTo(0, positionUser);

                timer = setTimeout(scrollTopElem, 20);
            }
            scrollTopElem()
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

    function userPosition(user, block) {
        let position;
        if (user < block) {
            position = 'below'
        } else if (user > block) {
            position = 'above'
        } else {
            position = 'in'
        }

        return position;
    }


};

smoothScroll(300);