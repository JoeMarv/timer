// DECLARATIONS 


// TIME REMAINING
function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

// COUNTDOWN
function initializeClock(endtime) {
    function updateClock() {
        const t = getTimeRemaining(endtime);

        document.querySelector('.day-1').innerHTML = t.days 
        document.querySelector('.day-2').innerHTML = t.days 
        document.querySelector('.hour-1').innerHTML = ('0' + t.hours).slice(-2)
        document.querySelector('.hour-2').innerHTML = ('0' + t.hours).slice(-2)
        document.querySelector('.minute-1').innerHTML = ('0' + t.minutes).slice(-2)  
        document.querySelector('.minute-2').innerHTML = ('0' + t.minutes).slice(-2)  
        document.querySelector('.second-1').innerHTML = ('0' + t.seconds).slice(-2)
        document.querySelector('.second-2').innerHTML = ('0' + t.seconds).slice(-2)

        if (t.total <= 0) {
        clearInterval(timeinterval);
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

// ADD 2 WEEKS
    const deadline = new Date(Date.parse(new Date()) + 14 * 24 * 60 * 60 * 1000);
    initializeClock(deadline);
