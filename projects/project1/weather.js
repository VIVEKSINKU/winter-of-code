const apikey = "";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".w_icon")
async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = data.main.temp +"°c";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "Km\h";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "winter-of-code\projects\project1\winter-of-code\cloudy-cloud-svgrepo-com.svg";
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "winter-of-code\projects\project1\winter-of-code\projects\project1\winter-of-code\sun-svgrepo-com.svg";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "winter-of-code/projects/project1/winter-of-code/projects/project1/rain.svg";
    }
    else if(data.weather[0].main =="Snow"){
        weatherIcon.src = "winter-of-code\projects\project1\winter-of-code\projects\project1\winter-of-code\snowing-forecast-svgrepo-com.svg";
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "winter-of-code/mist-svgrepo-com.svg";
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "winter-of-code/drizzle.svg";
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "winter-of-code/mist-svgrepo-com.svg";
    }
    else if(data.weather[0].main =="Haze"){
        weatherIcon.src = "winter-of-code/projects/project1/winter-of-code/windy-wind-svgrepo-com.svg";
    }
    document.querySelector(".weather").style.display ="block";

};

btn.addEventListener("click" ,()=>{
    checkWeather(search.value);
});

checkWeather();