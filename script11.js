// using templates
// define complex structures once, then reuse them
// performance - using a template can be faster than creating elements from scratch

const playground = document.getElementById("playground");

const template = document.getElementById("wizard-template");

function createWizard(name, specialty) {
  // clone the template
  const wizardElement = template.content.cloneNode(true);
  wizardElement.querySelector(".wizard-name").textContent = name;
  wizardElement.querySelector(".wizard-specialty").textContent = specialty;
  playground.append(wizardElement);
}

createWizard("Merlin", "Time Magic");
createWizard("Gandalf", "Fireworks");
