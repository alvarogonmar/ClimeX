import { Weather } from "../../hooks/useWeather";

type WeatherDetailProps = {
  weather: Weather;
};

export default function WeatherDetail({ weather }: WeatherDetailProps) {
  return (
    <div>
      <h2>The Weather in: {weather.name}</h2>
      <p>{weather.main.temp}</p>
    </div>
  );
}
