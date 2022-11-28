function conectarDB() {

    const abrirConexion = window.indexedDB.open('crm', 1);

    abrirConexion.onerror = function () {
        console.log('Hubo un error');
    }

    abrirConexion.onsuccess = function () {
        /** Instancia a la BD con todos los métodos disponibles */
        DB = abrirConexion.result;
    }
}

function imprimirAlerta(mensaje, tipo) {

    const alerta = document.querySelector('.alerta');

    if (!alerta) {
        /** Crear alerta */
        const divMensaje = document.createElement('div');

        divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'max-auto', 'mt-6', 'text-center', 'border', 'alerta', 'uppercase', 'font-bold');

        if (tipo === 'error') {
            divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        } else {
            divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
        }

        divMensaje.textContent = mensaje;

        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}