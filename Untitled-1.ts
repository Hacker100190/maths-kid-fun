// Generate a random math question
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operator = Math.random() < 0.5 ? '+' : '-';
    const answer = operator === '+' ? num1 + num2 : num1 - num2;
    return { num1, num2, operator, answer };
}

// Display the question
function displayQuestion() {
    const questionElement = document.getElementById('question');
    const question = generateQuestion();
    questionElement.textContent = `What is ${question.num1} ${question.operator} ${question.num2}?`;
    return question.answer;
}

// Check the user's answer
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value, 10);
    const correctAnswer = displayQuestion();

    const resultElement = document.getElementById('result');
    if (userAnswer === correctAnswer) {
        resultElement.textContent = 'Correct! Well done!';
    } else {
        resultElement.textContent = `Incorrect. The correct answer is ${correctAnswer}. Try again!`;
    }
}

// Initial question display
displayQuestion();
