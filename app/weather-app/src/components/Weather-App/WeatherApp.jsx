import React, { useState } from "react";
import './WeatherApp.css';
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";
// import API_SECRET_OPEN_WEATHER from './config';



const WeatherApp = () => {
    //ADDING API KEY
    let api_key = "API_SECRET_OPEN_WEATHER"; //
    const [ wicon, setWicon] = useState(cloud_icon);

    const search = async () =>{
       const element = document.getElementsByClassName("cityInput");
       if(element[0].value==="")
       {
        return 0;
       }

       //ADDING API KEY, AND ${element[0].value} THIS VALUE WILL DEPEND UPON THE INPUT GIVEN BY THE USER, AND THE API WILL SHOW THE WEATHER CONDITION OF THAT
       //CITY AND ${api_key} IS WRITTERN TO HIDE THE API KEY
       let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

       let response = await fetch(url);
       let data = await response.json();

      //CRAETING VARIABLE AND CONNECTING WITH ELEMENT CLASS NAME
       const humidity = document.getElementsByClassName("humidity-percent");
       const wind = document.getElementsByClassName("wind-rate");
       const tempreture = document.getElementsByClassName("weather-temp");
       const location = document.getElementsByClassName("weather-location");

      //FETCHING DATA FROM API DATASET

      humidity[0].innerHTML = data.main.humidity + " %";
      wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
      tempreture[0].innerHTML = Math.floor(data.main.temp) + " °C";
      location[0].innerHTML = data.name;

      //IF-ELSE CONDITION FOR WEATHER IMAGE CHANGE ACCORIND TO ACUTAL WEATHER

      if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n" ){
        setWicon(clear_icon);
      }else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n" ) {
        setWicon(cloud_icon);
      }else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n" ) {
        setWicon(drizzle_icon);
      }else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n" ) {
        setWicon(drizzle_icon);
      }else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n" ) {
        setWicon(rain_icon);
      }else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n" ) {
        setWicon(rain_icon);
      }else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n" ) {
        setWicon(snow_icon);
      }else{
        setWicon(clear_icon);
      }

    }
    return (
      //CRAETING STRUCTURE 
        <div className="container">
            <div className="top-bar">
               {/*Adding Search Bar and Search Icon*/}
                <input type="text" className="cityInput" placeholder="Search..." />
                <div className="search-icon" onClick={() => {search()}}>
                    <img src={search_icon} alt="search_icon" />
                </div>
            </div>
            <div className="weather-image">
               {/*Adding Tempreture and Location*/}
            <img src={wicon} alt="weather_icon" height="180px" />
            </div>
            <div className="weather-temp">00°C</div>
            <div className="weather-location">Enter City Name</div>
            <div className="data-container">
                <div className="element">
                     {/*Adding Humidity Icon and Humidity-Percent*/}
                    <img src={humidity_icon} alt="humidity_icon" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">0%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                   {/*Adding Wind Icon and Wind Speed*/}
                    <img src={wind_icon} alt="wind_icon" className="icon" />
                    <div className="data">
                        <div className="wind-rate">0km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default WeatherApp;
