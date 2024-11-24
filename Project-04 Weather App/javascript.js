const apikey = "8ab959a688b319e15c706ed04b2afb79";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "weather-app-img/images/clouds.png"
    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src = "weather-app-img/images/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "weather-app-img/images/drizzle.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "weather-app-img/images/rain.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "weather-app-img/images/mist.png"
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
