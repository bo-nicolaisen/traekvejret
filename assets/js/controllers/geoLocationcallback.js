import { getPosition } from "../model/geolocation.js"
import { getWeatherData } from "../model/openMeteo.js"

export async function initWeather() {
  try {
    const pos = await getPosition()
    const data = await getWeatherData(pos.lat, pos.long)
    console.log(data)
    // send data videre til views her, fx daycard.js
  } catch (error) {
    console.error("No data today:", error)
    // kald en view-funktion der viser "Could not fetch"
  }
}
