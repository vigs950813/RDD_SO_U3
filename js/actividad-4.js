function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer, feedbackId, incorrectFeedback) {
        const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
        const feedbackElement = document.getElementById(feedbackId);

        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswer) {
                correctCount++;
                feedbackElement.innerHTML = '<span style="color: green;">Respuesta correcta</span>';
            } else {
                incorrectCount++;
                feedbackElement.innerHTML = `<span style="color: red;">Respuesta incorrecta. ${incorrectFeedback[selectedAnswer.value]}</span>`;
            }
        } else {
            incorrectCount++;
            feedbackElement.innerHTML = '<span style="color: blue;">Por favor, selecciona una respuesta</span>';
        }
    }

    // Preguntas y retroalimentación personalizada
    checkAnswer('q1', 'a', 'feedback-q1', {
        'b': 'La paginación simple divide la memoria en partes iguales, pero no segmenta el espacio según el contenido lógico. <br>Respuesta correcta: a)',
        'c': 'La segmentación simple organiza la memoria en secciones lógicas, lo cual permite un mejor manejo de direcciones. <br>Respuesta correcta: a)'
    });

    checkAnswer('q2', 'b', 'feedback-q2', {
        'a': 'La paginación solo divide la memoria, pero no tiene en cuenta los tamaños variables de segmentos lógicos. <br>Respuesta correcta: b)',
        'c': 'Los sistemas monoprogramados no hacen uso eficiente de la memoria en comparación con los multiprogramados. <br>Respuesta correcta: b)'
    });

    checkAnswer('q3', 'c', 'feedback-q3', {
        'a': 'La memoria segmentada permite particiones lógicas variables, pero aquí se pregunta por la fragmentación interna. <br>Respuesta correcta: c)',
        'b': 'Este tipo de fragmentación ocurre principalmente en particiones fijas de memoria. <br>Respuesta correcta: c)'
    });

    checkAnswer('q4', 'd', 'feedback-q4', {
        'a': 'La fragmentación externa es una consecuencia de particionar la memoria en bloques de tamaño fijo. <br>Respuesta correcta: d)',
        'b': 'Si bien el uso de paginación reduce la fragmentación externa, no la elimina completamente. <br>Respuesta correcta: d)'
    });

    checkAnswer('q5', 'a', 'feedback-q5', {
        'b': 'La memoria virtual permite un espacio de direcciones más amplio que la memoria física disponible. <br>Respuesta correcta: a)',
        'c': 'El uso de tablas de páginas ayuda a evitar que una única tarea ocupe toda la memoria disponible. <br>Respuesta correcta: a)'
    });

    checkAnswer('q6', 'd', 'feedback-q6', {
        'a': 'Los mapas de bits son utilizados para llevar el control de bloques libres, pero aquí se pregunta por la segmentación. <br>Respuesta correcta: d)',
        'b': 'La paginación resuelve ciertos problemas, pero la segmentación es más eficiente en sistemas modernos. <br>Respuesta correcta: d)'
    });

    checkAnswer('q7', 'a', 'feedback-q7', {
        'b': 'El swapping es costoso en términos de tiempo, pero esencial en sistemas multitarea. <br>Respuesta correcta: a)',
        'c': 'El área de intercambio (swap) es una técnica utilizada para liberar espacio en la memoria física. <br>Respuesta correcta: a)'
    });

    checkAnswer('q8', 'c', 'feedback-q8', {
        'a': 'La segmentación y paginación juntas ofrecen mayor flexibilidad y uso eficiente de la memoria. <br>Respuesta correcta: c)',
        'b': 'El uso de tablas de páginas reduce la fragmentación interna, pero puede introducir algo de fragmentación externa. <br>Respuesta correcta: c)'
    });

    checkAnswer('q9', 'c', 'feedback-q9', {
        'a': 'La segmentación proporciona un espacio lógico más flexible que las simples particiones de memoria física. <br>Respuesta correcta: c)',
        'b': 'El espacio virtual permite mayor flexibilidad y manejo de procesos que requieren grandes cantidades de memoria. <br>Respuesta correcta: c)'
    });

    // Mostrar el total de respuestas correctas e incorrectas
    //const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    //console.log(resultMessage); // O puedes mostrar esto en un elemento HTML si lo deseas
}
