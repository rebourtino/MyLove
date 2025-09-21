// Set your start date
const startDate = new Date('2024-03-20T18:00:00'); // Replace with your date

function updateTimer() {
  const now = new Date();
  const elapsed = now - startDate; // Difference in milliseconds

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
  const seconds = Math.floor((elapsed / 1000) % 60);

  // Display the time in the desired format
  document.getElementById('timeElapsed').textContent = 
    `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initialize the timer immediately
updateTimer();

