const jokeEl = document.querySelector('p');
const btnEl = document.querySelector('button');

const url = 'https://icanhazdadjoke.com/';
const headers = {Accept: 'application/json'}


const fetchAndDisplayAJoke = async function(){

    try{
    const res = await fetch(url, {headers});
    const data = await res.json();

    jokeEl.textContent = data.joke;
    } catch (err) {
        jokeEl.textContent = 'Error! Something went wrong.'
    };
};


fetchAndDisplayAJoke();


btnEl.addEventListener('click', () => {
    fetchAndDisplayAJoke()
});