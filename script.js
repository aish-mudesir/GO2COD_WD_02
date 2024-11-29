const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which programming language is primarily used for web development?",
      options: ["Python", "JavaScript", "C++", "Ruby"],
      answer: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
  ];
  
  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");
  const submitButton = document.getElementById("submit");
  
  function loadQuiz() {
    quizData.forEach((data, index) => {
      const quizBlock = document.createElement("div");
      quizBlock.className = "question";
  
      quizBlock.innerHTML = `
        <h3>${index + 1}. ${data.question}</h3>
        <div class="options">
          ${data.options
            .map(
              (option, i) =>
                `<label>
                  <input type="radio" name="question${index}" value="${option}" />
                  ${option}
                </label>`
            )
            .join("")}
        </div>
      `;
      quizContainer.appendChild(quizBlock);
    });
  }
  
  submitButton.addEventListener("click", () => {
    let score = 0;
    let feedback = "";
  
    quizData.forEach((data, index) => {
      const userAnswer = document.querySelector(
        `input[name="question${index}"]:checked`
      );
  
      if (userAnswer) {
        const isCorrect = userAnswer.value === data.answer;
        feedback += `<p>${index + 1}. ${
          isCorrect
            ? `<strong>Correct ✅</strong> (${data.answer})`
            : `<strong>Wrong ❌</strong> (Correct: ${data.answer})`
        }</p>`;
        if (isCorrect) score++;
      } else {
        feedback += `<p>${index + 1}. <strong>No Answer ❌</strong> (Correct: ${
          data.answer
        })</p>`;
      }
    });
  
    resultContainer.innerHTML = `
      <h3>Your Score: ${score}/${quizData.length}</h3>
      ${feedback}
    `;
    resultContainer.style.display = "block";
  });
  
  loadQuiz();
  