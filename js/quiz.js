document.querySelectorAll(".quiz-level-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const level = this.getAttribute("data-level");
    sessionStorage.setItem("selectedLevel", level);
    document.getElementById("level-selection").style.display = "none";
    document.getElementById("topic-selection").style.display = "block";
  });
});

document.querySelectorAll(".quiz-topic-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const topic = this.getAttribute("data-topic");
    sessionStorage.setItem("selectedTopic", topic);
    document.getElementById("topic-selection").style.display = "none";
    document.getElementById("start-quiz").style.display = "block";
  });
});

document
  .getElementById("start-quiz-btn")
  .addEventListener("click", function () {
    const level = sessionStorage.getItem("selectedLevel");
    const topic = sessionStorage.getItem("selectedTopic");

    if (level && topic) {
      // Load the quiz questions based on the selected level and topic.
      document.getElementById("quiz-options").style.display = "none";
      document.getElementById(
        "quiz-content"
      ).innerHTML = `<h3>Selected Level: ${level}</h3><h3>Selected Topic: ${topic}</h3><p>Quiz content goes here...</p>`;
    } else {
      alert("Please select both a level and a topic.");
    }
  });
