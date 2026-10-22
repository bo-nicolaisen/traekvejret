import {getPosition} from "../model/geolocation.js"


async function geoDataCallback(myPos){
    console.log(myPos);
    const myURL=`https://api.open-meteo.com/v1/forecast?latitude=${myPos.lat}&longitude=${myPos.long}&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_probability_max,precipitation_sum,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant&hourly=temperature_2m,precipitation,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,temperature_80m&timezone=Europe%2FBerlin&wind_speed_unit=ms`
    let myData=await GetWeatherData(myURL)
    console.log(myData);
    
}


export function getData(){
getPosition(geoDataCallback)
}

async function GetWeatherData(URL) {
  return fetch(URL)
    .then(response => response.json())
    .then(data => {
      // data.message is the image url
     return data
    })
    .catch(error => {
      console.error("No data today:", error)
      myDogElement.textContent = "Could not fetch"
    })

}