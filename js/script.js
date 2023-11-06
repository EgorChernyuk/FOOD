    import calc from './modules/calc';
    import cards from './modules/cards';
    import forms from './modules/forms';
    import modal from './modules/modals';
    import sliders from './modules/sliders';
    import tabs from './modules/tabs';
    import timer from './modules/timer';
    import { openModal } from './modules/modals';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('./modals', modalTimerId), 300000);
    
    calc(),
    cards(),
    forms('form', modalTimerId),
    modal('[data-modal]', '.modal', modalTimerId),
    sliders({
        slide: ".offer__slide",
        container: '.offer__slider',
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        totalCounter: "#total",
        currentCounter: "#current",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner"
    }),
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active'),
    timer('.timer', '2023-09-12');

});