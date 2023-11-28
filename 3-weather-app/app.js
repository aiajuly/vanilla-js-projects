const submitBtnEl = document.querySelector('.submit');
const weatherDataEl = document.querySelector('.weather-data');
const errorEl = document.querySelector('.error')




const getWeatherData = async function(city){

    try{

        if(!city){
            throw new Error()
        };

    const apiKey = 'a23db3bb604ce06253ea737d6118c0fe';
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const res = await fetch(weatherApiUrl);
    const weatherData = await res.json();

    displayWeatherData(weatherData);

    } catch(e) {
        errorEl.classList.remove('hide')
        weatherDataEl.classList.add('hide');
    }
};




const displayWeatherData = function(weatherData){

    errorEl.classList.add('hide')
    weatherDataEl.classList.remove('hide');

    const icon = weatherData.weather[0].icon;
    const imgSrc = `http://openweathermap.org/img/wn/${icon}.png`;
    weatherDataEl.querySelector('.icon').src = imgSrc;

    weatherDataEl.querySelector('.state').innerHTML = weatherData.weather[0].description;

    tempInKelvin = weatherData.main.temp;
    tempInCelsius = Math.round(tempInKelvin - 273.15);
    weatherDataEl.querySelector('.tempreture').innerHTML = `${tempInCelsius}°C`;

    feelsLikeTempInKelvin = weatherData.main.feels_like;
    feelsLikeTempCelsius = Math.round(feelsLikeTempInKelvin - 273.15);
    weatherDataEl.querySelector('.feels-like').innerHTML = `<span>Feels likes:</span>${feelsLikeTempCelsius}°C`;

    weatherDataEl.querySelector('.humidity').innerHTML = `<span>Humidity:</span>${weatherData.main.humidity}%`;

    weatherDataEl.querySelector('.wind-speed').innerHTML = `<span>Wind-speed:</span>${weatherData.wind.speed}m/s`;



};




submitBtnEl.addEventListener('click', (ev) => {
    ev.preventDefault();
    const city = document.querySelector('#city').value;
    getWeatherData(city).catch((error) => {
        console.log("Error")
    });
});