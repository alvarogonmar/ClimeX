import { useState } from "react";
import { SearchType } from "../../types";
import { countries } from "../../data/countries";
import styles from "./Form.module.css";
import { ChangeEvent, FormEvent } from "react";

export default function Form() {
  const [search, setSearch] = useState<SearchType>({
    city: "",
    country: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      console.log("ERROR");
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="city">City:</label>
        <input
          id="city"
          type="text"
          name="city"
          placeholder="City"
          value={search.city}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          value={search.country}
          name="country"
          onChange={handleChange}
        >
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
