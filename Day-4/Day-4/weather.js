const apikey = "0748a530967484f5423f9bae265afe00";
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
        weatherIcon.src = "https://static-00.iconduck.com/assets.00/white-sun-with-small-cloud-emoji-2048x2048-df62n3eb.png";
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-2048x2048-v4afvu7m.png";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "https://encycolorpedia.com/emojis/sun-behind-rain-cloud.png";
    }
    else if(data.weather[0].main =="Snow"){
        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3pf93_Nbi1Vn1g9MtNf7YsVviqUs4_uIRw&s";
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-daytime-foggy-weather-clouds-illustration-png-image_5246770.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "https://www.shutterstock.com/image-vector/weather-cloud-rain-emoji-symbol-260nw-1899182191.jpg";
    }
    else if(data.weather[0].main =="Haze"){
        weatherIcon.src = "https://static-00.iconduck.com/assets.00/overcast-day-haze-icon-2048x1820-g7qxm5cr.png";
    }
    document.querySelector(".weather").style.display ="block";

};

btn.addEventListener("click" ,()=>{
    checkWeather(search.value);
});

checkWeather();