let paragraphElementText = document.querySelector("p");

function paragraphChanged(event) {
  paragraphElementText.textContent = "Clicked";
  console.log("Paragraph Changed");
  console.log(event);
}

paragraphElementText.addEventListener("click", paragraphChanged);

let inputElement = document.querySelector("input");

function retrieveInput(event) {
  //   let enterText = inputElement.value;
  let enterText = event.target.value;
  //   let enterText = event.data;
  console.log(enterText);
  console.log(event);
}

inputElement.addEventListener("input", retrieveInput);
