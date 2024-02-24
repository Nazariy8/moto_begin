$(document).ready(function(){

    // Завдання 1.1

    // alert($('.slide-text h1').text());

    // Завдання 1.2

    // alert($('.link-moto').text());

    // Завдання 1.3

    // $('.slide-btn').hide();

    // Завдання 1.4

    // $('.features-grid p').hide(3000);

    // Завдання 1.5

    // $('.categorie').show(2000);

    //Завдання 1.6

    // alert($('ul.top-nav > li').text()); 

    // Завдання 1.7

    // $('.slide-text .welcome').hide(3500);
    // $('.slide-text .welcome').show(2000);

    // Завдання 1.8

    // $('.head span').hide(1000);

    // Завдання 1.9

    // alert($('.blog-post-info span>a').text());

    //  Завдання 1.10

    // alert($('.blog-post-date label').text());

    // Завдання 1.11


    // alert($('.blog-post-info h4>a').text());

    // Завдання 1.12

    // $('img[src*=logo]').hide();


    let result = prompt("Введіть назву об'єкту, якого хоче приховати:");

    doc.addEventListener('submit', function(result){

        if (result==logo){
            $('img[src*=logo]').hide();
        }
        else if(result==categorie){
            $('.categorie').show(2000);
            $('.categorie').hide(2500);
        }
        else if(result==welcome){
            $('.slide-text .welcome').hide(3500);
        }
        else if(result==slide-btn){
            $('.slide-btn').hide();
        }

    })
})