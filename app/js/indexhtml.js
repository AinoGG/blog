window.addEventListener('DOMContentLoaded', () => {


    function btnMenuSwitch(btnSelector, btnContent) {
        const menuBtn = document.querySelector(btnSelector),
            socialBtns = document.querySelector(btnContent);


        menuBtn.addEventListener('click', () => {
            if (!socialBtns.classList.contains('show')) {
                socialBtns.classList.add('show', 'fade');
            } else {
                socialBtns.classList.remove('show', 'fade');
            }
        });

    }

    btnMenuSwitch('.menu__btn', '.social__link');
    btnMenuSwitch('.menu__btn-list', '.menu__list');
    

});