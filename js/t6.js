$(document).ready(function() {
    // START

    // Завдання 1
    // $('.slide-btn').height(100);

    // Завдання 2

    // function change_width(selectorObj ,w){
    //     $(selectorObj).width(w)
    // };

    // change_width('.slide-btn', 200);

    // Завдання 3

    // function change_width_3(selectorObj, w){
        // $(selectorObj).width(w);
        // let height = $(selectorObj).width()*0.5;
        // $(selectorObj).height(height);
    // };

    // change_width_3('.slide-btn', 200);


    // Завдання 4

    // function change_width_4(selectorObj){
    //     let w = $(selectorObj).width();
    //     $(selectorObj).width(w/2);
    //     $(selectorObj).height(width);
    // }

    // change_width_4('.slide-btn')

    // Завдання 5

    // $('.head-moto-img').click(function () {
    //     let title = $(this).attr('title');
    //     let width = $(this).width();
    //     let height = $(this).height();

    //     if (title==""){
    //         $(this).width(width/1.5).height(height/1.5);
    //         $(this).attr('title','1')
    //     }
    //     else{
    //         $(this).width(width*1.5).height(height*1.5);
    //         $(this).attr('title','')
    //     }
    // })

    
       
        


    // Завдання 6

    // $('.head-moto-img').hover(function () {
    //     let width = $(this).width();
    //     let height = $(this).height();
    //     $(this).height(height/2)
    //     $(this).width(width/2);
    // },
    // function() {
    //     let width = $(this).width();
    //     let height = $(this).height();
    //     $(this).height(height*2)    
    //     $(this).width(width*2);
    // });
    // Завдання 7

    $('.head-moto-img').hover(
        function(){
            change_width_b(this);
        },
        function(){
            change_width_s(this);
        }
    )

    function change_width_b(selectorObj) {
        let width = $(selectorObj).width()
        let height = $(selectorObj).height()
        $(selectorObj).width(width/1.5).height(height/1.5);
    }
    
    function change_width_s(selectorObj){
        let width = $(selectorObj).width()
        let height = $(selectorObj).height()
        $(selectorObj).width(width*1.5).height(height*1.5);
    }

    // Завдання 8


    // Завдання 9


    // END
})