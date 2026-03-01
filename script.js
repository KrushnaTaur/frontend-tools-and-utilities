const tools = [
  {
    name: "BMI Calculator",
    description: "Calculate Body Mass Index based on height and weight.",
    image: "./assets/bmi.png",
    live: "./tools/bmi-calculator/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/bmi-calculator"
  },
  {
    name: "Age Calculator",
    description: "Compute exact age from birth date.",
    image: "./assets/age.png",
    live: "./tools/age-calculator/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/age-calculator"
  },
  {
    name: "Password Generator",
    description: "Generate secure customizable passwords.",
    image: "./assets/password.png",
    live: "./tools/password-generator/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/password-generator"
  },
  {
    name: "Unit Converter",
    description: "Convert between length, weight, and temperature units.",
    image: "./assets/unit.png",
    live: "./tools/unit-converter/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/unit-converter"
  },
    {
    name: "Tip Calculator",
    description: "Calculate tip, total bill, and split amount per person.",
    image: "./assets/tip.png",
    live: "./tools/tip-calculator/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/tip-calculator"
  },
  {
    name: "EMI Calculator",
    description: "Calculate monthly loan EMI, total interest, and total payment.",
    image: "./assets/emi.png",
    live: "./tools/emi-calculator/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/emi-calculator"
  }
];

const grid = document.getElementById("toolsGrid");
const count = document.getElementById("toolCount");

tools.forEach(tool => {
  const card = document.createElement("div");
  card.className = "tool-card";

  card.innerHTML = `
    <img src="${tool.image}" class="tool-image" alt="${tool.name}">
    <div class="tool-content">
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <div class="buttons">
        <a href="${tool.live}" class="btn primary">Open Tool</a>
        <a href="${tool.code}" target="_blank" class="btn secondary">Code</a>
      </div>
    </div>
  `;

  grid.appendChild(card);
});

count.textContent = tools.length;