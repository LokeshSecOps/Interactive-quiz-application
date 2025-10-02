const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "C", "JavaScript", "Java"],
    answer: "JavaScript"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Earth", "Saturn", "Jupiter"],
    answer: "Jupiter"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Iron", "Osmium", "Gold", "Oxygen"],
    answer: "Oxygen"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Mark Twain", "William Shakespeare", "Charles Dickens", "Jane Austen"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the square root of 64?",
    options: ["9", "6", "7", "8"],
    answer: "8"
  },
  {
    question: "Which continent is the Sahara Desert located in?",
    options: ["South America", "Asia", "Australia", "Africa"],
    answer: "Africa"
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["120°C", "90°C", "100°C", "110°C"],
    answer: "100°C"
  },
  {
    question: "Which organ pumps blood throughout the human body?",
    options: ["Heart", "Liver", "Lungs", "Brain"],
    answer: "Heart"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Mercury", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is the chemical formula for water?",
    options: ["CO2", "O2", "NaCl", "H2O"],
    answer: "H2O"
  },
  {
    question: "Which country is known for the Great Wall?",
    options: ["India", "Russia", "China", "Japan"],
    answer: "China"
  },
  {
    question: "What is the value of 9 × 7?",
    options: ["81", "56", "72", "63"],
    answer: "63"
  },
  {
    question: "Which gas do plants absorb from the atmosphere for photosynthesis?",
    options: ["Carbon Dioxide", "Nitrogen", "Hydrogen", "Oxygen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Who is known as the father of computers?",
    options: ["Alan Turing", "Steve Jobs", "Charles Babbage", "Bill Gates"],
    answer: "Charles Babbage"
  }
];

let currentIndex = 0;
let score = 0;

const questionBox = document.getElementById("question-box");
const optionsList = document.getElementById("options-list");
const nextBtn = document.getElementById("next-btn");
const scoreBox = document.getElementById("score-box");

function loadQuestion() {
  const current = questions[currentIndex];
  questionBox.textContent = `Q${currentIndex + 1}: ${current.question}`;
  optionsList.innerHTML = "";

  current.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => checkAnswer(li, current.answer);
    optionsList.appendChild(li);
  });
}

function checkAnswer(selected, correct) {
  const allOptions = document.querySelectorAll("#options-list li");
  allOptions.forEach(opt => opt.style.pointerEvents = "none");

  if (selected.textContent === correct) {
    selected.classList.add("correct");
    score++;
  } else {
    selected.classList.add("incorrect");
    allOptions.forEach(opt => {
      if (opt.textContent === correct) {
        opt.classList.add("correct");
      }
    });
  }
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  questionBox.textContent = "🎉 Quiz Completed!";
  optionsList.innerHTML = "";
  nextBtn.style.display = "none";
  scoreBox.textContent = `Your Score: ${score} / ${questions.length}`;
}

loadQuestion();
