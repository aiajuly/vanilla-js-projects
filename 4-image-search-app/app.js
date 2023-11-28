const searchBtnEl = document.querySelector('#search-btn');
const showMoreBtnEl = document.querySelector('#show-more-btn');
const searchResultsEl = document.querySelector('.search-results');

let pageCount = 1;
let searchTerm = '';



const fetchImages = async function(){

    searchTerm = document.querySelector('#search-term').value;

    const clientId = 'TnCPFnau_8NghqJBD1DciTE_im7SrP5OJLrigDzUtqM';
    const perPage = 9;
    url = `https://api.unsplash.com/search/photos?page=${pageCount}&per_page=${perPage}&query=${searchTerm}&client_id=${clientId}`;

    const res = await fetch(url);
    const imagesData = await res.json();

    displayImages(imagesData);

};




const displayImages = function(imagesData){

    pageCount++;
    
    if(pageCount > 1){
        showMoreBtnEl.classList.remove('hide');
    };

    imagesData.results.map((res) => {

        const card = document.createElement('a')
        card.classList.add('card')
        card.href = res.urls.raw;

        const img = document.createElement('img');
        img.classList.add('img');
        img.src = res.urls.raw;

        const description = document.createElement('p');
        description.classList.add('description');
        description.innerHTML = res.slug;

        searchResultsEl.appendChild(card);
        card.appendChild(img);
        card.appendChild(description);
    });
};




searchBtnEl.addEventListener('click', (ev) => {
    ev.preventDefault();
    fetchImages();
});




showMoreBtnEl.addEventListener('click', (ev) => {
    ev.preventDefault();
    fetchImages();
})