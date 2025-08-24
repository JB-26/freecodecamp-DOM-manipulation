// traversing the DOM
const playground = document.getElementById("playground");

const parentElement = document.createElement("div");
const childElement1 = document.createElement("p");
const childElement2 = document.createElement("span");
parentElement.append(childElement1, childElement2);
playground.append(parentElement);

console.log(parentElement.firstChild);
console.log(parentElement.lastChild);
console.log(childElement1.nextSibling);
console.log(childElement2.previousSibling);
console.log(childElement1.parentNode);
