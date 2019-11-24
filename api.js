let dropdown = document.getElementById("locality-dropdown");
dropdown.length = 0;

let defaultOption = document.createElement("option");
defaultOption.text = "Choose State/Province";

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

let url =
  "https://cors-anywhere.herokuapp.com/https://www.postdirekt.de/plzserver/PlzAjaxServlet";

let postcode = "81241";
let params = "finda=city&city=" + postcode + "&lang=de_DE";

try {
  fetch(`${url}?${params}`)
    .then(res => res.json())
    .then(result => {
      console.log(result);
      let option;
      option = document.createElement("option");
      option.text = result.rows[0].city;
      option.value = result.rows[0].city;
      dropdown.add(option);
    });
} catch (error) {
  console(error);
}
