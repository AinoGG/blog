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

     cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfHeight) / 10 +'deg) rotateY('+ (event.offsetX - halfWidth) / 5 +'deg)';
    
}


function stopRotate() {
    const cardItem = this.querySelector('.timer__block');
    cardItem.style.transform = 'rotate(0)';
    
}

//timer animation end

export default timer;