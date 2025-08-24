const playground = document.getElementById("playground");

const magicButton = document.createElement("button");
magicButton.textContent = "Cast Spell";
playground.append(magicButton);

function spellCast() {
  alert("✨ Magic sparkles fill the air");
}

// second argument is the callback function
magicButton.addEventListener("click", spellCast);

// event is an object. Provides information about the event, including the element trigger
magicButton.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "purple";
});

magicButton.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "";
});

// can also remove event listeners
//magicButton.removeEventListener("click", spellCast);
