$(document).ready(function() {
    $(".bxslider").bxSlider({
        auto: true, // se mueve automaticamente
        speed: 500, // velocidad
        autoControls: true, // controles 
        StopAutoOnClick: true, // al darle a una imagen se para
        pager: true, // paginador
        pagerType: 'short', // tipo de paginador
        slideWidth: 800, // tamanio de todo
        mode: 'vertical', // hacia a donde
        randomStart: true, // donde inicia con que imagen
        inifniteLoop: true, // si avanza o no
    });
});