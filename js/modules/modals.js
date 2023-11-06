function closeModal(modalSelector){
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');  //первый способ
    // modal.classList.toggle('show') 
    document.body.style.overflow = '';
}

function openModal (modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    // modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';

    if  (modalTimerId) {
        clearInterval(modalTimerId);
    }
    
}

function modals(triggerSelector, modalSelector, modalTimerId){
    // Modal

    const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));

    });


    modal.addEventListener('click', (e) => {
        // закрывает на серой области
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal(modalSelector);
        }   
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')){
            closeModal(modalSelector)
        }
    });

    

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    };
    window.addEventListener('scroll', showModalByScroll);
}

export {closeModal};
export{openModal};
export default modals;