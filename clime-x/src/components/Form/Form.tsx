export default function Form() {
  return (
    <form>
      <div>
        <label htmlFor="city">City:</label>
        <input id="city" type="text" name="city" placeholder="City" />
      </div>

      <div>
        <label htmlFor="country">Country:</label>
        <input id="country" type="text" name="country" placeholder="country" />
      </div>
    </form>
  );
}
