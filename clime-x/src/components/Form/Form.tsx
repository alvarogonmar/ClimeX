import { useState } from "react";
import { countries } from "../../data/countries";
import styles from "./Form.module.css";

export default function Form() {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="city">City:</label>
        <input id="city" type="text" name="city" placeholder="City" />
      </div>

      <div className={styles.field}>
        <label htmlFor="country">Country:</label>
        <select>
          <option value="">-- Choose a Country --</option>
          {countries.map((country) => (
            <option key={country.name} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <input className={styles.submit} type="submit" value="Request Climate" />
    </form>
  );
}
