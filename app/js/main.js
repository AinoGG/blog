




function  tabs(tabsSelector, tabsContentSelector, tabsParentsSelector, activeClass) {

    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentsSelector);




        function hideTabContent() {
            tabsContent.forEach(item  =>{
            item.classList.add('hide');
            item.classList.remove('show');
            });

            tabs.forEach(item => {
                item.classList.remove(activeClass);
            })
        }


        function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
        }


        hideTabContent();
        showTabContent();


        tabsParent.addEventListener('click', event => {
        const target = event.target;

        if(target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if(target === item){
                    hideTabContent();
                    showTabContent(i);
                }
            }); 
        }
    });
}


tabs('.tabs__header-item', '.tabs__content', '.tabs__container', 'tabheader__item_active');



function timer(id, deadline) {
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor ((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);


              return {
                  'total': t,
                  'days': days,
                  'hours': hours,
                  'minutes': minutes,
                  'seconds': seconds

              }
    }

    function getZero(num) {
        if(num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

              updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            
            if(t.total <= 0) {
                clearInterval(timeInterval)
            }

        }
    }

    setClock(id, deadline);

}


timer('.timer', '2021-07-22');


//timer animation


const cards = document.querySelectorAll('.timer__block-container');

    cards.forEach(item => {
        item.addEventListener('mousemove', rotate);
        item.addEventListener('mouseout', stopRotate);
    });

    


function rotate(event) {
   const cardItem = this.querySelector('.timer__block');

   const halfHeight = cardItem.offsetHeight / 2;
   const halfWidth = cardItem.offsetWidth / 2;

     cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfHeight) / 10 +'deg) rotateY('+ (event.offsetX - halfWidth) / 2+'deg)';
    
}


function stopRotate() {
    const cardItem = this.querySelector('.timer__block');
    cardItem.style.transform = 'rotate(0)';
    
}

//timer animation end