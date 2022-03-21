const quizData = [
    {
        question: "Vad heter världens högsta berg",
        
        a: "K2",
        b: "Mount chilliad",
        c: "Mount everest",
        d: "Kilimanjaro",
        correct: "c",
    },
    {
        question: "vad är sveriges huvudstad",
        a: "Göteborg",
        b: "Skåne",
        c: "Stockholm",
        d: "Uppsala",
        correct: "c",
    },
    {
        question: "vilken är sveriges andra största stad",
        a: "Stockhilm",
        b: "Göteborg",
        c: "Uppsala",
        d: "Skåne",
        correct: "b",
    },


];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')


const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0
let lives = 3

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}



submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score ++
       } 
       else {
           
           lives --
       }

       currentQuiz++


       if(currentQuiz < quizData.length) {
           loadQuiz()
           
       } else {
           quiz.innerHTML = `
           <h2>You got ${score}/${quizData.length} points</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})