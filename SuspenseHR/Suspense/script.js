// Select elements
const countdownElement = document.getElementById('countdown');
const nameElement = document.getElementById('name');

// Set the person's name and birthday
const name = "MY Munna"; // Replace with the name
const birthday = new Date('2024-12-27'); // Replace with the birthday (YYYY-MM-DD)

// Update the name
nameElement.textContent = `${name}'s Birthday`;

function updateCountdown() {
    const now = new Date();
    const timeDifference = birthday - now;

    if (timeDifference < 0) {
        countdownElement.textContent = "🎂 Happy Birthday! 🎂";
        return;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    // Update the countdown text
    countdownElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds left!`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

  