$(document).ready(function() {
// START


    // Завдання 1

    $('#about-moto').addClass('new');

    // Завдання 2

    $('#about-moto').prepend('<p class="fon_yellow">Цей абзац доданий за допомогою методу <b>Prepend</b> </p>');
    $('#about-moto').append('<p class="fon_yellow">Цей абзац доданий за допомогою методу <b>Append</b> </p>');


    $('#about-moto').before('<p class="fon_yellow">Цей абзац доданий за допомогою методу <b>Before</b> </p>');
    $('#about-moto').after('<p class="fon_yellow">Цей абзац доданий за допомогою методу <b>After</b> </p>');

    // Завдання 3

    $('li').hover(
        function(){
            $(this).toggleClass('svitlo');
    });

    // Завдання 4

    // $('.head-moto-img').click(
    //     function(){
    //         $(this).clone().prependTo('.koshik-wrapper');
    //         $('.koshik-wrapper').addClass('full-koshik');
    //     }
    // )

    // Завдання 5

    // $('.head-moto-img').click(
    //     function(){
    //         $(this).clone().appendTo('.koshik-wrapper');
    //         $('.koshik-wrapper').addClass('full-koshik');
    //         $(this).remove();
    //     }
    // )

    // Завдання 6

    // $('.head-moto-img').click(
    //     function(){
    //         let moto = $(this);
    //         $('.koshik-wrapper-items').each(
    //             function(){
    //                 if(moto.attr('nomer') == $(this).attr('nomer')) {
    //                     $(this).html(moto.clone());
    //                     moto.remove();
    //                     $('.koshik-wrapper').addClass('full-koshik');
    //                 }
    //             }
    //         )
    //     }
    // )

    // Завдання 7

    $('.head-moto-img').click(
        function(){
         $('.koshik-wrapper').append($(this).clone().dblclick(function(){
            $(this).remove();
            sumaMoto();
         }));
         sumaMoto();
        }
    );


    function sumaMoto() {
        let count = 0;
        let suma = 0;
        $('.koshik-wrapper>.head-moto-img').each(
            function() {
                count++;
                suma+=parseInt($(this).attr('price'));
            }
        );

        $('#suma').html('Всього <b>'+count+'</b> мотоциклів на суму <b>'+suma+'</b> грн');

        if (count>0){
            $('.koshik-wrapper').addClass('full-koshik');
        } else {
            $('.koshik-wrapper').removeClass('full-koshik');
        }
    }


    // END
})