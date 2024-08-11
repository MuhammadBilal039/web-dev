let var1 = document.body.children[0];
var1 = document.body.firstElementChild;

console.dir(var1);

console.dir(var1.parentElement);

console.dir(var1.nextElementSibling);

var1 = document.getElementById("heading");

console.dir(var1);

var1 = document.querySelector(".highlighted-paragraph");

console.dir(var1);

var1.textContent = "This was changed by Bilal";