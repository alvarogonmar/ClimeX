import axios from "axios" // Libreria para consultar apis externas

export default function useWeather() {

    const fetchWeather = async () => {
        try {

            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state 
            code},{country code}&limit={limit}&appid={API key}`
        } catch (error) {
            console.log(error)
        }
    }
  return {
        fetchWeather
  }
}
