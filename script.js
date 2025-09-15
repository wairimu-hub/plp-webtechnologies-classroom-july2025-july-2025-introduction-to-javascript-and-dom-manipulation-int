// Part 1: Variables & Conditionals
let name = "Student";
let hour = new Date().getHours();

if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}

// Part 2: Functions
function changeGreeting() {
  const greet = document.getElementById("greeting");
  greet.textContent = "Welcome, " + name + "!";
}

function changeBackground() {
  const colors = ["lightblue", "lightgreen", "lightyellow"];
  
  // Part 3: Loop
  for (let i = 0; i < colors.length; i++) {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  }
}

// Part 4: DOM Interactions
document.getElementById("greetBtn").addEventListener("click", changeGreeting);
document.getElementById("colorBtn").addEventListener("click", changeBackground);

// Another DOM example
document.body.appendChild(document.createElement("hr"));
