// defining things

const quizData = [
    {
        question: 'Aztec civilization originated from which country?',
        a: 'Kuba',
        b: 'Brazil',
        c: 'Mexico',
        correct: 'c'
    },
    {
        question: 'America bought Alaska from?',
        a: 'Russia',
        b: 'Denmark',
        c: 'Canada',
        correct: 'a'
    },
    {
        question: 'Who was the first man to walk on the moon?',
        a: 'Donald Trump',
        b: 'Putin',
        c: 'Neil Armstrong',
        correct: 'c'
    },
    {
        question: 'Who is the founder of the Communist Party?',
        a: 'Stalin',
        b: 'Lenin',
        c: 'Karl Marx',
        correct: 'b'
    }
];

const submitBtnEl = document.querySelector('.submit-btn');
const reloadBtnEl = document.querySelector('.reload-btn');
const questionEl = document.querySelector('.question');
const a_text = document.querySelector('#a-text');
const b_text = document.querySelector('#b-text');
const c_text = document.querySelector('#c-text');
const radioBtnEls = document.querySelectorAll('.answer')
const cardEl = document.querySelector('.card');
const endCardEl = document.querySelector('.end-card');
const scoreEl = document.querySelector('.score')

let score = 0;
let currentQuestion = 0;





// functions

const displayQuestion = function(){

    deselectRadio();

    if(currentQuestion === quizData.length)
    {
        scoreEl.innerHTML = score;
        cardEl.classList.add('hide');
        endCardEl.classList.remove('hide');
        return
    }

    questionEl.innerHTML = quizData[currentQuestion].question;
    a_text.innerHTML = quizData[currentQuestion].a;
    b_text.innerHTML = quizData[currentQuestion].b;
    c_text.innerHTML = quizData[currentQuestion].c;
};

const getAnswer = function(){
    let answer = undefined;

    radioBtnEls.forEach((radioBtnEl) => {
        if(radioBtnEl.checked){
            answer = radioBtnEl.id;
        };
    });

    return answer;
};


const deselectRadio = function(){
    radioBtnEls.forEach((radioBtnEl) => {
        radioBtnEl.checked = false;
    });
};



// calling functions

displayQuestion();


// event listeners

submitBtnEl.addEventListener('click', () => {

    const answer = getAnswer();
    
    if(!answer){

    } else if(answer === quizData[currentQuestion].correct){
        currentQuestion++;
        score++;
        displayQuestion();
    }  else{
        currentQuestion++;
        displayQuestion();
    }


});

reloadBtnEl.addEventListener('click', () => {
    location.reload();
});