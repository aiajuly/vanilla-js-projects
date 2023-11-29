const displayedDataEl = document.querySelector('#displayed-data');
const btns = document.querySelectorAll('.btn');


const clearDisplayData = function(){
    displayedDataEl.value = '';
};

const deleteTheLastChar = function(){
    displayedDataEl.value = displayedDataEl.value.slice(0, -1);
};

const evaluate = function(){
    if(displayedDataEl.value === ""){
        return
    };

    displayedDataEl.value = eval(displayedDataEl.value);
};

const appendChar = function(userInput){
    displayedDataEl.value = displayedDataEl.value + userInput;
};

btns.forEach((btn) => {
    btn.addEventListener('click', () => {

        const userInput = btn.innerHTML;

        if(userInput === 'C'){
        clearDisplayData();
        } else
        if(userInput === '<i class="fa-solid fa-delete-left"></i>'){
            deleteTheLastChar();
        } else
        if(userInput === '<i class="fa-solid fa-equals"></i>'){
            evaluate();
        } else{
            appendChar(userInput);
        };
    });
});