let Weither = document.querySelector("#input_town");
let msg = "veuillez entrez un nom de ville valide";
Weither.addEventListener("submit", function (e) {
  e.preventDefault();
  let ville = document.querySelector("#input_city").value;
  call(ville);
});
call("Annaba");
/*******************************fonction d'appel de ville *************************** */
function call(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},213&appid=26233b36d7d74bd03cffcf70e1d6186a&units=metric&lang=fr`;
  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        document.querySelector(
          "#show_town"
        ).innerHTML = `<i class="fa-solid fa-building"></i> ${data.name}`;
        document.querySelector(
          "#show_temp"
        ).innerHTML = `<i class="fa-solid fa-temperature-half"></i> ${data.main.temp}`;
        document.querySelector(
          "#show_hum"
        ).innerHTML = `<i class="fa-solid fa-droplet"></i> ${data.main.humidity} %`;
        document.querySelector(
          "#show_wind"
        ).innerHTML = `<i class="fa-solid fa-wind"></i> ${data.wind.speed} Km/h`;
        document.querySelector("#adv").innerHTML = "";
      })
    )
    .catch((err) => {
      document.querySelector("#adv").innerHTML = msg;
      call("annaba");
    });
}
