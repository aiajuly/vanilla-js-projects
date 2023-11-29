const wordFieldEl = document.querySelector('#word-field');
const searchBtnEl = document.querySelector('button');
const answerEl = document.querySelector('.answer');
const targetWordEl = document.querySelector('.target-word');
const partOfSpeechEl = document.querySelector('.part-of-speech-value');
const ipaValueEl = document.querySelector('.ipa-value');
const definitionEl = document.querySelector('.definition');
const exampleEl = document.querySelector('.example');
const errorEl = document.querySelector('.error');




const fetchTheMeaning = async function(){

    const userInputedWord = wordFieldEl.value;

    if(!userInputedWord){

        answerEl.classList.add('hide');
        errorEl.innerHTML = 'Enter something.';
        errorEl.classList.remove('hide');

    } else{

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInputedWord}`;

        const res = await fetch(url);
        const data = await res.json();

        if(data.title && data.title === 'No Definitions Found'){

            answerEl.classList.add('hide');
            errorEl.innerHTML = 'No Definitions Found';
            errorEl.classList.remove('hide');
        
        } else{

            displayAnswer(data);

        };
    };
};


const displayAnswer = function(data){
    
    errorEl.classList.add('hide');

    answerEl.classList.remove('hide');

    targetWordEl.innerHTML = data[0].word;
    partOfSpeechEl.innerHTML = data[0].meanings[0].partOfSpeech;
    ipaValueEl.innerHTML = data[0].phonetic;
    definitionEl.innerHTML = data[0].meanings[0].definitions[0].definition;

    if(data[0].meanings[0].definitions[0].example){
        exampleEl.innerHTML = '&#8226;' + '' + data[0].meanings[0].definitions[0].example;
    } else{
        exampleEl.innerHTML = '';
    };
    
};


searchBtnEl.addEventListener('click', () => {

        fetchTheMeaning();
});