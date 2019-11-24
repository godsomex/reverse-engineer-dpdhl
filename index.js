let dropdown = document.getElementById("locality-dropdown");
dropdown.length = 0;

let defaultOption = document.createElement("option");
defaultOption.text = "Choose State/Province";

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

// const url = "https://api.myjson.com/bins/7xq2x";
// const url =
//   "https://cors-anywhere.herokuapp.com/https://www.postdirekt.de/plzserver/PlzAjaxServlet?autocomplete=plz&plz_city=berlin";

// fetch(url)
//   .then(function(response) {
//     console.log(response);
//     if (response.status !== 200) {
//       console.warn(
//         "Looks like there was a problem. Status Code: " + response.status
//       );
//       return;
//     }

//     // Examine the text in the response
//     response.json().then(function(data) {
//       let option;

//       for (let i = 0; i < data.length; i++) {
//         option = document.createElement("option");
//         option.text = data[i].name;
//         option.value = data[i].abbreviation;
//         dropdown.add(option);
//       }
//     });
//   })
//   .catch(function(err) {
//     console.error("Fetch Error -", err);
//   });

try {
  fetch(
    "https://cors-anywhere.herokuapp.com/https://www.postdirekt.de/plzserver/PlzAjaxServlet?autocomplete=plz&plz_city=paderborn"
  )
    .then(res => res.json())
    .then(result => {
      console.log(result);
      let option;

      //   for (let i = 0; i < result.length; i++) {
      option = document.createElement("option");
      option.text = result.rows[0].plz;
      option.value = result.rows[0].plz;
      dropdown.add(option);
      //   }
    });
} catch (error) {
  console(error);
}

// const URL =
//   "https://cors-anywhere.herokuapp.com/https://www.postdirekt.de/plzserver/PlzAjaxServlet?autocomplete=plz&plz_city=berlin";
// try {
//   fetch(URL, {
//     mode: "cors",
//     headers: {
//       "Access-Control-Allow-Origin": "*"
//     }
//   })
//     .then(res => res.json())
//     .then(result => console.log(result));
// } catch (error) {
//   console(error);
// }
