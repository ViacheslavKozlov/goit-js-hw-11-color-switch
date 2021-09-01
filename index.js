const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    colors: [
        '#FFFFFF',
        '#2196F3',
        '#4CAF50',
        '#FF9800',
        '#009688',
        '#795548',
    ],
};

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', startApplyBkgColour);
refs.stopBtn.addEventListener('click', stopApplyBkgColour);

let timerId = null;
function startApplyBkgColour() {
    timerId = setInterval(() => {
        refs.body.style.backgroundColor =
            refs.colors[randomIntegerFromInterval(0, refs.colors.length - 1)]
    }, 1000);
    refs.startBtn.disabled = true;
}

function stopApplyBkgColour() {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
}