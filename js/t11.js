$(document).ready(function () {
    // Завдання 1
    $('#my_button').button();
    // Завдання 2
    $('#clear_form').button();
    $('#clear_form').click(function (event){
        $('#div_form_1 input[type=checkbox]').prop('checked', false).button("refresh");
        $('#div_form_1 input[type=radio]').prop('checked', false).button('refresh');


        $('#div_form_1 input[type=radio]').prop('checked', false).button('refresh');
        // $('#radio label').removeClass('ui-state-active');
        // $('#radio label span').remove();


        $('input[type=text], textarea').val('');
        $('#progressbar').progressbar({ value: 0 });
        event.preventDefault();
    });
    // Завдання 3
    $('input[type=checkbox]').checkboxradio();
    $('input[type=radio]').checkboxradio();

    //Завдання 4
    $("#motoSelect, #daysSelect").selectmenu();

    // Завдання 5

    $.widget('custom.iconselectmenu', $.ui.selectmenu, {
        _renderItem: function(ul, item){
            let li = $('<li>'),
            wrapper = $('<div>', {text: item.label});

            if(item.disabled){
                li.addClass('ui-state-disabled  ')
            }

            $('<span>',{
                style: item.element.attr('data-style'),
                'class':'ui-icon '+item.element.attr('data-class')
            }).appendTo(wrapper);

            return li.append(wrapper).appendTo(ul);
        }
    })

    $('#motoSelect').iconselectmenu('menuWidget').addClass('ui-menu-icons customicons')
})