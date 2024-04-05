$(document).ready(function() {
    $('#fecha').daterangepicker({
            locale: {
                format: "YYYY-MM-DD hh:mm:ss"
            },
            timePicker: true,
            startDate: moment().startOf('hour'),
            endDate: moment().startOf('hour').add(48, 'hour')
        }, function(inicio, fin) {
            console.log(inicio.format('YYYY-MM-DD hh:mm:ss') + " - " + fin.format('YYYY-MM-DD hh:mm:ss'))
        }


    );
    $('#fecha2').daterangepicker({
            locale: {
                format: "YYYY-MM-DD hh:mm:ss" // formato de las fechas
            },
            singleDatePicker: true, // solo un calendario 
            showDropdowns: true, // formato de meses y anios 
            timePicker: true,
            minYear: 2000, // minimo anio
            maxYear: moment().format('YYYY'), // maximo anio
            startDate: moment().startOf('hour'), // conseguir la hora del sistema
            endDate: moment().startOf('hour').add(48, 'hour')
        }, function(inicio, fin) {
            console.log(inicio.format('YYYY-MM-DD hh:mm:ss') + " - " + fin.format('YYYY-MM-DD hh:mm:ss'))
        }


    );
});