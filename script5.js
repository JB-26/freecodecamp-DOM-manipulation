const playground = document.getElementById("playground");

const shapeshifter = document.createElement("div");
shapeshifter.textContent = "🦎 Shapeshifter";
playground.append(shapeshifter);

shapeshifter.classList.add("magical", "creature");
console.log(`Initial classes: ${shapeshifter.className}`);

shapeshifter.classList.remove("creature");
shapeshifter.classList.add("humanoid");
console.log(`Initial classes: ${shapeshifter.className}`);
console.log(shapeshifter.classList.contains("humanoid"));

shapeshifter.classList.add("invisible");
shapeshifter.classList.toggle("invisible", Math.random() > 0.5);
shapeshifter.classList.replace("humanoid", "beast");
console.log(`Third class: ${shapeshifter.classList.item(2)}`);
