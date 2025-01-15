import styles from "./App.module.css";
import Form from "./components/Form/Form";
import useWeather from "./hooks/useWeather";

function App() {
  const { weather, fetchWeather } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Weather Forecast</h1>

      <div className={styles.container}>
        <p>
          <Form fetchWeather={fetchWeather} />
        </p>
        <p>2</p>
      </div>
    </>
  );
}

export default App;
