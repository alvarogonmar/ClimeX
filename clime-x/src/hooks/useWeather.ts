import axios from "axios" // Libreria para consultar apis externas
import { z } from "zod"
// import { object, string, number, Output, parse } from "valibot"
import { SearchType } from "../types"
import { useMemo, useState } from "react"


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

// Zod - Crear primero un schema
const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number(),

    })
})

export type Weather = z.infer<typeof Weather>

// Valibot - Crear el Schema
//  const WeatherSchema = object({
//      name: string(),
//      main: object({
//          temp: number(),
//          temp_max: number(),
//          temp_min: number()
//      })
//  })
//  type Weather = Output<typeof WeatherSchema>

export default function useWeather() {

    const[weather, setWeather] = useState<Weather>({
        name: "",
        main: {
            temp: 0,
            temp_max: 0,
            temp_min: 0
        }
    })

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
                setWeather(result.data)
            }

            // Valibot
            // const {data: weatherResult} = await axios(weatherUrl)
            // const result = parse(WeatherSchema, weatherResult)
            // if(result) {
            //     console.log(result.name)
            // }
            


        } catch (error) {
            console.log(error)
        }
    }

    const hasWeatherData = useMemo(() => weather.name , [weather])
  return {
        weather,
        fetchWeather,
        hasWeatherData
  }
}
