export default function App() {
  function saveNewContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // using e.currentTarget as native getting html form element instead using useRef
    const HTMLFormData = new FormData(e?.currentTarget);
    const data = Object.fromEntries(
      [...HTMLFormData].map(([key, value]) => [
        // still can input number in firstName input
        key,
        // +value or Number(value)
        // key === "age" -> !isNaN(Number(value))
        !isNaN(Number(value)) ? Number(value) : value,
      ])
    );

    console.log(data);
  }

  return (
    <>
      <h1>Basic HTML + JS Form</h1>
      <form action="" method="" id="formNewContact" onSubmit={saveNewContact}>
        <fieldset>
          <legend>Contact Name</legend>
          {/* first name */}
          <label>
            First Name
            <input
              name="firstName"
              type="text"
              id="first-name"
              autoComplete="on"
              placeholder="First Name"
              minLength={1}
              maxLength={30}
              size={30}
            />
          </label>
          {/* last name */}
          <label>
            Last Name
            <input
              name="lastName"
              type="text"
              id="last-name"
              minLength={1}
              maxLength={30}
              size={30}
              placeholder="Last Name"
            />
          </label>
          {/* email */}
          <label>
            Email
            <input type="email" name="email" placeholder="email@email.com" />
          </label>
          {/* password */}
          <label>
            Password
            <input
              type="text"
              name="password"
              id="password"
              minLength={4}
              placeholder="***"
            />
          </label>
          {/* age */}
          <label>
            age
            <input
              type="number"
              name="age"
              id="age"
              minLength={10}
              placeholder="***"
            />
          </label>
          {/* health point */}
          <label>
            Health Point
            <input type="range" list="hp" step={10} name="healtPoint" />
            <datalist id="hp">
              <option value="0" />
              <option value="10" />
              <option value="20" />
              <option value="30" />
              <option value="40" />
              <option value="50" label="50%" />
              <option value="60" />
              <option value="70" />
              <option value="80" />
              <option value="90" />
              <option value="100" />
            </datalist>
          </label>
          {/* text area */}
          <label>
            text area
            <textarea
              name="something"
              id=""
              cols={30}
              rows={5}
              placeholder="Tuliskan kesimpulan hasil analisismu di sini..."
            ></textarea>
          </label>
          {/* select */}
          <label>
            Choose a pet:
            <select name="pet">
              <option value="">--Please choose an option--</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </select>
          </label>

          {/* <div>
            <label>
              Test A
              <input name="testA" type="text" defaultValue="Test A" />
            </label>
            <label>
              Test B
              <input name="testB" type="text" defaultValue="Test B" />
            </label>
            <label>
              Test C
              <input name="testC" type="text" defaultValue="Test C" />
            </label>
          </div> */}
        </fieldset>

        <button type="submit">Submit</button>

        {/* <input type="submit" value="Submit" /> */}
        <button type="reset">Reset</button>
      </form>
    </>
  );
}
