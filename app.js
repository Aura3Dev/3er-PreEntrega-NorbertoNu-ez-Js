document.addEventListener('DOMContentLoaded', function () {
    
    cargarDatosGuardados();
});

function calcularPrestamo() {
    
    let monto = document.getElementById('monto').value;
    let interes = document.getElementById('interes').value;
    let años = document.getElementById('años').value;

    if (monto === '' || interes === '' || años === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    let principal = parseFloat(monto);
    let tasaInteres = parseFloat(interes) / 100 / 12;
    let pagosTotales = parseFloat(años) * 12;

    let x = Math.pow(1 + tasaInteres, pagosTotales);
    let pagoMensual = (principal * x * tasaInteres) / (x - 1);
    
    let montoTotal = pagoMensual * pagosTotales;

    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h3>Resultado Crediticio:</h3>';
    outputDiv.innerHTML += '<p>Monto: $' + monto + '</p>';
    outputDiv.innerHTML += '<p>Tasa de interés: ' + interes + '%</p>';
    outputDiv.innerHTML += '<p>Plazo: ' + años + ' años</p>';
    outputDiv.innerHTML += '<p>Pago mensual: $' + pagoMensual.toFixed(2) + '</p>';
    outputDiv.innerHTML += '<p>Costo Financiero Total: $' + montoTotal.toFixed(2) + '</p>';

    guardarDatos({ monto, interes, años, pagoMensual, montoTotal });
}

function guardarDatos(data) {
    
    localStorage.setItem('datosPrestamo', JSON.stringify(data));
}

function limpiarDatos() {
    
    document.getElementById('monto').value = '';
    document.getElementById('interes').value = '';
    document.getElementById('años').value = ''; 

    localStorage.removeItem('datosPrestamo');

    document.getElementById('output').innerHTML = '';
}
