
//  Event Handling
// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

//  Interactive Elements
// Counter Feature
let counter = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("incrementBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

document.getElementById("decrementBtn").addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// FAQ Collapsible
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// Part 3: Form Validation
const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from refreshing the page

  let valid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Final message
  if (valid) {
    formMessage.textContent = "✅ Form submitted successfully!";
    formMessage.className = "success";
  } else {
    formMessage.textContent = "❌ Please fix the errors above.";
    formMessage.className = "error";
  }
});
