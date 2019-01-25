import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

jQuery(document).ready(function () {

    var wrap_interview_slider = new Swiper('.wrap_interview_slider', {
        //autoplay: 4500,
        autoplayDisableOnInteraction: false,
        speed: 1500,
        loop: true,
        nextButton: '.wrap_interview_next',
        prevButton: '.wrap_interview_prev',
        slidesPerView: 3,
        spaceBetween: 25,
        breakpoints: {
            700: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });
});