const tools = [
  {
    name: "QR Code Generator",
    description: "Generate and download QR codes from text or URLs.",
    image: "./assets/qr.png",
    live: "./tools/qr-generator/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/qr-generator"
  },
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
  },
  {
    name: "Color Picker",
    description: "Pick colors and copy HEX or RGB values.",
    image: "./assets/color.png",
    live: "./tools/color-picker/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/color-picker"
  },
  {
    name: "Text Case Converter",
    description: "Convert text to uppercase, lowercase, sentence case, and more.",
    image: "./assets/text.png",
    live: "./tools/text-case-converter/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/text-case-converter"
  },
  {
    name: "Stopwatch",
    description: "Digital stopwatch with start, pause, and reset functionality.",
    image: "./assets/stopwatch.png",
    live: "./tools/stopwatch/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/stopwatch"
  },
  {
    name: "Random Number Generator",
    description: "Generate a random number within a custom range.",
    image: "./assets/random.png",
    live: "./tools/random-number-generator/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/random-number-generator"
  },
  {
    name: "Markdown Previewer",
    description: "Live Markdown editor with real-time HTML preview.",
    image: "./assets/markdown.png",
    live: "./tools/markdown-previewer/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/markdown-previewer"
  },
  {
    name: "JSON Formatter & Validator",
    description: "Validate and pretty-format JSON with error messages.",
    image: "./assets/json.png",
    live: "./tools/json-formatter/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/json-formatter"
  },
  {
    name: "Base64 Encoder / Decoder",
    description: "Encode text to Base64 and decode Base64 back to readable text.",
    image: "./assets/base64.png",
    live: "./tools/base64-encoder-decoder/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/base64-encoder-decoder"
  },
  {
    name: "Text Statistics Tool",
    description: "Live character, word, sentence, and paragraph counter.",
    image: "./assets/text-stats.png",
    live: "./tools/text-statistics/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/text-statistics"
  },
  {
    name: "Text Diff Checker",
    description: "Compare two texts and highlight line-by-line differences.",
    image: "./assets/diff.png",
    live: "./tools/text-diff-checker/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/text-diff-checker"
  },
  {
    name: "Regex Tester",
    description: "Test regular expressions with live match highlighting.",
    image: "./assets/regex.png",
    live: "./tools/regex-tester/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/regex-tester"
  },
  {
    name: "CSS Gradient Generator",
    description: "Create linear CSS gradients with live preview and copyable code.",
    image: "./assets/gradient.png",
    live: "./tools/css-gradient-generator/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/css-gradient-generator"
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