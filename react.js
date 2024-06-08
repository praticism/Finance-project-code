const moonImage = './assets/images/moon.png';
const sunImage = './assets/images/sun.png';

function changeBackground() {
    const body = document.getElementById('first');
    const toggleImage = document.getElementById('toggleBackground');

    body.classList.toggle('dark:bg-slate-800');

    if (body.classList.contains('dark:bg-slate-800')) {
        toggleImage.src = sunImage;
    } else {
        toggleImage.src = moonImage;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('toggleBackground').addEventListener('click', changeBackground);
});
