
window.addEventListener('DOMContentLoaded', () => {
   const calc = require('./modules/calc')
         cards = require('./modules/cards'),
         forms = require('./modules/forms'),
         modal = require('./modules/modal'),
         sliders = require('./modules/sliders'),
         tabs = require('./modules/tabs'),
         timer = require('./modules/timer');

    calc(),
    cards(),
    forms(),
    modal(),
    sliders(),
    tabs(),
    timer();

});