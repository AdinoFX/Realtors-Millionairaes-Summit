// Countdown Timer
const eventDate = new Date('2025-01-25');
const countdownText = document.getElementById('countdownText');

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = eventDate - currentDate;
  
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
  countdownText.textContent = `${daysRemaining} days to go`;
}

// Initial call and update every day
updateCountdown();
setInterval(updateCountdown, 24 * 60 * 60 * 1000); // Update daily

//FAQ
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    // Toggle the answer visibility
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});
