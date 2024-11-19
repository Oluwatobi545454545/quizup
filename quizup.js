let username = document.getElementById('username');
let displayerror = document.getElementById('error');
let displayusername = document.getElementById('displayusername');
let section1 = document.getElementById('homepage')
let section2 = document.getElementById('section2');
let section3 = document.getElementById('section3');
let section4 = document.getElementById('section4');
let section5 = document.getElementById('section5');
let circleans = document.getElementById('circleans')
let circleansmain = document.getElementById('circleansmain')
let questionhtml = document.getElementById('question')
let mathematics1 = document.getElementById('mathematics')
let science = document.getElementById('science')
let history = document.getElementById('history')
let english = document.getElementById('english')
let geography = document.getElementById('geography')
let philosophy = document.getElementById('philosophy')
let option1 = document.getElementById('options1')
let option2 = document.getElementById('options2')
let option3 = document.getElementById('options3')
let option4 = document.getElementById('options4')
let showresult = document.getElementById('showresult')
let questionno = document.getElementById('questionno')
let timer = document.getElementById('timer')
let allquestions = [];
let currentquestion = 0;
let score = 0;
let countdown = 60;
let changeno = 0;
function movetosubject() {
    if (username.value == '') {
        displayerror.innerText = 'pls create a username';
        return;
    } else {
        document.getElementById('homepage').style.display = 'none';
        section2.style.display = 'flex';
        displayusername.innerHTML = username.value;
    }
}

const questionsArray = [
]

function mathematics() {

    allquestions = [
        {
            question: "What is 12 × 8?",
            options: ["86", "96", "76", "88"],
            answer: "1" // Correct answer is 96
        },
        {
            question: "What is the square root of 81?",
            options: ["7", "8", "9", "10"],
            answer: "2" // Correct answer is 9
        },
        {
            question: "What is 25% of 200?",
            options: ["40", "50", "25", "45"],
            answer: "1" // Correct answer is 50
        },
        {
            question: "Solve: 15 ÷ 3 × 2",
            options: ["10", "15", "5", "20"],
            answer: "0" // Correct answer is 10
        },
        {
            question: "What is 7³ (7 raised to the power of 3)?",
            options: ["243", "343", "441", "403"],
            answer: "1" // Correct answer is 343
        },
        {
            question: "What is the value of π (Pi) approximately?",
            options: ["3.21", "3.14", "3.41", "3.24"],
            answer: "1" // Correct answer is 3.14
        },
        {
            question: "Simplify: 5 × (2 + 3)",
            options: ["20", "25", "30", "15"],
            answer: "1" // Correct answer is 25
        },
        {
            question: "What is the perimeter of a square with side 6 cm?",
            options: ["24 cm", "12 cm", "18 cm", "36 cm"],
            answer: "0" // Correct answer is 24 cm
        },
        {
            question: "Solve: 3 + 6 × (5 + 4) ÷ 3 - 7",
            options: ["11", "14", "15", "13"],
            answer: "1" // Correct answer is 14
        },
        {
            question: "What is the sum of angles in a triangle?",
            options: ["360°", "180°", "90°", "270°"],
            answer: "1" // Correct answer is 180°
        }
    ];

    localStorage.setItem('savesubject', mathematics )
    section5.style.display = 'block'
    section2.style.display = 'none'; section3.style.display = 'none'
    science.style.display = 'none'; history.style.display = 'none';
    english.style.display = 'none'; geography.style.display = 'none';
    philosophy.style.display = 'none'; mathematics1.style.display = 'none';
    currentquestion = 0;
    score = 0;
    displayquestion()
}
function displayscience() {
    allquestions = [
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "O2", "CO2", "NaCl"],
            answer: "0" // Correct answer is H2O
        },
        {
            question: "What planet is closest to the Sun?",
            options: ["Venus", "Mercury", "Earth", "Mars"],
            answer: "1" // Correct answer is Mercury
        },
        {
            question: "What gas do plants absorb for photosynthesis?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "1" // Correct answer is Carbon Dioxide
        },
        {
            question: "What is the speed of light?",
            options: ["300,000 km/s", "150,000 km/s", "250,000 km/s", "350,000 km/s"],
            answer: "0" // Correct answer is 300,000 km/s
        },
        {
            question: "What part of the cell contains DNA?",
            options: ["Mitochondria", "Nucleus", "Ribosome", "Cytoplasm"],
            answer: "1" // Correct answer is Nucleus
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Ag", "Au", "Pb", "Fe"],
            answer: "1" // Correct answer is Au
        },
        {
            question: "What force keeps us on the ground?",
            options: ["Magnetism", "Friction", "Gravity", "Momentum"],
            answer: "2" // Correct answer is Gravity
        },
        {
            question: "What is the most abundant gas in Earth's atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            answer: "1" // Correct answer is Nitrogen
        },
        {
            question: "What organ is responsible for pumping blood in the body?",
            options: ["Lungs", "Heart", "Liver", "Kidney"],
            answer: "1" // Correct answer is Heart
        },
        {
            question: "What is the center of an atom called?",
            options: ["Proton", "Neutron", "Electron", "Nucleus"],
            answer: "3" // Correct answer is Nucleus
        }
    ];
        localStorage.setItem('savesubject', displayscience )
    section5.style.display = 'block'
    section2.style.display = 'none'; section3.style.display = 'none'
    science.style.display = 'none'; history.style.display = 'none';
    english.style.display = 'none'; geography.style.display = 'none';
    philosophy.style.display = 'none'; mathematics1.style.display = 'none';
    currentquestion = 0;
    score = 0;
    displayquestion()
}
function displaygeneralknowledge() {
    allquestions = [
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
            answer: "1" // Correct answer is Leonardo da Vinci
        },
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "2" // Correct answer is Paris
        },
        {
            question: "In which year did World War II end?",
            options: ["1945", "1939", "1950", "1941"],
            answer: "0" // Correct answer is 1945
        },
        {
            question: "Who invented the telephone?",
            options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "James Watt"],
            answer: "1" // Correct answer is Alexander Graham Bell
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "1" // Correct answer is Mars
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "3" // Correct answer is Pacific Ocean
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            answer: "1" // Correct answer is William Shakespeare
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            answer: "1" // Correct answer is Vatican City
        },
        {
            question: "How many continents are there?",
            options: ["6", "7", "5", "8"],
            answer: "1" // Correct answer is 7
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            answer: "2" // Correct answer is Diamond
        }
    ];
        localStorage.setItem('savesubject', displaygeneralknowledge )
    section5.style.display = 'block'
    section2.style.display = 'none'; section3.style.display = 'none'
    science.style.display = 'none'; history.style.display = 'none';
    english.style.display = 'none'; geography.style.display = 'none';
    philosophy.style.display = 'none'; mathematics1.style.display = 'none';
    currentquestion = 0;
    score = 0;
    displayquestion()
}
function displayenglish() {
    allquestions = [
        {
            question: "Which word is a synonym for 'happy'?",
            options: ["Sad", "Joyful", "Angry", "Tired"],
            answer: "1" // Correct answer is Joyful
        },
        {
            question: "Which is a verb?",
            options: ["Run", "Quick", "Beautiful", "Chair"],
            answer: "0" // Correct answer is Run
        },
        {
            question: "Which sentence is grammatically correct?",
            options: [
                "She don’t like pizza.",
                "She doesn’t likes pizza.",
                "She doesn’t like pizza.",
                "She not like pizza."
            ],
            answer: "2" // Correct answer is She doesn’t like pizza.
        },
        {
            question: "What is the past tense of 'go'?",
            options: ["Goes", "Went", "Gone", "Going"],
            answer: "1" // Correct answer is Went
        },
        {
            question: "What type of word is 'quickly'?",
            options: ["Adjective", "Noun", "Adverb", "Verb"],
            answer: "2" // Correct answer is Adverb
        },
        {
            question: "What is the plural of 'mouse'?",
            options: ["Mouses", "Mouse", "Mice", "Mices"],
            answer: "2" // Correct answer is Mice
        },
        {
            question: "What is the opposite of 'hot'?",
            options: ["Warm", "Cold", "Hotter", "Freezing"],
            answer: "1" // Correct answer is Cold
        },
        {
            question: "Which is a pronoun?",
            options: ["Table", "She", "Beautiful", "Walk"],
            answer: "1" // Correct answer is She
        },
        {
            question: "Which of these is a conjunction?",
            options: ["And", "Run", "Apple", "Quickly"],
            answer: "0" // Correct answer is And
        },
        {
            question: "What is a synonym for 'difficult'?",
            options: ["Easy", "Hard", "Simple", "Light"],
            answer: "1" // Correct answer is Hard
        }
    ];
        localStorage.setItem('savesubject', displayenglish )
    section5.style.display = 'block'
    section2.style.display = 'none'; section3.style.display = 'none'
    science.style.display = 'none'; history.style.display = 'none';
    english.style.display = 'none'; geography.style.display = 'none';
    philosophy.style.display = 'none'; mathematics1.style.display = 'none';
    currentquestion = 0;
    score = 0;
    displayquestion()
}
function displaygeography() {
    allquestions = [
        {
            question: "Which is the largest continent by area?",
            options: ["Africa", "Asia", "Europe", "North America"],
            answer: "1" // Correct answer is Asia
        },
        {
            question: "Which river is the longest in the world?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            answer: "1" // Correct answer is Nile
        },
        {
            question: "What is the capital of Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
            answer: "2" // Correct answer is Canberra
        },
        {
            question: "Which country has the most people?",
            options: ["India", "China", "United States", "Indonesia"],
            answer: "1" // Correct answer is China
        },
        {
            question: "Which desert is the largest in the world?",
            options: ["Sahara", "Arabian", "Gobi", "Kalahari"],
            answer: "0" // Correct answer is Sahara
        },
        {
            question: "Which mountain is the tallest in the world?",
            options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
            answer: "0" // Correct answer is Mount Everest
        },
        {
            question: "Which ocean is the smallest?",
            options: ["Atlantic", "Pacific", "Indian", "Arctic"],
            answer: "3" // Correct answer is Arctic
        },
        {
            question: "What is the capital of Japan?",
            options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
            answer: "1" // Correct answer is Tokyo
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["India", "Japan", "China", "South Korea"],
            answer: "1" // Correct answer is Japan
        },
        {
            question: "What is the primary language of Brazil?",
            options: ["Spanish", "Portuguese", "French", "Italian"],
            answer: "1" // Correct answer is Portuguese
        }
    ];
    localStorage.setItem('savesubject', displaygeography )
    section5.style.display = 'block'
    section2.style.display = 'none'; section3.style.display = 'none'
    science.style.display = 'none'; history.style.display = 'none';
    english.style.display = 'none'; geography.style.display = 'none';
    philosophy.style.display = 'none'; mathematics1.style.display = 'none';
    currentquestion = 0;
    score = 0;
    displayquestion()
}
function displayphilosophy() {
    allquestions = [
        {
            question: "Who is considered the Father of Western Philosophy?",
            options: ["Aristotle", "Plato", "Socrates", "Descartes"],
            answer: "2" // Correct answer is Socrates
        },
        {
            question: "What is the main subject of metaphysics?",
            options: ["Reality", "Morality", "Language", "Logic"],
            answer: "0" // Correct answer is Reality
        },
        {
            question: "Who wrote 'The Republic'?",
            options: ["Socrates", "Plato", "Aristotle", "Nietzsche"],
            answer: "1" // Correct answer is Plato
        },
        {
            question: "What is the philosophy of ethics about?",
            options: ["Existence", "Knowledge", "Right and Wrong", "Art"],
            answer: "2" // Correct answer is Right and Wrong
        },
        {
            question: "Which philosopher said 'I think, therefore I am'?",
            options: ["Hume", "Descartes", "Kant", "Locke"],
            answer: "1" // Correct answer is Descartes
        },
        {
            question: "What is epistemology the study of?",
            options: ["Nature", "Knowledge", "Reality", "Politics"],
            answer: "1" // Correct answer is Knowledge
        },
        {
            question: "Who wrote 'Beyond Good and Evil'?",
            options: ["Hegel", "Nietzsche", "Schopenhauer", "Spinoza"],
            answer: "1" // Correct answer is Nietzsche
        },
        {
            question: "What does existentialism focus on?",
            options: ["Reason", "Existence", "History", "Mathematics"],
            answer: "1" // Correct answer is Existence
        },
        {
            question: "Who is the author of 'Meditations'?",
            options: ["Seneca", "Marcus Aurelius", "Plato", "Cicero"],
            answer: "1" // Correct answer is Marcus Aurelius
        },
        {
            question: "What is the opposite of determinism?",
            options: ["Existentialism", "Empiricism", "Free Will", "Skepticism"],
            answer: "2" // Correct answer is Free Will
        }
    ];
    localStorage.setItem('savesubject', displayphilosophy )
    section2.style.display = 'none'; section3.style.display = 'none'
    section5.style.display = 'block'
    science.style.display = 'none'; history.style.display = 'none';
    english.style.display = 'none'; geography.style.display = 'none';
    philosophy.style.display = 'none'; mathematics1.style.display = 'none';
    currentquestion = 0;
    score = 0;
    // showtimer()
    displayquestion()
}

function startquiz(){
   let selectedsubject =  localStorage.getItem('savesubject')
    section5.style.display = 'none';
    section3.style.display = 'block';
    displayquestion(selectedsubject);
    showtimer()
}

function showtimer() {
    let countdown1 = setInterval(() =>{
        if (countdown <= 0) {
            section3.style.display = 'none'
            section4.style.display = 'block'
            displayanswer()
            return
        }

        timer.innerHTML = countdown;
        countdown--;
    },2000)
    console.log(countdown1);
    

}



function displayanswer() {
    let totalscore = allquestions.length;
    let userscore = score;
    let percentage = (userscore / totalscore) * 100;
    circleans.innerHTML = `${score} out of ${allquestions.length}</p> `;
    circleansmain.innerHTML = `${percentage}%`;
    section3.style.display = 'none';
    section4.style.display = 'block';
}

function displayquestion() {
    if (currentquestion >= allquestions.length) {
        displayanswer()
        return;
    }
    questionno.innerHTML = changeno++;


    questionhtml.innerHTML = allquestions[currentquestion].question;
    option1.innerHTML =
        `<input type="radio" name="answer" value="0">${allquestions[currentquestion].options[0]}`
        ;
    option2.innerHTML =
        `<input type="radio" name="answer" value="1">${allquestions[currentquestion].options[1]}`
        ;
    option3.innerHTML =
        `<input type="radio" name="answer" value="2">${allquestions[currentquestion].options[2]}`
        ;
    option4.innerHTML =
        `<input type="radio" name="answer" value="3">${allquestions[currentquestion].options[3]}`
        ;
    showtimer()

};
function nextquestion() {
    const answer = document.querySelector('input[name="answer"]:checked');

    if (answer) {
        if (answer.value == allquestions[currentquestion].answer) {
            score++;
            currentquestion++;
        }
    } else if (!answer) {
        currentquestion++
    }
    displayquestion();
    // showtimer()
}
function startagain(){
    window.location.reload();
}
