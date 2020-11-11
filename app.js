const daysD = document.getElementById("days");
const hoursH = document.getElementById("hours");
const minsM = document.getElementById("min");
const secS = document.getElementById("sec");
const exp = document.querySelector(".container-time");



function countTime() {
    const endTime = new Date(2021, 0, 1);
    const todayTime = new Date();
    const timeDeference = (endTime - todayTime) / 1000;


    const days = Math.floor(timeDeference / 24 / 3600);
    const hours = Math.floor(timeDeference / 3600) % 24;
    const mins = Math.floor(timeDeference / 60) % 60;
    const sec = Math.floor(timeDeference) % 60;

    if (timeDeference < 0) {
        clearInterval(countTime);
        exp.innerHTML = "Time Experied";
        exp.style.fontSize = "40px";
        exp.style.fontWeight = "400";
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    daysD.innerHTML = days;
    hoursH.innerHTML = hours;
    minsM.innerHTML = mins;
    secS.innerHTML = sec;
}
countTime();

setInterval(countTime, 1000);
