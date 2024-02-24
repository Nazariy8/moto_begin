$(document).ready(function() {

    //1
    $(':header').first().css('background-color', 'yellow');

    //2
    $(':header').last().css({'font-size':'400%'});

    //3
    $("input[type='checkbox']").eq(1).prop('checked', true);
    
    //4
    $("input[type='radio']").first().prop('checked', true);
    
    //5
    $('#my_form').click(function () { 
        getInfoMoto();
     })

     function getInfoMoto(){
        let moto = $('#motoSelect option:selected').text();
        let days = $('#daysSelect option:selected').text();
        let email = $('#email').val();
        let helm = '';
        let bag = '';
        let cloth = '';
        let inch = '';

        if ( $("input[type='checkbox']").eq(0).prop('checked')==true ){
            helm = $('label[for="shlem"]').text();
        }

        if ( $("input[type='checkbox']").eq(1).prop('checked')==true ){
            bag = $('label[for="bag"]').text();
        }


        if ( $("input[type='checkbox']").eq(2).prop('checked')==true ){
            cloth = $('label[for="od"]').text();
        }

        if($('#inch_yes').prop('checked')==true){
            inch = 'Так'
        } else{
            inch = 'Ні'
        }
        

        $('textarea').text(`${moto} на ${days} днів \n Приклад:${email} \n Аксесуари: ${helm} ${bag} ${cloth} \n Страховка:${inch}`)
    }

    //6

    $('input[type="radio"]').click(function() {
        getInfoColor();
    })


    function getInfoColor(){
        if ($('#inch_yes').prop('checked')==true){
            $('#radio').css({"background-color":"","color":"black"})
        }else{
            $('#radio').css({"background-color":"red", "color":"white"})
        }
    }

})