// Countdown Timer
const eventDate = new Date("2025-01-25");
const countdownText = document.getElementById("countdownText");

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = eventDate - currentDate;

  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  countdownText.textContent = `${daysRemaining} days to go`;
}

// Initial call and update every day
updateCountdown();
setInterval(updateCountdown, 24 * 60 * 60 * 1000); // Update daily

//SPEAKERS
// Modal functionality
const speakerCards = document.querySelectorAll(".speaker-card");
const modal = document.getElementById("speaker-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.querySelector(".close-modal");

// Data for each speaker
const speakerData = {
  "PAUL FOH":
    "Paul Foh is a wealth coach and real estate expert, helping individuals and businesses maximize their financial potential.",
  "Niyi Adesanya":
    `Niyi Adesanya is a leadership and business advisor who helps CEOs and other C- Suite executives reinvent themselves
     as they navigate their business re-engineering process. He is an unrivalled and renowned Performance Strategist, 
     whose strong business acumen has helped business owners across various sectors cut through the complexities of todays 
     evolving business environment.`,
  "Emmanuel Olumide":
    `OLUMIDE OLADPO EMMANUEL popularly known as the Common Sense Guru is no doubt one of the worlds leading Relationship Experts, Motivational Speakers and Wealth Creation Agents.

He is a man of multiple graces whose influence spreads across the religious and secular arena with local and international awards to show for it.`,
  "Dr. Smith Ezenagu":
    "Dr. Smith Ezenagu specializes in business growth strategies and wealth creation, helping businesses scale and achieve financial freedom.",
};

// Open modal
speakerCards.forEach((card) => {
  card.addEventListener("click", () => {
    const speakerName = card.getAttribute("data-speaker");
    modalTitle.textContent = speakerName;
    modalDescription.textContent = speakerData[speakerName];
    modal.style.display = "flex";
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

//FAQ
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    // Toggle the answer visibility
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});
