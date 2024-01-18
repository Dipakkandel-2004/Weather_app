// let key = "999ce773f30135a09bcdc17f40e743af"
// let url = "https://api.openweathermap.org/data/2.5/weather&units=matric&q=banglore";
let url = "https://api.openweathermap.org/data/2.5/weather?&appid=999ce773f30135a09bcdc17f40e743af&units=metric&q="
let city = document.querySelector(".searchbar input")

let button = document.querySelector(".searchbar button")
let weather = document.querySelector(".weatherimg")


async function checkweather(city) {
    const response = await fetch(url + city);
    var data = await response.json();


    document.querySelector(".place").innerHTML = data.name;

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    let a = data.weather[0].main;
    console.log(a)
    if (a === "Clear") {
        weather.src = "clear.png"
    }
    else if (a === "Clouds") {
        weather.src = "clouds.png"
    }
    else if (a === "Rain") {
        weather.src = "rain.png"
    }
    else if (a === "Drizzle") {
        weather.src = "drizzle.png"
    }
    else if (a === "Mist") {
        weather.src = "mist.png"
    }



}
button.addEventListener("click", () => {

    checkweather(city.value);

})
