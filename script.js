/*
 * Front page script
 *
 * Handles the user interaction on the main page. It creates floating
 * hearts for decoration and manages the logic for the Yes/No buttons.
 */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const messageDiv = document.getElementById('message');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    let yesClicks = 0;

    /**
     * Create floating heart elements and append them to the hearts container.
     * Each heart is given a random position, size, animation duration and delay
     * to create a natural floating effect. Hearts float upward and then fade out.
     */
    function createHearts() {
      const container = document.querySelector('.hearts-container');
      const numberOfHearts = 30;
      for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        // Randomize initial position
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        // Randomize size
        const size = 10 + Math.random() * 20;
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        // Adjust animation timing for variety
        heart.style.animationDuration = 6 + Math.random() * 6 + 's';
        heart.style.animationDelay = -Math.random() * 10 + 's';
        container.appendChild(heart);
      }
    }

    createHearts();

    // Handle clicking the "No" button
    noBtn.addEventListener('click', function () {
      messageDiv.textContent =
        "wow I cant believe that after all the love I have, you are just going to do this, I always knew it was the dogs, but on that note I'll get you a dog one day so maybe consider the yes.";
    });

    // Handle clicking the "Yes" button
    yesBtn.addEventListener('click', function () {
      yesClicks++;
      if (yesClicks === 1) {
        messageDiv.textContent =
          'Whoops! I accidentally forgot to click yes before.';
      } else {
        // Navigate to the message page on the second click
        window.location.href = 'message.html';
      }
    });
  });
})();