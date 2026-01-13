let startTime = 0;
let elapseTime = 0;
let timer = null;

function start() {
    if (timer) return;

    startTime = Date.now() - elapseTime;

    timer = setInterval(() => {

        elapseTime = Date.now() - startTime;

        let seconds = Math.floor(elapseTime / 1000);
        let milliseconds = Math.floor((elapseTime % 1000) / 10);

        document.getElementById('display').textContent =
            `${seconds}.${milliseconds.toString().padStart(2, "0")}`;
    }, 10);
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    stop();
    elapsedTime = 0;
    document.getElementById("display").textContent = "0.00";
}