const herName = "Majola sthandwa sam ndedwa";
const startDate = "2024-07-23"; // the day you got together (YYYY-MM-DD)
const yourName = "Mr Matiwane";
const letter = `Every day with you feels like my favorite day.
 
i don't have much to say, i just wanted to tell you how much i love you
and i appreciate having you as my partner, i know i always say that i love you 
you're everything and i could ever ask for and more even though sometimes 
you may be very difficult to deal with i still love you, i love you Majola sthandwa sam 
and to many more years that i hope we spend together.
Thank you for loving me thank you for being part of my life (i mean it's not like you had a choice).
have a good night, byeee
I love you.`;
// ======================
 
document.getElementById("title").textContent = "For " + herName + " ♥";
document.getElementById("signature").textContent = "Forever yours, " + yourName;
 
// Days together, counting up
const days = Math.max(0, Math.floor((Date.now() - new Date(startDate)) / 86400000));
 
function countUp(target) {
  const el = document.getElementById("days");
  const step = Math.max(1, Math.ceil(target / 100));
  let n = 0;
  const timer = setInterval(() => {
    n = Math.min(n + step, target);
    el.textContent = n;
    if (n >= target) clearInterval(timer);
  }, 20);
}
 
// Typing effect
function typeLetter(i = 0) {
  const el = document.getElementById("letter");
  if (i <= letter.length) {
    el.textContent = letter.slice(0, i);
    setTimeout(() => typeLetter(i + 1), 45);
  } else {
    document.getElementById("signature").classList.add("show");
  }
}
 
// Floating hearts
function floatHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = ["♥", "❤", "💖", "🌸"][Math.floor(Math.random() * 4)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 14 + Math.random() * 26 + "px";
  h.style.animationDuration = 6 + Math.random() * 6 + "s";
  document.getElementById("hearts").appendChild(h);
  setTimeout(() => h.remove(), 12000);
}
 
countUp(days);
setTimeout(() => typeLetter(), 1500);
setInterval(floatHeart, 500);
