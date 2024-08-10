// document.body.children[1].children[0].href = "https://google.com";

let a = document.getElementById("highlight");

a.href = "https://youtube.com";

a = document.querySelector("p a");

a.href = "https://yahoo.com";

// create an Element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This link leads to Google";

// Get access to the parent element that should hold the new element

let firstElement = document.querySelector("p");

//Insert the new element into the parent element content

firstElement.append(newAnchorElement);
