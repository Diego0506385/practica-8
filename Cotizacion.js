
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funcion para calcular el costo total del envio
function calcularCostoTotal(tarifaSeguro = 15, ...pesosPaquetes) {
    let pesoTotal = 0;

    for (const peso of pesosPaquetes) {
        pesoTotal += peso;
    }

    const costoTransporte = pesoTotal * 3.50;
    const total = costoTransporte + tarifaSeguro;

    return total;
}

// Funcion para imprimir la cotizacion
function imprimirCotizacion(cliente, totalCobro) {
    console.log('\n===== COTIZACION DE ENVIO =====');
    console.log('Cliente: ' + cliente);
    console.log('Total a pagar: $' + totalCobro.toFixed(2));
    console.log('===============================');
}

// Flujo principal
rl.question('Ingrese el nombre del cliente: ', function (cliente) {

    // Solicitar la tarifa del seguro
    rl.question('Ingrese el costo del seguro (ENTER para usar $15.00): ', function (respuestaSeguro) {
        let tarifaSeguro;

        if (respuestaSeguro.trim() === '') {
            tarifaSeguro = undefined;
        } else {
            tarifaSeguro = parseFloat(respuestaSeguro);

            if (isNaN(tarifaSeguro) || tarifaSeguro < 0) {
                console.log('Error: ingrese una tarifa de seguro valida.');
                rl.close();
                return;
            }
        }

        // Solicitar el peso del primer paquete
        rl.question('Ingrese el peso del paquete 1 en kg: ', function (respuestaPeso1) {
            const peso1 = parseFloat(respuestaPeso1);

            if (respuestaPeso1.trim() === '' || isNaN(peso1) || peso1 < 0) {
                console.log('Error: el peso debe ser un numero valido.');
                rl.close();
                return;
            }

            // Solicitar el peso del segundo paquete
            rl.question('Ingrese el peso del paquete 2 en kg: ', function (respuestaPeso2) {
                const peso2 = parseFloat(respuestaPeso2);

                if (respuestaPeso2.trim() === '' || isNaN(peso2) || peso2 < 0) {
                    console.log('Error: el peso debe ser un numero valido.');
                    rl.close();
                    return;
                }

                // Solicitar el peso del tercer paquete
                rl.question('Ingrese el peso del paquete 3 en kg: ', function (respuestaPeso3) {
                    const peso3 = parseFloat(respuestaPeso3);

                    if (respuestaPeso3.trim() === '' || isNaN(peso3) || peso3 < 0) {
                        console.log('Error: el peso debe ser un numero valido.');
                        rl.close();
                        return;
                    }

                    // Calcular el total y mostrar la cotizacion
                    const totalCobro = calcularCostoTotal(
                        tarifaSeguro,
                        peso1,
                        peso2,
                        peso3
                    );

                    imprimirCotizacion(cliente, totalCobro);

                    rl.close();
                });
            });
        });
    });
});
