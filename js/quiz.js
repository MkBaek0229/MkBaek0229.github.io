document.getElementById("back-button").addEventListener("click", function () {
  window.location.href = "index.html";
});

const quizContainer = document.getElementById("quiz-container");

const quizData = [
  {
    question:
      "What is the name of the K-POP group with the hit song 'Dynamite'?",
    choices: ["BTS", "Blackpink", "EXO", "Twice"],
    correct: "BTS",
  },
  {
    question: "Which K-POP group is known for the song 'How You Like That'?",
    choices: ["Red Velvet", "Blackpink", "Mamamoo", "GOT7"],
    correct: "Blackpink",
  },
  {
    question: "Which K-POP group has the album 'Don't Mess Up My Tempo'?",
    choices: ["EXO", "NCT", "BTS", "Stray Kids"],
    correct: "EXO",
  },
];

let currentQuestionIndex = 0;

function loadQuestion(questionIndex) {
  const currentQuestion = quizData[questionIndex];

  quizContainer.innerHTML = `
    <div class="question">${currentQuestion.question}</div>
    <div class="choices">
      ${currentQuestion.choices
        .map((choice) => `<button class="choice">${choice}</button>`)
        .join("")}
    </div>
  `;

  document.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", function () {
      if (button.textContent === currentQuestion.correct) {
        if (questionIndex + 1 < quizData.length) {
          loadQuestion(questionIndex + 1);
        } else {
          quizContainer.innerHTML = `<div class="question">Congratulations! You have completed the quiz.</div>`;
        }
      } else {
        button.disabled = true;
        button.style.backgroundColor = "red";
        alert("Incorrect answer. Please try again.");
      }
    });
  });
}

loadQuestion(currentQuestionIndex);
