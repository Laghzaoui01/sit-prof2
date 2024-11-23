// Welcome message for the typing animation
const text = "Welcome to my portfolio! Discover my expertise in Cloud Computing and DevOps.";

// Typing effect
const typingElement = document.getElementById("typing");
let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 50); // Adjust typing speed here
    } else {
        typingElement.style.borderRight = "none"; // Stop caret blinking after text finishes
    }
}

typeText();
