function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer, feedbackId) {
        const feedbackSpan = document.getElementById(feedbackId);
        
        if (questionName === 'q8' || questionName === 'q9' || questionName === 'q10') {
            const textAnswer = document.querySelector(`input[name=${questionName}]`).value.trim();
            if (textAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                correctCount++;
                feedbackSpan.innerHTML = "<span style='color: green;'>Respuesta correcta</span>";
            } else {
                incorrectCount++;
                feedbackSpan.innerHTML = "<span style='color: red;'>Respuesta incorrecta</span>";
            }
        } else {
            const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);
            if (selectedAnswer) {
                if (selectedAnswer.value === correctAnswer) {
                    correctCount++;
                    feedbackSpan.innerHTML = "<span style='color: green;'>Respuesta correcta</span>";
                } else {
                    incorrectCount++;
                    feedbackSpan.innerHTML = "<span style='color: red;'>Respuesta incorrecta</span>";
                }
            } else {
                incorrectCount++;
                feedbackSpan.innerHTML = "<span style='color: blue;'>Por favor, selecciona una respuesta</span>";
            }
        }
    }

    // Check answers for radio button questions
    checkAnswer('q1', 'd', 'feedback-q1');
    checkAnswer('q2', 'a', 'feedback-q2');
    checkAnswer('q3', 'c', 'feedback-q3');
    checkAnswer('q4', 'c', 'feedback-q4');
    checkAnswer('q5', 'b', 'feedback-q5');
    checkAnswer('q6', 'a', 'feedback-q6');
    checkAnswer('q7', 'b', 'feedback-q7');

    // Check answer for text input questions
    checkAnswer('q8', 'asociar páginas virtuales a los marcos de página', 'feedback-q8');
    checkAnswer('q9', 'el número de página virtual es un argumento y el número de marco físico es un resultado', 'feedback-q9');
    checkAnswer('q10', 'en un sistema de multiprogramación, con bits y partes de muchos programas en memoria a la vez', 'feedback-q10');

    // Check the answer for the true/false question
    checkAnswer('q11', 'v', 'feedback-q11');
}
