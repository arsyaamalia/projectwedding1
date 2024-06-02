const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

let $days = document.getElementById('hari');
let $hours = document.getElementById('jam');
let $minutes = document.getElementById('menit');
let $seconds = document.getElementById('detik');

// Calculate the date 51 days from now
let now = new Date();
let daysToAdd = 51;
let countdownDate = new Date(now.getTime() + daysToAdd * 24 * 60 * 60 * 1000);

setInterval(function() {
    var now = new Date();
    var timeleft = (countdownDate - now) / 1000;
    updateclock(timeleft);
}, 1000);

function updateclock(remainingTime) {

    let days = Math.floor(remainingTime / 86400);
    remainingTime -= days * 86400;

    let hours = Math.floor(remainingTime / 3600) % 24;
    remainingTime -= hours * 3600;

    let minutes = Math.floor(remainingTime / 60) % 60;
    remainingTime -= minutes * 60;

    let seconds = Math.floor(remainingTime % 60);

    $days.innerHTML = Number(days);
    $hours.innerHTML = Number(hours);
    $minutes.innerHTML = Number(minutes);
    $seconds.innerHTML = Number(seconds);

}

function Number(number) {
    return number < 10 ? "0" + number : number;
}