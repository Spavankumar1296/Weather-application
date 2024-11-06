const apikey="66ffb142f75d15bec3577e83616a6580";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiurl+city+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);

    if(data.name == undefined){
        document.querySelector(".error").innerHTML="Invalid city name";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".error").innerHTML="";
    }

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ " ℃";
    document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
    document.querySelector(".wind").innerHTML=data.wind.speed+" Km/hr";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="drizzle.png";
    }
    document.querySelector(".weather").style.display="block";

}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
    document.querySelector(".search input").innerHTML="";
})