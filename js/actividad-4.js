function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer, feedbackId) {
        const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
        const feedbackElement = document.getElementById(feedbackId);

        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswer) {
                correctCount++;
                feedbackElement.innerHTML = '<span style="color: green;">Respuesta correcta</span>';
            } else {
                incorrectCount++;
                feedbackElement.innerHTML = '<span style="color: red;">Respuesta incorrecta</span>';
            }
        } else {
            incorrectCount++;
            feedbackElement.innerHTML = '<span style="color: blue;">Por favor, selecciona una respuesta</span>';
        }
    }

    checkAnswer('q1', 'a', 'feedback-q1');
    checkAnswer('q2', 'b', 'feedback-q2');
    checkAnswer('q3', 'c', 'feedback-q3');
    checkAnswer('q4', 'd', 'feedback-q4');
    checkAnswer('q5', 'a', 'feedback-q5');
    checkAnswer('q6', 'd', 'feedback-q6');
    checkAnswer('q7', 'a', 'feedback-q7');
    checkAnswer('q8', 'c', 'feedback-q8');
    checkAnswer('q9', 'c', 'feedback-q9');

    // Mostrar el total de respuestas correctas e incorrectas
    const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    console.log(resultMessage); // O puedes mostrar esto en un elemento HTML si lo deseas
}



