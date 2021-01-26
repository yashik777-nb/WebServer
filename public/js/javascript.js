document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", submitForm);
});

function submitForm(e) {
  e.preventDefault();
  const searchValue = document.querySelector("input").value;
  const messageOne = document.getElementById("message-1");
  const messageTwo = document.getElementById("message-2");

  fetch(`http://localhost:3000/weather?address=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.error);
        messageTwo.innerText = data.error;
      } else {
        console.log(data.location, data.forecast);
        messageTwo.innerText = `Location: ${data.location}, Temperature: ${data.forecast.temperature}, Feels Like: ${data.forecast.feelslike}`;
      }
    });
}
