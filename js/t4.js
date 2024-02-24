$(document).ready(function() {

// Завдання 1
$('li').click(function(){
    alert($(this).html())
})

// Завдання 2

// alert($('#email').val();

// Завдання 3

// $('.link-moto').click(function () { 
//     alert($(this).attr('href'));
// })

// Завдання 4

// $('.head-moto-img').click(function () {
//     alert($(this).attr('src'));
// })

// Завдання 5

$('#p').click(function () {
    $('#p').html('<i> Зараз функція недоступна. <br> Спробуйте пізніше </i>');
})

// Завдання 6

$('.top-nav').click(function () {
    $('.m6').html('<img src="images/pic_eng.png" width="50px">')
})

// Завдання 7

// $('.head-moto-img').click(function () {
//     $('+h3>a',this).text(function(i, origText){
//         return "Ви обрали: " + origText;
//     });
// })

// Завдання 8

$('.head-moto-img').click(function () {
    $('+h3>a',this).html(function(i, origText){
        return "<em> Ви обрали </em> <br> <br>" + origText;
    })
})

// Завдання 8

let count = 0;
$('.blog-post-date').hover(
    function () {
        $('+.blog-post-info>.categorie',this).text(function(i, origText){
                   if(count==0){
                    count=1;
                     return "Бажаєте замовити?  " + origText; 
                   }
                });
        $('+.blog-post-info>.categorie',this).fadeIn();
    },
    function(){
        $('+.blog-post-info>.categorie',this).fadeOut();
    }
)



// Завдання 9

$('.blog-post-date').click(function(){
    let obj = this;
    $('#mytextarea').text(function(i, origText){
        return origText + $('+.blog-post-info>h4', obj).text()+" "+$('+.blog-post-info>.categorie',obj).text()+"\n";
    })
})

})