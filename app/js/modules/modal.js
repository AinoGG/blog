//modal window


function openModal(modalSelector, timerModal) {
    const modal = document.querySelector(modalSelector);

        
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if(timerModal){
        clearInterval(timerModal);
    }
    

}    


function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';    

}


function modal(triggerSelector, modalSelector) {

    const modalTrigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector);
          

        modal.addEventListener('click', event => {
            if(event.target === modal || event.target.getAttribute('data-close') == ''){
                event.preventDefault();
                closeModal(modalSelector);                
            }
        });



          

        document.addEventListener('keydown', e => {
            if(e.code === 'Escape' && modal.classList.contains('show')){
                closeModal(modalSelector);
            }
        });


        modalTrigger.forEach(item => {
            item.addEventListener('click', () => openModal(modalSelector));
            });


        // function scrollShowModal() {
        //     if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
        //         openModal(modalSelector, timerModal);
        //      window.removeEventListener('scroll', scrollShowModal);
        //     }
        // }

        // window.addEventListener('scroll', scrollShowModal);

}


export default modal;
export {closeModal};
export {openModal};