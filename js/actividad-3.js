function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer, feedbackId, explanation) {
        const feedbackSpan = document.getElementById(feedbackId);
        
        // Para los campos de texto
        if (['q8', 'q9', 'q10'].includes(questionName)) {
            const textAnswer = document.querySelector(`input[name=${questionName}]`).value.trim();
            if (textAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                correctCount++;
                feedbackSpan.innerHTML = "<span style='color: green;'>Respuesta correcta</span>";
            } else {
                incorrectCount++;
                feedbackSpan.innerHTML = `<span style='color: red;'>Respuesta incorrecta. ${explanation}</span>`;
            }
        } else {
            // Para las preguntas de opción múltiple
            const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
            if (selectedAnswer) {
                if (selectedAnswer.value === correctAnswer) {
                    correctCount++;
                    feedbackSpan.innerHTML = "<span style='color: green;'>Respuesta correcta</span>";
                } else {
                    incorrectCount++;
                    feedbackSpan.innerHTML = `<span style='color: red;'>Respuesta incorrecta. ${explanation}</span>`;
                }
            } else {
                incorrectCount++;
                feedbackSpan.innerHTML = "<span style='color: blue;'>Por favor, selecciona una respuesta</span>";
            }
        }
    }

    // Validar preguntas de opción múltiple
    checkAnswer('q1', 'd', 'feedback-q1', 'Recuerda que las fases de ejecución incluyen el Compilador, Montador y las Bibliotecas. <br>Respuesta correcta: d)');
    checkAnswer('q2', 'a', 'feedback-q2', 'El fichero ejecutable se compone de Cabecera y Secciones, es importante distinguir sus componentes. <br>Respuesta correcta: a)');
    checkAnswer('q3', 'c', 'feedback-q3', 'En un sistema monoprogramado, la memoria principal se divide entre el sistema operativo y el programa que se ejecuta. <br>Respuesta correcta: c)');
    checkAnswer('q4', 'c', 'feedback-q4', 'El particionado variable introduce fragmentación externa cuando quedan huecos entre particiones.<br>Respuesta correcta: c)');
    checkAnswer('q5', 'b', 'feedback-q5', 'La paginación es la técnica que divide la memoria en secciones de igual tamaño. <br>Respuesta correcta: b)');
    checkAnswer('q6', 'a', 'feedback-q6', 'Una dirección lógica segmentada se compone de un número de segmento y un desplazamiento. <br>Respuesta correcta: a)');
    checkAnswer('q7', 'b', 'feedback-q7', 'La latencia de la zona de memoria swap es mucho mayor que la de la memoria principal. <br>Respuesta correcta: b)');

    // Validar preguntas de texto
    checkAnswer('q8', 'asociar páginas virtuales a los marcos de página', 'feedback-q8', 'El propósito de la tabla de páginas es asociar páginas virtuales a marcos de página en la memoria física. <br> Respuesta correcta: Asociar páginas virtuales a los marcos de página');
    checkAnswer('q9', 'el número de página virtual es un argumento y el número de marco físico es un resultado', 'feedback-q9', 'La función de la tabla de páginas es convertir direcciones lógicas a físicas, de la página virtual al marco físico. <br> Respuesta correcta: El número de página virtual es un argumento y el número de marco físico es un resultado');
    checkAnswer('q10', 'en un sistema de multiprogramación, con bits y partes de muchos programas en memoria a la vez', 'feedback-q10', 'La memoria virtual permite que varios programas estén en memoria simultáneamente, aunque sus páginas no estén contiguas físicamente. <br> Respuesta correcta: En un sistema de multiprogramación, con bits y partes de muchos programas en memoria a la vez');

    // Validar pregunta verdadero/falso
    checkAnswer('q11', 'v', 'feedback-q11', 'La segmentación facilita la compartición de procedimientos entre usuarios al permitir compartir segmentos. <br>Respuesta correcta: Verdadero');

    // Puedes mostrar el número total de respuestas correctas si lo deseas
    //console.log(`Respuestas correctas: ${correctCount}`);
    //console.log(`Respuestas incorrectas: ${incorrectCount}`);
}
