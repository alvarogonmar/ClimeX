import axios from "axios" // Libreria para consultar apis externas
import { z } from "zod"
import { SearchType } from "../types"


// TYPE GUARD O ASSERTION
// function isWeatherResult(weather: unknown) : weather is Weather { // Usar unknown para no tener any
//     return (
//         Boolean(weather) &&
//         typeof weather === "object" && 
//         typeof (weather as Weather).name === "string" &&
//         typeof (weather as Weather).main.temp === "number" &&
//         typeof (weather as Weather).main.temp_max === "number" &&
//         typeof (weather as Weather).main.temp_min === "number" 
//     )
// }

// Zod - Crear primero un esquima
const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number(),

    })
})

type Weather = z.infer<typeof Weather>

export default function useWeather() {

    const fetchWeather = async (search : SearchType) => {

        const appId = import.meta.env.VITE_API_KEY
        try {


            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},
            ${search.country}&appid=${appId}`

            const {data} = await axios(geoUrl) // peticion de datos tipo get (default)
            
            const lat = data[0].lat
            const lon = data[0].lon

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            
            // Type Guards
            // const {data: weatherResult} = await axios(weatherUrl)
            // const result = isWeatherResult(weatherResult)
            // if(result) {
            //     console.log(weatherResult.name)
            // } else{
            //     console.log("Error")
            // }


            // Zod
            const {data: weatherResult} = await axios(weatherUrl)
            const result = Weather.safeParse(weatherResult) // SafeParse retornara true o false si es que si esta bien hecho nuestra comprobacion
            if(result.success) {
                console.log(result.data.name)
                console.log(result.data.main.temp)
            }

        } catch (error) {
            console.log(error)
        }
    }
  return {
        fetchWeather
  }
}
