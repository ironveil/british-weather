// API key
const apiKey = "b9f3b63d8730a51c49be3f9aaac19f8e";
const xhr = new XMLHttpRequest;

// Grab search query
function findCity() {
    var search = document.getElementById("search").value;

    // Checks if it exists
    xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${search},GB&appid=${apiKey}&units=metric`)
    xhr.send()
    xhr.onload = () => {
        if (xhr.status === 404) {
            alert("Wrong city");
        } else if (xhr.status === 401) {
            alert("API Key incorrect");
        } else {
            var data = JSON.parse(xhr.response);
            console.log("Success");
            console.log(data);

            // Exports it to correct elements
            var cityName = document.getElementById("city").innerHTML = data.name;
            var temperature = document.getElementById("temp").innerHTML = `${Math.round(data.main.temp)}°C`;
            var feelsLike = document.getElementById("feelsLike").innerHTML = `${Math.round(data.main.feels_like)}°C`;
            var humidity = document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        }
    }
}