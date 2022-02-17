# Vanilla JS Scrolling

[![npm version](https://badge.fury.io/js/smooth-scroll-by.svg)](https://www.npmjs.com/package/smooth-scroll-by)
[![](https://data.jsdelivr.com/v1/package/npm/smooth-scroll-by/badge)](https://www.jsdelivr.com/package/npm/smooth-scroll-by)

 [Demo](https://emorozov.top/app/smooth-scroll/ )
## Browsers support
Better support in modern browsers
 | IE | Edge | Chrome | Safari | Opera | Firefox | UC Browser |
| --- | --- | --- | --- | --- | --- | --- |
| - | + | + | + | + | + | + |


## Working with the library
```html
# link
<a href="#section1">block 1</a>
# or
<button data-scroll-href="#section2">block 2</button>
# You can use both options

# Blocks should have id
<section id="section1">1</section>
<section id="section2">2</section>
```

To get started, download the `npm i smooth-scroll-by` library and import it into your project

#### js
```javascript
import SmoothScroll from 'smooth-scroll-by';

new SmoothScroll();
```
#### CDN
JS
```html
<script defer src="https://cdn.jsdelivr.net/npm/smooth-scroll-by@1.1.0/dist/index.js"></script>
```
HTML
```html
<script>
    document.addEventListener('DOMContentLoaded', function() {
        new SmoothScroll();
    });
</script>
```

## Parameters

If the page has a sticky menu, just add its class as the first parameter

```javascript
new SmoothScroll('.js-fix-header');
```

You can also set the scroll speed (`default 600`)
```javascript
 new SmoothScroll('.js-fix-header', {
    speed: 1000
});
```
