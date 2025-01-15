import axios from "axios" // Libreria para consultar apis externas
import { SearchType } from "../types"

export default function useWeather() {

    const fetchWeather = async (search : SearchType) => {
        try {

            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},{state 
            code},{country code}&limit={limit}&appid={API key}`
        } catch (error) {
            console.log(error)
        }
    }
  return {
        fetchWeather
  }
}
