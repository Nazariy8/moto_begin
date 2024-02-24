$(document).ready(function() {

    // Завдання 1
    $('.slide-btn').click(function(){
        alert('Була натиснута кнопка з класом slide-btn');
    })


    // Завдання 5
    $('.header').mouseenter(function() {
        $('.slide-text').slideUp(1000);
    })


    // Завдання 6
    $('.header').mouseleave(function() {
        $('.slide-text').slideDown(1000);
    })

    //  Завдання 7
        // $('#p').click(function() {
        //     $('.head-moto-img').slideUp();
        // })
    // Завдання 8

    let text1 = "Поділитись фото"
    let text2 = "Сховати фото"

    $('#p').click(function() {
        $('.head-moto-img').slideToggle(2000);
        if ( $('#p').text()!=text1 ){
            $('#p').text(text1)
        } else{
            $('#p').text(text2)
        }
    })



    // Завдання 9

    $('.blog-post-date').hover(

        function() {
            $('+ .blog-post-info > .categorie',this).fadeIn();
            },
        
            function() {
                $('+ .blog-post-info > .categorie',this).fadeOut();
            }

    )

    

    // Завдання 10
    
    $('.contatct-active').click(function(){
        if($('.m6>a').text()=='eng'){
            $('.m1>a').text('Home');
            $('.m2>a').text('Motorcycles');
            $('.m3>a').text('Sales');
            $('.m4>a').text('Forum');
            $('.m5>a').text('Contacts');

            $('.m6>a').text('ua');
        }
        else {
            $('.m1>a').text('Головна');
            $('.m2>a').text('Мотоцикли');
            $('.m3>a').text('Розпродаж');
            $('.m4>a').text('Форум');
            $('.m5>a').text('Контакти');

            $('.m6>a').text('eng');
        }
    })



})