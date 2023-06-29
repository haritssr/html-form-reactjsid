export default function App() {
  function saveNewContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // using e.currentTarget as native getting html form element instead using useRef
    const HTMLFormData = new FormData(e?.currentTarget);
    const data = Object.fromEntries(HTMLFormData);
    console.log(data);
  }

  return (
    <>
      <h1>Basic HTML + JS Form</h1>
      <form
        action=""
        method=""
        id="formNewContact"
        style={{ userSelect: "none" }}
        onSubmit={saveNewContact}
      >
        <fieldset>
          <legend>Contact Name</legend>
          <label htmlFor="firstName" style={{ display: "block" }}>
            First Name
            <input
              name="firstName"
              type="text"
              id="first-name"
              autoComplete="on"
              placeholder="First Name"
            />
          </label>
          <label htmlFor="lastName">
            Last Name
            <input
              name="lastName"
              type="text"
              id="last-name"
              placeholder="Last Name"
              required
            />
          </label>
          <div>
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
          </div>
        </fieldset>

        <button type="submit">Submit</button>

        {/* <input type="submit" value="Submit" /> */}
        <button type="reset">Reset</button>
      </form>
    </>
  );
}
