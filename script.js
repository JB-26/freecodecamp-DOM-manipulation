// returns a single element or null
const playground = document.getElementById("playground");
// can also use query selector by providing CSS, like div
// but it will return the first element that matches the CSS selector
const playground2 = document.querySelector("#playground");
// or use all - returns a list of elements
const playground3 = document.querySelectorAll("div");

// create a new element
const magicalOrb = document.createElement("div");
magicalOrb.textContent = "🔮";

// don't use appendChild
// create new content on the fly
playground.append(`🧙‍♂️ Wizard`);
playground.append(magicalOrb);

const scrollOfWisdom = document.createElement("p");
playground.append(scrollOfWisdom);

// could also use textContent
// key difference is that textContent returns the text content of ALL elements including script and style elements (i.e. will display a hidden paragraph if it has a style display of none)
scrollOfWisdom.innerText = "Ancient wisdom lies within";
console.log(scrollOfWisdom.innerText);

// inner text is to get and set text - visibily rendered
// text content - when you need all text content, regardless of styling
