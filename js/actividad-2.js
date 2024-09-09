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

    checkAnswer('q1', 'c', 'feedback-q1', {
        'a': 'La opción "Sistemas de Archivos" se refiere más a la estructura y el método para organizar archivos, no a la administración de espacio.',
        'b': 'La "Gestión de Cuotas" está relacionada con la limitación del espacio disponible para los usuarios, pero no con la asignación y liberación de espacio en sí.'
    });

    checkAnswer('q2', 'a', 'feedback-q2', {
        'b': 'La "Gestión de Cuotas" está relacionada con la limitación de espacio, pero no define la estructura ni el método para organizar archivos.',
        'c': 'La "Administración de Espacio" se refiere más al manejo del almacenamiento en sí, pero no al método de organización de archivos.'
    });

    checkAnswer('q3', 'b', 'feedback-q3', {
        'a': 'Los "Sistemas de Archivos" gestionan cómo se organizan los archivos, no el control del espacio que puede usar cada usuario.',
        'c': 'La "Administración de Espacio" implica la gestión de almacenamiento, pero la "Gestión de Cuotas" específicamente limita el uso del espacio por usuarios.'
    });

    checkAnswer('q4', 'c', 'feedback-q4', {
        'a': 'Aunque es cierto que un uso excesivo de intercambio de memoria puede ralentizar el sistema, la respuesta correcta se enfoca en las ventajas del intercambio.',
        'b': 'Es cierto que el uso prolongado puede afectar la vida útil del disco, pero no es la ventaja principal del uso de la memoria de intercambio.'
    });

    checkAnswer('q5', 'a', 'feedback-q5', {
        'b': 'Esta respuesta describe una ventaja importante del uso de memoria de intercambio, pero en este caso el enfoque es sobre las desventajas del uso excesivo.',
        'c': 'Esta descripción corresponde a la "Gestión de Cuotas", no a la memoria de intercambio.'
    });

    checkAnswer('q6', 'a', 'feedback-q6', {
        'b': 'Esta respuesta describe una ventaja de la memoria de intercambio, pero no tiene que ver con los mapas de bits.',
        'c': 'Esta descripción corresponde a la "Gestión de Cuotas", no al manejo de memoria con mapas de bits.'
    });

    checkAnswer('q7', 'b', 'feedback-q7', {
        'a': 'El uso de mapas de bits describe otro método de manejo de memoria, pero no las listas ligadas.',
        'c': 'La ralentización del sistema por intercambio de datos se refiere a la memoria de intercambio, no al manejo de memoria con listas ligadas.'
    });

    checkAnswer('q8', 'a', 'feedback-q8', {
        'b': 'Esta descripción corresponde a los mapas de bits, no al manejo con listas ligadas.',
        'c': 'Esta respuesta describe una ventaja de la memoria de intercambio, pero no se relaciona con las listas ligadas.'
    });

    checkAnswer('q9', 'b', 'feedback-q9', {
        'a': 'Esta opción describe la estructura de las listas ligadas, pero no su funcionamiento cuando se libera memoria.',
        'c': 'Esta respuesta describe un problema potencial del uso excesivo de memoria de intercambio, pero no se relaciona con el manejo de memoria en listas ligadas.'
    });

    // Mostrar el total de respuestas correctas e incorrectas
    //const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    //console.log(resultMessage); // O puedes mostrar esto en un elemento HTML si lo deseas
}
