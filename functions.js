let logodiv = document.getElementsByClassName('logodiv');
let lovejoomag = document.getElementById('lovejoomaglogo');
let btn = document.getElementsByClassName('btn-primary');
$(window).resize(function () {
    if ($(window).width() < 361) {

        // This part removes 3 logos of 5 in each slide
        for (let l in logodiv) {
            for (let k in logodiv[l].childNodes) {
                if (k >= 5 && parseFloat(k)%2==1) {
                    logodiv[l].childNodes[k].style.display = 'none';
                }
            }
        }
        //this part changes the Joomag love WeWork header logo
        lovejoomag['src'] = "./assets/joomag-love-wework-mobile.svg"
        lovejoomag.style.width = "180px";
        lovejoomag.style.height = "17px";
    }
    else {
        for (let l in logodiv) {
            for (let k in logodiv[l].childNodes) {
                if (k >= 5 && parseFloat(k)%2==1) {
                    logodiv[l].childNodes[k].style.display = '';
                }
            }
        }
        lovejoomag['src'] = "./assets/joomag-love-wework.svg";
        lovejoomag.style.width = "216px";
        lovejoomag.style.height = "22px";
    }
});



$(function () {  // $(document).ready shorthand
    $('.fate').fadeIn('slow');
});
$(document).ready(function () {
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
        /* Check the location of each desired element */
        $('.hideme').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({ 'opacity': '1' }, 1500);
            }
        });
    });
});