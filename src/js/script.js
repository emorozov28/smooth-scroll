(() => {

    const selector = document.querySelectorAll('.js-link');
    let timer;

    selector.forEach(item => {
        item.addEventListener('click', searchHref);
    });

    function searchHref(e) {
        e.preventDefault();
        const href = this.hasAttribute('href') ? this.getAttribute('href') : null;
        const block = searchBlock(href);
        const coordBlock = getCoords(block);
        let positionUser = window.scrollY;
        // console.log(positionUser);

        // window.scrollTo(positionUser, coordBlock);
        const pos = userPosition(positionUser, coordBlock);
        // console.log(pos);

        // return;
        if (pos === 'below') {
            const scrollBottomElem = setInterval(() => {
                window.scrollTo(0, positionUser);
                positionUser += 80;

                if (positionUser >= coordBlock) {
                    window.scrollTo(0, coordBlock);
                    clearInterval(scrollBottomElem);
                }
                return;
            }, 20);
        }

        if (pos === 'above') {

            function scrollToTop() {
                if (positionUser <= coordBlock) {
                    clearTimeout(timer);
                    window.scrollTo(0, coordBlock);
                    return;
                }
                if (positionUser > 0) {
                    window.scrollTo(0, positionUser);
                    positionUser = positionUser - 100; //100 - скорость прокрутки
                    timer = setTimeout(scrollToTop, 20);
                }
                else {
                    clearTimeout(timer);
                    window.scrollTo(0, coordBlock);
                }
            }

            // window.scrollTo(0, coordBlock);
            // positionUser = positionUser - 100;
            // // setTimeout(scrollTopElem, coordBlock);

            // if (positionUser < coordBlock) {
            //     clearInterval(scrollTopElem);
            //     window.scrollTo(0, coordBlock);
            // }
            scrollToTop()
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

})();
