jQuery(document).ready(function ($) {

    var slides = $('.slides');
    var controls = $('.control');
    var externalMenu = $('.external_nav');
    console.log(externalMenu.width());


    controls.click(function () {
        var control = $(this);
        var newTop = control.attr('data-top');
        controls.css({'color' : '#e1e1e1'});
        $(this).css({'color' : 'red'});

        moveToNewTop(newTop);
    });

    function moveToNewTop(top) {
        slides.animate({'top' : top+'px'});
    }



    $('.menu_control').click(function () {
        displayMenu();
    });
    $(document).click(function (e) {
        var target = e.target;

        if(externalMenu.hasClass('active') && !$(target).hasClass('dontclose')){
            displayMenu();
        }
    });
    function displayMenu(){
        if(externalMenu.hasClass('active')){
            externalMenu.animate({
                'right' : -externalMenu.width()
            }, 500);
            externalMenu.removeClass('active')
        }else{
            externalMenu.animate({
                'right' : 0
            }, 500);
            externalMenu.addClass('active');
        }
    }
});


