const dayTimer = document.querySelector('.day');
const hourTimer = document.querySelector('.hour');
const minuteTimer = document.querySelector('.minute');
const secondTimer = document.querySelector('.seconds');


const countDown = () => {
    const countDate = new Date("December 25, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    
    dayTimer.innerText = textDay;
    hourTimer.innerText = textHour;
    minuteTimer.innerText = textMinute;
    secondTimer.innerText = textSecond;
}



setInterval(countDown, 1000);
