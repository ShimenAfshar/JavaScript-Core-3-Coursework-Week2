const liElement = document.querySelector("li");
const btnElement = document.getElementById("btn");

btnElement.addEventListener("click", getImage);

function getImage(){
  liElement.innerHTML = "";
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    })

}