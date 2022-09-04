// load data form API
const loadData = (city) => {
  const tempAPI = "a9c7845ea89c6f6637addbaa87ca623d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${tempAPI}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

// Display All data
const displayData = (data) => {
  console.log(data);
  setInnerTextById("city", data.name);
  setInnerTextById("temperature", data.main.temp);
  setInnerTextById("condition", data.weather[0].main);
  //   console.log(data.name);
};

// set data by Id function
const setInnerTextById = (id, data) => {
  const temperature = document.getElementById(id);
  temperature.innerText = data;
};

// search data
document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  loadData(searchField.value);
  searchField.value = "";
});

loadData("Dhaka");
