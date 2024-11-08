// Defino un array con las monedas y sus respectivos valores
let monedas = ["USD", "MXN", "EUR", "ARS", "GBP", "JPY"];
let valorMonedas = [1, 20, 0.88, 0.1, 0.75, 0.0073];

// Declaro las variables fuera de los ciclos
let monedaUno;
let monedaDos;
let valorMonedaUno;
let valorMonedaDos;
let cantidad;

// Pedir la primera moneda hasta que sea válida o el usuario ingrese "*"
do {
    monedaUno = prompt("Ingresa la primera moneda (o * para salir)");
    if (monedaUno === "*") break;

    valorMonedaUno = null;
    for (let i = 0; i < monedas.length; i++) {
        if (monedaUno.toUpperCase() === monedas[i]) {
            valorMonedaUno = valorMonedas[i];
            break;
        }
    }
    if (valorMonedaUno == null) {
        alert("Moneda no válida, intenta nuevamente.");
    }
} while (valorMonedaUno == null);

// Pedir la segunda moneda hasta que sea válida o el usuario ingrese "*"
if (monedaUno !== "*") {
    do {
        monedaDos = prompt("Ingresa la segunda moneda (o * para salir)");
        if (monedaDos === "*") break;

        valorMonedaDos = null;
        for (let i = 0; i < monedas.length; i++) {
            if (monedaDos.toUpperCase() === monedas[i]) {
                valorMonedaDos = valorMonedas[i];
                break;
            }
        }
        if (valorMonedaDos == null) {
            alert("Moneda no válida, intenta nuevamente.");
        }
    } while (valorMonedaDos == null);
}

// Si el usuario no ingresó "*" en ningún caso, procede con la conversión
if (monedaUno !== "*" && monedaDos !== "*") {
    cantidad = parseFloat(prompt("Ingresa la cantidad de la primera moneda"));
    if (!isNaN(cantidad)) {
        let resultado = (cantidad * valorMonedaUno) / valorMonedaDos;
        alert("El resultado es: " + resultado);
    } else {
        alert("Cantidad no válida.");
    }
} else {
    alert("Conversión cancelada.");
}
