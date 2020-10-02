


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

export default btnMenuSwitch;
    

    




