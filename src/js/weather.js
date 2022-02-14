// API key
const apiKey = "cea15d259b519b0d92c399ada2fcc652";
const xhr = new XMLHttpRequest;

// Grab search query
function findCity() {
    var search = $("#search").val().toLowerCase();

    // Checks if it exists
    xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${search},uk&appid=${apiKey}&units=metric`)
    xhr.send()
    xhr.onload = () => {
        if (xhr.status === 404) {
            $("#error").removeClass("hidden");
        } else {
            $("#error").addClass("hidden");
            var data = JSON.parse(xhr.response);
            console.log("Success");
            console.log(data);

            // Exports it to correct elements
            $("#city").text(data.name);
            $("#weather").text(data.weather[0].description);
            $("#temp").text(`${Math.round(data.main.temp)}°C`);
            $("#tempLow").text(`${Math.round(data.main.temp_min)}°C`)
            $("#tempHigh").text(`${Math.round(data.main.temp_max)}°C`)
            $("#feelsLike").text(`${Math.round(data.main.feels_like)}°C`);
            $("#humidity").text(data.main.humidity + "%");
            $("#clouds").text(data.clouds.all + "%");
        }
    }
}