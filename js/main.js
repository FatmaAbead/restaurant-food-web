// scroll navbar sticky
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

// fittext.js a jQuery plugin for inflating web type
$(function(){
    $('h2').fitText(1.2, { minFontSize: '36px', maxFontSize: '85px' });
    $('h3').fitText(1.2, { minFontSize: '25px', maxFontSize: '50px' });
    $('p').fitText(1.2, { minFontSize: '16px', maxFontSize: '18px' });
})