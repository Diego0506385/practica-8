
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funcion para calcular la comision
function calcularComision(montoVentas, porcentajeComision = 5) {
    return montoVentas * porcentajeComision / 100;
}

// Solicitar el monto de ventas
rl.question('Ingrese el monto total de ventas: ', function (respuestaVentas) {
    const montoVentas = parseFloat(respuestaVentas);

    if (isNaN(montoVentas) || respuestaVentas.trim() === '') {
        console.log('Error: debe ingresar un monto de ventas valido.');
        rl.close();
        return;
    }

    // Solicitar el porcentaje de comision
    rl.question('Ingrese el porcentaje de comision (ENTER para usar 5%): ', function (respuestaPorcentaje) {
        let porcentajeComision;

        if (respuestaPorcentaje.trim() === '') {
            porcentajeComision = undefined;
        } else {
            porcentajeComision = parseFloat(respuestaPorcentaje);

            if (isNaN(porcentajeComision)) {
                console.log('Error: el porcentaje debe ser numerico.');
                rl.close();
                return;
            }
        }

        // Calcular la comision
        const comision = calcularComision(montoVentas, porcentajeComision);

        console.log('La comision ganada es: $' + comision.toFixed(2));

        rl.close();
    });
});
