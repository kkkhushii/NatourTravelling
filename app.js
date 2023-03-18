$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.custom_dots',
        dotsClass: 'dots'
    });


    let hamper = document.querySelector('.btnhamper');
    let mmnav = document.querySelector('.m-nav');
    let tm = document.querySelector('.times');

    hamper.addEventListener('click', function () {
        mmnav.classList.add('open');
    });
    tm.addEventListener('click', function () {
        mmnav.classList.remove('open');
    });

});