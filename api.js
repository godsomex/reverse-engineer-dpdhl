function myFunction() {
  const dropdown = document.getElementById("locality-dropdown");
  dropdown.length = 0;

  const postcode = document.getElementById("plz").value;

  const stadt = document.getElementById("stadt");

  const defaultOption = document.createElement("option");
  defaultOption.text = "Choose State/Province";

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  const url =
    "https://cors-anywhere.herokuapp.com/https://www.postdirekt.de/plzserver/PlzAjaxServlet";
  const params = "finda=city&city=" + postcode + "&lang=de_DE";

  function getCity(a, b) {
    return fetch(`${a}?${b}`);
  }

  if (postcode.length == 5) {
    getCity(url, params)
      .then(res => res.json())
      .then(result => {
        let option;
        option = document.createElement("option");
        option.text = result.rows[0].city;
        option.value = result.rows[0].city;
        dropdown.add(option);
        stadt.value = result.rows[0].city;
      })
      .catch(err => console.log(err));
  } else {
    stadt.value = "please enter 5 digits";
  }

  const formToJSON = elements =>
    elements.reduce((data, element) => {
      data[element.name] = element.value;
      return data;
    }, {});

  const handleFormSubmit = event => {
    event.preventDefault();
    const data = formToJSON(Array.from(form.elements));
    const dataContainer = document.getElementsByTagName("section")[0];
    dataContainer.textContent = JSON.stringify(data, null, "  ");
  };

  const form = document.getElementsByTagName("form")[0];

  form.addEventListener("submit", handleFormSubmit);
}
