import axios from "axios" // Libreria para consultar apis externas
import { SearchType } from "../types"

export default function useWeather() {

    const fetchWeather = async (search : SearchType) => {
        try {

            const appId = ""

            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},
            ${search.country}&appid=${appId}`

            const data = await axios(geoUrl) // peticion de datos tipo get (default)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
  return {
        fetchWeather
  }
}
