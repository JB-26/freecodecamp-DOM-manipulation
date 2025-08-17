// returns a single element or null
const playground = document.getElementById("playground");

const spellbook = document.createElement("div");
// adding HTML content directly to an element
// power, but use with caution due to security. Due to content that can come from users or sources, this can lead to cross site scripting attack
// sanitise the input before hand!
// safer alternatives, textContent for text only or create elements and append them individually
// be careful it can replace HTML!
spellbook.innerHTML =
  "<p>Spells include: <strong>Levitation</strong> and <em>Invisibility</em>!</p>";
playground.append(spellbook);

console.log(playground.textContent);
console.log(playground.innerHTML);

const temporaryElement = document.createElement("p");
temporaryElement.textContent = "🐰 Now you see me...";
playground.append(temporaryElement);

temporaryElement.remove();

// or playground.removeChild(temporaryElement);

const fruitBasket = document.createElement("div");
fruitBasket.innerHTML = "<p>Apple</p><p>Banana</p><p>Cherry</p>";
playground.append(fruitBasket);

// removes the first element under the div (which is the child of the div)
while (fruitBasket.firstChild) {
  fruitBasket.removeChild(fruitBasket.firstChild);
}
