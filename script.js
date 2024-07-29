const apiKey = "4377cbf3d62b102ffc91e9c7c6bbf4e9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector("#city-search");
const searchBtn = document.querySelector(".search-bar button")



async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".degree").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity-data").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-data").innerHTML = data.wind.speed + "km/h";

    const weather = data.weather[0].main;
    const image = document.querySelector(".weather-img");
    
    switch(weather){
        
        case "Clouds":
            image.src = "img/clouds.png";
            break
        case "Rain":
            image.src = "img/rain.png";
            break
        default:
            image.src = "img/sun.png"
    };
    
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchInput.value);
})

