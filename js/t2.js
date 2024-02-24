$(document).ready(function() {

    // Завдання 1
    $('.slide-text>h1').fadeOut(3000);
    $('.slide-text>h1').fadeIn(1500);


    // Завдання 2

    $('.head-moto-img').fadeTo('slow', 0.05);
    $('.head-moto-img').fadeTo(7000, 1);

    // Завдання 3

    // $('.head').slideUp(2000);
    // $('.head').slideDown(1000);

    // Завдання 4

    // $('.blog-post-info').fadeOut(1500);
    // $('.blog-time-line').slideUp(2000);
    // $('.blog-time-line').slideDown(3000);
    // $('.blog-post-info').fadeIn(6000);

    // Завдання 5

    function zr(name_obj,t1,t2){
        obj = $(name_obj);
        t1 = t1;
        t2 = t2;
        obj.slideUp(t1);
        obj.slideDown(t2);
    }

    // zr('#blog>.container>.head>h3',3000,2000);

    // Завдання 6

    function prozor(name_obj, time, opacity){
        obj = $(name_obj);
        time = time;
        opac = opacity;

        $(obj).fadeTo(time, opac);
        $(obj).slideUp(time);
        $(obj).slideDown(time);
        $(obj).fadeTo(time, 1);


    }

    prozor('h3',2000,0.2)
})