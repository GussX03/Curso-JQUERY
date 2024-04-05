/** $(document).ready(function() {
    //  alert("Hola mundo desde JQUERY");
    let varBotton = $('button').html(); // toma el valor del boton
    console.log(varBotton);
    // $('.btn').html("Cambiado desde la clase");
    // $('#boton').html("Cambiado desde el ID");
    $('#subcontenedor button').html("Boton desde subcontenedor");
    $('button:first').html("primero");
});

$(document).ready(function() {
    $('#boton').addClass('btn-danger');
    $('#boton').removeClass('btn-primary');
    $('#subcontenedor').append('<button type="button" class="btn btn-danger">agregado con append</button>');
    $('#subcontenedor').append('<button type="button" class="btn btn-danger">agregado con prepend</button>');
    $('#boton').css({ 'color': 'blue', 'background-color': 'yellow' });
    // $('#boton').css('background-color', 'yellow');
    // $('#subcontenedor').remove(); // la elimina
    // $('#subcontenedor').hide(); // la oculta
    $('img').attr({ 'src': 'logo2.png', 'width': '400px' });
    // $('img').attr('width', '300px');
})
*/
$(document).ready(function() {
    $('#boton').click(function(e) {
        e.preventDefault();
        $('img').attr('src', 'logo2.png');
    });
    $('#subcontenedor button:nth-child(1)').click(function(e) {
        e.preventDefault();
        $('img').attr('width', '200px');
    });
    $('#subcontenedor button:nth-child(2)').click(function(e) {
        e.preventDefault();
        let margen = $('img').css('margin-left');
        // alert(margen);
        margen = parseInt(margen.replace('px', '')); // quitarle el px
        margen = margen + 30;
        $('img').css('margin-left', margen + 'px');
    });
    $('#subcontenedor button:nth-child(3)').click(function(e) {
        e.preventDefault();
        $('img').toggleClass('d-none');
    });
    let textoUI = $('#texto');
    textoUI.keyup(function(e) {
        $('#saludo').html("Hola " + textoUI.val());
    });
    $('form').submit(function(e) {
        e.preventDefault();

    });
    $('#subcontenedor button:nth-child(4)').click(function(e) {
        e.preventDefault();
        $('img').hide(300);
    });
    $('#subcontenedor button:nth-child(5)').click(function(e) {
        e.preventDefault();
        $('img').show(300);
    });
    $('#subcontenedor button:nth-child(6)').click(function(e) {
        e.preventDefault();
        $('img').toggle(300);
    });
    $('#subcontenedor button:nth-child(7)').click(function(e) {
        e.preventDefault();
        $('img').fadeIn(300);
    });
    $('#subcontenedor button:nth-child(8)').click(function(e) {
        e.preventDefault();
        $('img').fadeOut(300);
    });
    $('#subcontenedor button:nth-child(9)').click(function(e) {
        e.preventDefault();
        $('img').slideDown(300);
    });
    $('#subcontenedor button:nth-child(10)').click(function(e) {
        e.preventDefault();
        $('img').slideUp(300);
    });
    $('#subcontenedor button:nth-child(11)').click(function(e) {
        e.preventDefault();
        $('img').slideToggle(300);
    });
    $('#subcontenedor button:nth-child(12)').click(function(e) { // animacion
        e.preventDefault();
        $('img').animate({
                'margin-left': '+=150px',
                'opacity': '0.5',
                'width': '150px'
            }, 2000,
            function() { // regresarlo a su valor
                $('img').animate({
                    'margin-left': '-=150px',
                    'opacity': '1',
                    'width': '250px'
                }, 2000);
            }

        );
    });
    $('#subir').click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 1000)

    });
    $('#bajar').click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $(document).height() - $(windows).height() }, 1000);

    });


});