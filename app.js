let apikey = "5d76b2b984e4990ff42b39104aa26d0a";

let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let  searchBox = document.querySelector(".search input");
let  searchBtn = document.querySelector(".search button");

let weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){

    let response  = await fetch(apiurl + city + `&appid=${apikey}`);

let data = await response.json();

console.log(data);

document.querySelector(".city").innerHTML =data.name;
document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
document.querySelector(".wind").innerHTML =data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds"){

    weatherIcon.src ="/weather/clouds.png";

}
else if(data.weather[0].main == "Clear"){
weatherIcon.src ="/weather/clear.png";
}
else if(data.weather[0].main == "Rain"){
weatherIcon.src ="/weather/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
weatherIcon.src ="/weather/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
weatherIcon.src ="/weather/mist.png";
};


}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
});




