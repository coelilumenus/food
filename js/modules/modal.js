function openModal(modalSelector, modalTimerID) {
    const modal = document.querySelector(modalSelector);
    
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    
    if (modalTimerID) {
        clearTimeout(modalTimerID);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerID) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(item => {
        item.addEventListener('click', () => {
            openModal(modalSelector, modalTimerID);
        });
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight) {
                openModal(modalSelector, modalTimerID);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });
}

export default modal;
export {closeModal, openModal};