function enviar() {
    const fecha = document.getElementById('fecha').value;
    const cliente = document.getElementById('cliente').value;

    const lacteos = {
        queso_oaxaca: document.getElementById('queso_oaxaca').checked,
        queso_panela: document.getElementById('queso_panela').checked,
        crema: document.getElementById('crema').checked,
        queso_rallado: document.getElementById('queso_rallado').checked,
        leche: document.getElementById('leche').checked,
        crema_lactea: document.getElementById('crema_lactea').checked,
        yogurt: document.getElementById('yogurt').checked,
        danoninos: document.getElementById('danoninos').checked
    };

    const limpieza = {
        cloro: document.getElementById('cloro').checked,
        pino: document.getElementById('pino').checked,
        fabuloso: document.getElementById('fabuloso').checked,
        jabon_roma: document.getElementById('jabon_roma').checked,
        jabon_ariel: document.getElementById('jabon_ariel').checked
    };

    const enlatados = {
        chiles: document.getElementById('chiles').checked,
        atun: document.getElementById('atun').checked,
        frijoles: document.getElementById('frijoles').checked,
        frutas: document.getElementById('frutas').checked,
        verduras: document.getElementById('verduras').checked
    };

    console.log('Fecha:', fecha);
    console.log('Nombre del cliente:', cliente);
    console.log('Lácteos:', lacteos);
    console.log('Limpieza:', limpieza);
    console.log('Alimentos Enlatados:', enlatados);

    alert('Pedido enviado. Revisa la consola para más detalles.');
}
