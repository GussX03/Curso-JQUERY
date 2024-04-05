$(document).ready(function() {
    // $('.chosen-select').chosen();
    // $('.chosen-select').chosen({ no_results_text: "Ups, no hay nada que diga" }); // CUANDO NO SE ENCUENTRA
    // $('.chosen-select').chosen({ disable_search_threshold: 11 }); 
    // $('.chosen-select').chosen({ max_selected_options: 3 }); // SELECCIONAR MAXIMO 3 EN EL MULTIPLE
    // $('.chosen-select').chosen({ rtl: true, max_selected_options: 3 }); // VARIOS
    $('.chosen-select').chosen().change(function() {
        // alert("Cambio");
        alert($(this).val());
    });
});