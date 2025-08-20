const playground = document.getElementById("playground");

const secretScroll = document.createElement("div");

secretScroll.id = "secretScroll";
// a way to work with data attributes
// ignored by CSS, styling won't effect them
// a valid way to store data using the HTML5 specification
secretScroll.dataset.spell = "invsibility";
secretScroll.dataset.components = "moonlight,shadow essence";
secretScroll.textContent = "📜 Ancient Spell Scroll";

playground.append(secretScroll);

console.log(`Spell type: ${secretScroll.dataset.spell}`);
console.log(`Components: ${secretScroll.dataset.components.split(",")}`);
