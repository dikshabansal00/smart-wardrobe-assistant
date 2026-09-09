async function getWeather() {

    let city = document.getElementById("city").value;

    if(city === ""){
        alert("Please enter a city.");
        return;
    }

    const apiKey = "3d22e1c4503cc4bc18f6efda44b3438a";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if(data.cod != 200){
            document.getElementById("result").innerHTML =
            "<h3>City not found.</h3>";
            return;
        }

        let recommendation = "";

        if(data.main.temp >= 30){
            recommendation =
            "Wear cotton clothes, T-shirt and light colors.";
        }
        else if(data.main.temp >= 20){
            recommendation =
            "Jeans and a casual shirt would be perfect.";
        }
        else{
            recommendation =
            "Wear a jacket or warm clothes.";
        }

        if(data.weather[0].main === "Rain"){
            recommendation =
            "Carry an umbrella and wear waterproof footwear.";
        }

        document.getElementById("result").innerHTML = `

        <div class="weather-card">

            <h2>${data.name}</h2>

            <h3>${data.main.temp} °C</h3>

            <p>${data.weather[0].description}</p>

            <h4>Outfit Recommendation:</h4>

            <p>${recommendation}</p>

        </div>

        `;

    }
    catch(error){

        document.getElementById("result").innerHTML =
        "<h3>Something went wrong.</h3>";
    }
}