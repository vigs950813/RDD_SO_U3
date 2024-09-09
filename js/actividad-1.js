function validarRespuestas() {
    // Definir las respuestas correctas
    const respuestasCorrectas = {
        q1: 'v',
        q2: 'v',
        q3: 'f',
        q4: 'v',
        q5: 'v',
        q6: 'v',
        q7: 'v',
        q8: 'v',
        q9: 'f',
        q10: 'v',
    };

    // Definir los mensajes de retroalimentación
    const mensajesDeRetroalimentacion = {
        q1: 'La gestión de memoria principal y secundaria ha evolucionado significativamente, por lo que son importantes para el sistema operativo. <br>Respuesta correcta: Verdadero',
        q2: 'La gestión de la memoria es esencial porque permite que el sistema operativo controle y optimice el uso de la memoria principal. <br>Respuesta correcta: Verdadero',
        q3: 'Permiten que los procesos usen más memoria de la que físicamente está disponible. <br>Respuesta correcta: Falso',
        q4: 'Una mala gestión podría provocar que el sistema se vuelva lento o inestable. <br>Respuesta correcta: Verdadero',
        q5: 'Optimizan el uso de memoria y también mejoran el rendimiento general del sistema al permitir una ejecución más eficiente de múltiples procesos. <br>Respuesta correcta: Verdadero',
        q6: 'Es una técnica clave que permite que los procesos se ejecuten de manera independiente. <br>Respuesta correcta: Verdadero',
        q7: 'El sistema operativo puede residir en diferentes partes de la memoria, según el diseño del sistema. <br>Respuesta correcta: Verdadero',
        q8: 'La gestión de la memoria es esencial para la ejecución de procesos. <br>Respuesta correcta: Verdadero',
        q9: 'Un sistema de almacenamiento eficiente no tiene las tres características mencionadas. <br>Respuesta correcta: Falso',
        q10: 'Los registros del procesador son rápidos, pero tienen una capacidad limitada y un costo alto. <br>Respuesta correcta: Verdadero',
    };

    // Iterar sobre cada pregunta
    for (let i = 1; i <= 10; i++) {
        const preguntaName = 'q' + i;
        const checkboxes = document.getElementsByName(preguntaName);
        const preguntaRow = document.getElementById('pregunta' + i);

        // Limpiar colores previos y mensajes
        preguntaRow.style.backgroundColor = '';
        const mensajeAnterior = preguntaRow.querySelector('.mensaje-repaso');
        if (mensajeAnterior) {
            mensajeAnterior.remove();
        }

        // Verificar cuántos checkboxes están marcados
        const checkboxesMarcados = Array.from(checkboxes).filter(checkbox => checkbox.checked);

        if (checkboxesMarcados.length === 1) {
            // Obtener el valor del checkbox marcado
            const valorCheckbox = checkboxesMarcados[0].value;

            // Verificar si la respuesta es correcta
            if (valorCheckbox === respuestasCorrectas[preguntaName]) {
                // Respuesta correcta, pintar de verde (60% opaco) y mostrar mensaje
                preguntaRow.style.backgroundColor = 'rgba(144, 238, 144, 0.3)'; // lightgreen
                const mensaje = document.createElement('div');
                mensaje.classList.add('mensaje-repaso');
                mensaje.style.color = 'green';
                mensaje.innerText = 'Respuesta correcta';
                preguntaRow.appendChild(mensaje);
            } else {
                // Respuesta incorrecta, pintar de rojo (60% opaco) y mostrar mensaje de repaso personalizado
                preguntaRow.style.backgroundColor = 'rgba(255, 99, 71, 0.3)'; // lightcoral
                const mensaje = document.createElement('div');
                mensaje.classList.add('mensaje-repaso');
                mensaje.style.color = 'red';
                mensaje.innerHTML = mensajesDeRetroalimentacion[preguntaName]; // Usar innerHTML para mostrar HTML correctamente
                preguntaRow.appendChild(mensaje);
            }
        } else if (checkboxesMarcados.length === 0) {
            // Si no se selecciona ninguna opción, pintar de azul (60% opaco)
            preguntaRow.style.backgroundColor = 'rgba(173, 216, 230, 0.3)'; // lightblue
        } else if (checkboxesMarcados.length > 1) {
            // Mostrar mensaje de error si más de un checkbox está marcado en una fila
            alert('Error: Solo puedes seleccionar una opción por pregunta.');
            return; // Detener la validación si hay un error
        }
    }
}
