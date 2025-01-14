import { countries } from "../../data/countries";

export default function Form() {
  return (
    <form>
      <div>
        <label htmlFor="city">City:</label>
        <input id="city" type="text" name="city" placeholder="City" />
      </div>

      <div>
        <label htmlFor="country">Country:</label>
        <option value="">-- Choose a Country --</option>
        {countries.map((country) => (
          <option key={country.name} value={country.code}>
            {country.name}
          </option>
        ))}
      </div>
    </form>
  );
}
