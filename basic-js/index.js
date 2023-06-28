const formNewContact = document.getElementById("formNewContact");

console.log(formNewContact);

formNewContact.addEventListener("submit", saveNewContact);

function saveNewContact(e) {
  e.preventDefault();

  // const formData = new FormData(formNewContact);

  // const firstName = formData.get("firstName");
  // const lastName = formData.get("lastName");

  // console.log({ firstName, lastName });

  new FormData(formNewContact);
}

formNewContact.addEventListener("formdata", saveNewContact2);

function saveNewContact2(e) {
  e.preventDefault();

  const data = e.formData;

  // for (let value of data.values()) {
  //   console.log(value);
  // }

  const newContactList = {};

  for (let [key, value] of data.entries()) {
    // [key, value] = [name, inputValue]
    // console.log(`${key}: ${value}`);
    Object.assign(newContactList, {
      ...newContactList,
      [key]: value,
    });
  }

  console.log(newContactList);
}
