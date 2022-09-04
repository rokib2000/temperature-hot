const loadData = (city) => {
  const tempAPI = "a9c7845ea89c6f6637addbaa87ca623d";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${tempAPI}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

loadData("Dhaka");
