// API key
const apiKey = "cea15d259b519b0d92c399ada2fcc652";
const xhr = new XMLHttpRequest;

// Grab search query
function findCity() {
    var search = document.getElementById("search").value;

    // Checks if it exists
    xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${search},uk&appid=${apiKey}&units=metric`)
    xhr.send()
    xhr.onload = () => {
        if (xhr.status === 404) {
            document.getElementById("error").classList.remove("hidden");
        } else {
            document.getElementById("error").classList.add("hidden");
            var data = JSON.parse(xhr.response);
            console.log("Success");
            console.log(data);

            // Exports it to correct elements
            var cityName = document.getElementById("city").innerHTML = data.name;
            var weather = document.getElementById("weather").innerHTML = data.weather[0].description;
            var temperature = document.getElementById("temp").innerHTML = `${Math.round(data.main.temp)}°C`;
            var feelsLike = document.getElementById("feelsLike").innerHTML = `${Math.round(data.main.feels_like)}°C`;
            var humidity = document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        }
    }
}