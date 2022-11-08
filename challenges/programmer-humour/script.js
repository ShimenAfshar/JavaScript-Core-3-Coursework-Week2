const buttonElement = document.querySelector(".button");
const ulElement = document.querySelector(".ul");

const getImage = () => {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    })