import axios from "axios" // Libreria para consultar apis externas

export default function useWeather() {

    const fetchWeather = () => {
        console.log("Fetching")
    }
  return {
        fetchWeather
  }
}
