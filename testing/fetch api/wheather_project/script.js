// https://openweathermap.org/
var temp = document.getElementById('temp');
var cityName = document.getElementById('city')
var humidity = document.getElementById('humidity')
var windspeed = document.getElementById('windspeed')
var searchinput = document.getElementById('searchinput');
var serchbox = document.getElementById('serchbox')
var body_img = document.getElementById('body_img');

var body_data = document.getElementById('body_data')
var deatil = document.getElementById('deatil')
var error = document.getElementById('error')

// https://openweathermap.org/
async function checkWeather(city) {
    let Upi_key = 'enter your api key';
    let repsponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Upi_key}&units=metric`);
    let data = await repsponse.json();
    console.log(data);


    temp.innerHTML = Math.floor(data.main.temp) + '°C';
    cityName.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    windspeed.innerHTML = data.wind.speed + 'km/h';
    console.log(data)


    if (data.weather[0].main == "Clouds") {
        body_img.src = 'image/cloud.png'
    }
    else if (data.weather[0].main == 'Clear') {
        body_img.src = 'image/clear.png'
    }
    else if (data.weather[0].main == 'Rain') {
        body_img.src = 'image/rain.png'
    }
    else if (data.weather[0].main == 'Drizzle') {
        body_img.src = 'image/darzizzl.png'
    }
    else if (data.weather[0].main == 'Mist') {
        body_img.src = 'image/mist.png'
    }
    else if (data.weather[0].main == 'Haze') {
        body_img.src = 'image/haze.png'
    }
    body_data.style.display = 'flex';
    deatil.style.display = 'flex';
}

serchbox.addEventListener('click', () => {
    let cityIn = searchinput.value;
    checkWeather(cityIn);

})