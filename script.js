const tools = [
  // --- ORIGINAL 20 ---
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
  },
  {
    name: "Time Zone Converter",
    description: "Convert date and time between global time zones instantly.",
    image: "./assets/timezone.png",
    live: "./tools/time-zone-converter/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/time-zone-converter"
  },
  {
    name: "Loan Eligibility Calculator",
    description: "Check loan eligibility based on income, EMIs, and age.",
    image: "./assets/loan.png",
    live: "./tools/loan-eligibility-calculator/index.html",
    code: "https://github.com/KrushnaTaur/frontend-tools-and-utilities/tree/main/tools/loan-eligibility-calculator"
  },

  // --- NEW 30 ---
  {
    name: "Word Counter",
    description: "Count words, characters, sentences, paragraphs, and estimated read time.",
    image: "./assets/text-stats.png",
    live: "./tools/word-counter/index.html",
    code: "#"
  },
  {
    name: "Character Counter",
    description: "Count characters with a configurable limit and visual progress bar.",
    image: "./assets/text.png",
    live: "./tools/character-counter/index.html",
    code: "#"
  },
  {
    name: "Currency Converter",
    description: "Convert between 20+ world currencies with approximate rates.",
    image: "./assets/unit.png",
    live: "./tools/currency-converter/index.html",
    code: "#"
  },
  {
    name: "Percentage Calculator",
    description: "Calculate percentage of, what percent, and percentage change.",
    image: "./assets/bmi.png",
    live: "./tools/percentage-calculator/index.html",
    code: "#"
  },
  {
    name: "HEX ↔ RGB Converter",
    description: "Convert colors between HEX and RGB formats with live preview.",
    image: "./assets/color.png",
    live: "./tools/hex-to-rgb/index.html",
    code: "#"
  },
  {
    name: "UUID Generator",
    description: "Generate cryptographically secure UUID v4 values in bulk.",
    image: "./assets/random.png",
    live: "./tools/uuid-generator/index.html",
    code: "#"
  },
  {
    name: "Hash Generator",
    description: "Generate SHA-1, SHA-256, and SHA-512 hashes from any text.",
    image: "./assets/password.png",
    live: "./tools/hash-generator/index.html",
    code: "#"
  },
  {
    name: "Pomodoro Timer",
    description: "Focus timer with 25-min work sessions and short/long breaks.",
    image: "./assets/stopwatch.png",
    live: "./tools/pomodoro-timer/index.html",
    code: "#"
  },
  {
    name: "Countdown Timer",
    description: "Set a custom countdown with hours, minutes, and seconds.",
    image: "./assets/stopwatch.png",
    live: "./tools/countdown-timer/index.html",
    code: "#"
  },
  {
    name: "Number to Words",
    description: "Convert any number into its English word representation.",
    image: "./assets/text.png",
    live: "./tools/number-to-words/index.html",
    code: "#"
  },
  {
    name: "Roman Numeral Converter",
    description: "Convert between integers and Roman numerals bidirectionally.",
    image: "./assets/unit.png",
    live: "./tools/roman-numeral-converter/index.html",
    code: "#"
  },
  {
    name: "Binary Converter",
    description: "Convert numbers between binary, decimal, octal, and hexadecimal.",
    image: "./assets/json.png",
    live: "./tools/binary-converter/index.html",
    code: "#"
  },
  {
    name: "IP Address Lookup",
    description: "Look up geolocation, ISP, and timezone info for any IP address.",
    image: "./assets/timezone.png",
    live: "./tools/ip-address-lookup/index.html",
    code: "#"
  },
  {
    name: "Color Palette Generator",
    description: "Generate analogous, complementary, triadic, or random color palettes.",
    image: "./assets/color.png",
    live: "./tools/color-palette-generator/index.html",
    code: "#"
  },
  {
    name: "ASCII Art Generator",
    description: "Convert images or text into ASCII art characters.",
    image: "./assets/markdown.png",
    live: "./tools/ascii-art-generator/index.html",
    code: "#"
  },
  {
    name: "Morse Code Converter",
    description: "Encode text to Morse code and decode Morse code to text.",
    image: "./assets/text.png",
    live: "./tools/morse-code-converter/index.html",
    code: "#"
  },
  {
    name: "Text Encryptor",
    description: "Encrypt and decrypt text using AES-GCM with a password (browser-only).",
    image: "./assets/password.png",
    live: "./tools/text-encryptor/index.html",
    code: "#"
  },
  {
    name: "Image to Base64",
    description: "Convert any image to a Base64 data URL for embedding.",
    image: "./assets/base64.png",
    live: "./tools/image-to-base64/index.html",
    code: "#"
  },
  {
    name: "CSS Box Shadow Generator",
    description: "Visually design box shadows and copy the CSS with one click.",
    image: "./assets/gradient.png",
    live: "./tools/css-box-shadow/index.html",
    code: "#"
  },
  {
    name: "Responsive Breakpoints",
    description: "Preview any website at common responsive design breakpoints.",
    image: "./assets/markdown.png",
    live: "./tools/responsive-breakpoints/index.html",
    code: "#"
  },
  {
    name: "Word Frequency Analyzer",
    description: "Analyze text and see the most frequently used words ranked.",
    image: "./assets/text-stats.png",
    live: "./tools/word-frequency/index.html",
    code: "#"
  },
  {
    name: "Loan Calculator",
    description: "Calculate EMI, total interest, and total payment for any loan.",
    image: "./assets/loan.png",
    live: "./tools/loan-calculator/index.html",
    code: "#"
  },
  {
    name: "Speed / Distance / Time",
    description: "Calculate speed, distance, or time — enter any two to find the third.",
    image: "./assets/unit.png",
    live: "./tools/speed-distance-time/index.html",
    code: "#"
  },
  {
    name: "Temperature Converter",
    description: "Convert between Celsius, Fahrenheit, Kelvin, and Rankine instantly.",
    image: "./assets/unit.png",
    live: "./tools/temperature-converter/index.html",
    code: "#"
  },
  {
    name: "Calorie Calculator",
    description: "Calculate your daily calorie needs using the Mifflin-St Jeor equation.",
    image: "./assets/bmi.png",
    live: "./tools/calorie-calculator/index.html",
    code: "#"
  },
  {
    name: "Invoice Generator",
    description: "Create and print professional invoices with line items and tax.",
    image: "./assets/loan.png",
    live: "./tools/invoice-generator/index.html",
    code: "#"
  },
  {
    name: "Code Formatter",
    description: "Format and minify JSON, HTML, and CSS with one click.",
    image: "./assets/json.png",
    live: "./tools/code-formatter/index.html",
    code: "#"
  },
  {
    name: "URL Encoder / Decoder",
    description: "Encode or decode URL strings using encodeURIComponent.",
    image: "./assets/base64.png",
    live: "./tools/url-encoder/index.html",
    code: "#"
  },
  {
    name: "Internet Speed Test",
    description: "Test your download speed and ping using a real fetch request.",
    image: "./assets/random.png",
    live: "./tools/internet-speed-test/index.html",
    code: "#"
  },
  {
    name: "Paint App",
    description: "Draw freely in the browser with brush, eraser, fill, and color picker.",
    image: "./assets/color.png",
    live: "./tools/paint-app/index.html",
    code: "#"
  }
];

const grid = document.getElementById("toolsGrid");
const count = document.getElementById("toolCount");

tools.forEach(tool => {
  const card = document.createElement("div");
  card.className = "tool-card";

  card.innerHTML = `
    <img src="${tool.image}" class="tool-image" alt="${tool.name}" onerror="this.style.background='#1e293b';this.style.minHeight='150px'">
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
