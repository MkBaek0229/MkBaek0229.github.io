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
    next: [1, 4], // 올바른 답과 틀린 답에 따른 다음 질문 인덱스
  },
  {
    question: "Which K-POP group is known for the song 'How You Like That'?",
    choices: ["Red Velvet", "Blackpink", "Mamamoo", "GOT7"],
    correct: "Blackpink",
    next: [2, 5],
  },
  {
    question: "Which K-POP group has the album 'Don't Mess Up My Tempo'?",
    choices: ["EXO", "NCT", "BTS", "Stray Kids"],
    correct: "EXO",
    next: [3, 6],
  },
  {
    question: "Final Question: Who is known as the 'Nation's Girl Group'?",
    choices: ["Twice", "SNSD", "Red Velvet", "Mamamoo"],
    correct: "SNSD",
    next: [7, 8],
  },
  // 틀린 경로를 위한 추가 질문
  {
    question: "Who is known as the 'Queen of K-POP'?",
    choices: ["IU", "Taeyeon", "Sunmi", "Hwasa"],
    correct: "IU",
    next: [5, 9],
  },
  {
    question: "Which K-POP group debuted in 2016?",
    choices: ["NCT", "Blackpink", "Seventeen", "Red Velvet"],
    correct: "Blackpink",
    next: [6, 10],
  },
  {
    question: "Which K-POP group is known for the song 'DDU-DU DDU-DU'?",
    choices: ["Blackpink", "Twice", "Red Velvet", "ITZY"],
    correct: "Blackpink",
    next: [3, 11],
  },
  {
    result: "축하합니다! 당신은 K-POP 마스터입니다!",
  },
  {
    result: "좋은 시도였어요! 다시 도전해보세요.",
  },
  {
    result: "몇 가지 K-POP 지식을 알고 있네요! 더 많이 배워보세요.",
  },
  {
    result: "아쉽네요! K-POP 퀴즈를 더 공부해보세요!",
  },
  {
    result: "거의 다 왔어요! 조금 더 연습이 필요해요.",
  },
];

let currentQuestionIndex = 0;

function loadQuestion(questionIndex) {
  const currentQuestion = quizData[questionIndex];

  if (currentQuestion.result) {
    showResult(currentQuestion.result);
    return;
  }

  quizContainer.innerHTML = `
      <div class="question">${currentQuestion.question}</div>
      <div class="choices">
        ${currentQuestion.choices
          .map(
            (choice, idx) =>
              `<button class="choice" data-choice="${idx}">${choice}</button>`
          )
          .join("")}
      </div>
    `;

  document.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", function () {
      const choiceIndex = parseInt(button.getAttribute("data-choice"));
      if (currentQuestion.choices[choiceIndex] === currentQuestion.correct) {
        loadQuestion(currentQuestion.next[0]);
      } else {
        button.disabled = true;
        button.style.backgroundColor = "red";
        alert("틀린 답입니다. 다시 시도하세요.");
        loadQuestion(currentQuestion.next[1]);
      }
    });
  });
}

function showResult(result) {
  quizContainer.innerHTML = `<div class="question">${result}</div>`;
}

loadQuestion(currentQuestionIndex);
