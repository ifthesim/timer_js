// var h1 = document.getElementsByTagNam('h1')[0],
    var h1 = document.getElementsByTagNam('h1')[0],
    start = $('#start'),
    pause = $('#pause'),
    reset = $('#reset'),
    // start = document.getElementById('start'),
    // pause = document.getElementById('pause'),
    // reset = document.getElementById('reset'),
    seconds = 0,
    minutes = 0,
    hours = 0,t;

    function timer() {
        t = setTimeout(add, 1000);
    }

    function add() {
          seconds++;
        if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

start.onclick = timer;

pause.onclick = function() {
    clearTimeout(t);
}

reset.onclick = function() {
    h1.textContent = "Stop Watch";
    seconds = 0; minutes = 0; hours = 0;
}
