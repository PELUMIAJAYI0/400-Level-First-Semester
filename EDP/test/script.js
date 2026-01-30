const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const hInput = document.getElementById('hours');
const mInput = document.getElementById('minutes');
const sInput = document.getElementById('seconds');
const container = document.querySelector('.timer-container');


let timerInterval = null;
let isRunning = false;


function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}


function stopTimer() {
    clearInterval(timerInterval);
    startBtn.textContent = "Start";
    isRunning = false;

    hInput.disabled = false;
    mInput.disabled = false;
    sInput.disabled = false;
}

function startTimer() {
    if (isRunning) {
        
        stopTimer();
        return;
    }


    let h = parseInt(hInput.value) || 0;
    let m = parseInt(mInput.value) || 0;
    let s = parseInt(sInput.value) || 0;

    
    if (h === 0 && m === 0 && s === 0) {
        alert("Please set a time greater than 0");
        return;
    }

    
    hInput.disabled = true;
    mInput.disabled = true;
    sInput.disabled = true;
    container.classList.remove('timer-ended');


    isRunning = true;
    startBtn.textContent = "Pause";

    timerInterval = setInterval(() => {
        if (s > 0) {
            s--;
        } else if (m > 0) {
            m--;
            s = 59;
        } else if (h > 0) {
            h--;
            m = 59;
            s = 59;
        } else {
            
            stopTimer();
            container.classList.add('timer-ended');
            alert("Time is up!");
            return;
        }

        
        hInput.value = formatTime(h);
        mInput.value = formatTime(m);
        sInput.value = formatTime(s);

    }, 1000);
}

function resetTimer() {
    stopTimer();
    hInput.value = "00";
    mInput.value = "00";
    sInput.value = "00";
    container.classList.remove('timer-ended');
}


[hInput, mInput, sInput].forEach(input => {
    input.addEventListener('input', (e) => {
        if (e.target.value.length > 2) {
            e.target.value = e.target.value.slice(0, 2);
        }
        
        if (e.target.value < 0) e.target.value = 0;
    });

    
    input.addEventListener('blur', (e) => {
        if (e.target.value === "") e.target.value = "00";
        e.target.value = formatTime(parseInt(e.target.value));
    });
});


startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
