const moonImage = './assets/images/moon.png';
const sunImage = './assets/images/sun.png';

function changeBackground() {
const body = $('#first');
const toggleImage = $('#toggleBackground');

body.toggleClass('dark:bg-slate-800');

    if (body.hasClass('dark:bg-slate-800')) {
        toggleImage.attr('src', sunImage);
    } else {
        toggleImage.attr('src', moonImage);
    }
}
$(document).ready(function() {
    $('#toggleBackground').on('click', changeBackground);
});