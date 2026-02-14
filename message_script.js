/*
 * Message page logic
 *
 * This script drives the interactive experience on the second page. It
 * populates the scrolling text with the full love letter, generates
 * decorative hearts, and reveals the complete message once the
 * animated crawl finishes. When the scroll completes, the dark
 * background image is brightened to showcase the uploaded image in
 * full colour and clarity.
 */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    // Elements used by the teleprompter effect
    const teleprompterContent = document.getElementById('teleprompter-content');
    const fullMessageDiv = document.getElementById('full-message');
    const backgroundOverlay = document.getElementById('background-overlay');

    // The full message to display in the Star Wars‑style crawl and final reveal.
    const messageText =
      "Hi, Love Happy Valentines Day!! I love you, and I could never have imagined a world where I didn't have you in my life. The other night I kept thinking about all the nights, and sleepovers, and the parks that we went too together as kids and how amazing it was that we could always trust each other, and that we would somehow be trusted to even sleep on the same bed as each other, its actually crazy to think about, but at the same time its so beautiful that we got to spend time together like that.  Everyday, you make me feel like the most loved boyfriend in the world, and there is not a moment where I haven't seen the love you have for me. And it makes me happy to know that part of the reason we can trust eachother so much is because we grew up spending so much time together. You are a absolutely gorgeous girlfriend, which I couldn't even begin to describe the level of beauty that you have about you, in the way that you show your love for anything that you do in life, and for the way you make all of your friends happy. I find that as we have grown closer together we have faced many beautiful moment's but also conflicts and definitely have many more to come, but it means a lot to me that you have always been very responsive to my state and I am committed to making our hard moments and our beautiful moments better and better as we continue to develop. truly hope that you are never manipulated or feel trapped by me or any of our parents, because your truly a free and beautiful soul, and I love that a lot more than I can explain. MY FAVORITE THNG IN THE WHOLE WORDL WHICH I WISH I COULD DO RIGHT NOW Is to shower you in flower petals and tell you that I love you, and to kiss you with my hands wrapped around you and stay locked in an embrace together just for those moments where I get to feel your heart beat on my chest and to feel the whole world around me fade as I can take my time and just appreciate the girlfriend that I am very lucky to have. You are a masterpiece worth being displayed amongst the most beautiful paintings in all the worlds museums, and you are a person with a heart worth being shown to the whole world as an example. Your every step and every move always make my heart feel jittery and your cuddles  as I sleep always make my whole world feel way to much love. I hope you know that I see you like a diamond in the night sky with the brightness of a star, the colorful shine of the diamond, and the spectacle only seen for its complete beauty if given enough attention. I can tell you love that I have paid attention and all i ever see is a diamond that I cant help but want to keep close in my life. Always, always know that I love you, and I hope I will always show that to you with more than just my words but my actions too. Happy Valentines Day Love!!";

    /**
     * Split the message into groups of three sentences. Each group
     * will be displayed in the teleprompter window one after the
     * other. This grouping ensures roughly three lines of text appear
     * at a time, depending on screen size.
     */
    const sentences = messageText.split(/\.\s+/);
    const groups = [];
    for (let i = 0; i < sentences.length; i += 3) {
      const groupSentences = sentences.slice(i, i + 3);
      groups.push(groupSentences);
    }

    /**
     * Display the next group of sentences in the teleprompter. After
     * all groups have been displayed, reveal the full message and
     * brighten the background.
     */
    function showGroup(index) {
      // Clear previous content
      teleprompterContent.innerHTML = '';
      // Add current group of sentences
      groups[index].forEach(function (sentence) {
        const p = document.createElement('p');
        // Ensure each sentence ends with a period for readability
        const text = sentence.trim() + (sentence.trim().endsWith('.') ? '' : '.');
        p.textContent = text;
        teleprompterContent.appendChild(p);
      });
      // Decide whether to show next group or finish
      if (index + 1 < groups.length) {
        // Show next group after a delay (adjust timing for reading speed)
        setTimeout(function () {
          showGroup(index + 1);
        }, 5000);
      } else {
        // After displaying the last group, wait a bit then show the full message
        setTimeout(function () {
          // Remove the grayscale and dimming filter to reveal the image fully
          backgroundOverlay.style.filter = 'none';
          // Inject the full message into the final reveal container
          const p = document.createElement('p');
          p.textContent = messageText;
          fullMessageDiv.appendChild(p);
          fullMessageDiv.style.display = 'block';
        }, 5000);
      }
    }

    // Kick off the teleprompter effect with the first group
    if (groups.length > 0) {
      showGroup(0);
    }

    /**
     * Generate floating hearts on the message page. The hearts use the
     * same CSS classes as the front page. Each heart is given a
     * random position, size and animation timing so the scene looks
     * dynamic and full of life.
     */
    function createHearts() {
      const container = document.querySelector('.decor-hearts');
      const count = 25;
      for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        const size = 10 + Math.random() * 20;
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        heart.style.animationDuration = 8 + Math.random() * 6 + 's';
        heart.style.animationDelay = -Math.random() * 10 + 's';
        container.appendChild(heart);
      }
    }

    createHearts();

  });
})();