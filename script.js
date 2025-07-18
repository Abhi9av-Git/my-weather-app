    const apiKey="e019761b1144dfd6159aee33e7b9f40a";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox=document.querySelector(".container input");
    const searchBtn=document.querySelector(".container button");

    async function checkWeather(cityName){

      const response=await fetch(apiUrl + cityName + `&appid=${apiKey}`);

      if (response.status==404) {

        document.querySelector('.error').style.display="block";
        document.querySelector('.weather').style.display="none";
      }
      else {

        var data=await response.json();

        const temp=document.querySelector('.temp');

        temp.innerHTML=Math.round(data.main.temp)+ "°C";

        const city=document.querySelector('.city');

        city.innerHTML=data.name;

        const humidity=document.querySelector('.humidity');

        humidity.innerHTML=data.main.humidity + "%";

        const wind=document.querySelector('.wind');

        wind.innerHTML=data.wind.speed+" Km/h";

        const weatherIcon=document.querySelector('.weather-icon');

        if (data.weather[0].main=="Clouds") {

          weatherIcon.src="images/clouds.png";
          
        }
        else if (data.weather[0].main()=="Clear") {

          weatherIcon.src="images/clear.png";
        }
        else if (data.weather[0].main()=="Rain") {

          weatherIcon.src="images/rain.png";
        }
        else if (data.weather[0].main()=="Drizzle") {

          weatherIcon.src="images/drizzle.png";
        }
        else if (data.weather[0].main()=="Mist") {

          weatherIcon.src="images/mist.png";
        }

        document.querySelector('.weather').style.display="block";
        document.querySelector('.error').style.display="none";

      }

    }

    searchBtn.addEventListener("click", function() {

      checkWeather(searchBox.value);
    });