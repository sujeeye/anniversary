// ====== EDIT THESE ======
const NAME_ONE = "Cheeku";
const NAME_TWO = "mickey";
// Set this to the day you got together (YYYY, MM-1, DD)
const START_DATE = new Date();
START_DATE.setFullYear(START_DATE.getFullYear() - 1);
// ========================

const TIMELINE = [
  { month: "The First Mention", title: "Where it all began", text: "Before I ever saw your face or heard your voice, your name arrived softly through a simple phone call. In that ordinary moment, something extraordinary began. I didn't know then that the girl being spoken of would soon become the most beautiful part of my story.", image: "images/event-1.jpg", alt: "First mention" },
  { month: "First Voice", title: "Sweetness to Remember", text: "The very first time I heard your voice was through our friend's phone call, asking so simply, 'biriyani medich tharo.' It was a playful little moment, light and ordinary, yet I never knew those few sweet words would stay with me.", image: "images/event-2.jpg", alt: "First voice" },
  { month: "Unexpected Meet", title: "Chocolate Shake", text: "Fate found us at the bus stand that day, in a moment none of us had planned. You were waiting to go home, standing there so simply, yet somehow making the whole place feel brighter.", image: "images/event-3.jpg", alt: "Unexpected meet" },
  { month: "The Beginning of Us", title: "A New Chapter", text: "Then came the exchange of numbers — a small moment that opened the door to something beautiful. What started as simple chats soon became endless conversations.", image: "images/event-4.jpg", alt: "Beginning of us" },
  { month: "The Storm We Chose to Cross", title: "My Comfort Zone", text: "Not every chapter of love was easy. There came a time of confusion, hurt, and difficult choices, when the paths between us and others became tangled.", image: "images/event-5.jpg", alt: "Storm we chose to cross" },
  { month: "From Conversations to Connection", title: "Growing Closer", text: "Days quietly passed, and with every message, we gave each other more than words. We shared memories, little experiences, private thoughts.", image: "images/event-6.jpg", alt: "From conversations to connection" },
  { month: "Love Through the Silence", title: "Unspoken Strength", text: "Soon after we became committed, life tested us with a difficult season. I had to undergo eye surgery and spend many days in rest.", image: "images/event-7.jpg", alt: "Love through the silence" },
  { month: "Our First Official Date", title: "A Day to Remember", text: "After the days of rest had passed and life slowly returned to normal, the moment we had been waiting for finally arrived — our first official date as a couple.", image: "images/event-8.jpg", alt: "First official date" },
  { month: "Little Meetings, Lasting Love", title: "Every Moment Counts", text: "After our first date, we promised to keep finding our way back to each other, meeting whenever we could and turning ordinary days into beautiful memories.", image: "images/event-9.jpg", alt: "Little meetings, lasting love" },  
  { month: "Stronger With Time", title: "Her Birthday & The Anklet Gift", text: "As days passed, our love grew deeper and steadier. What began softly became something strong and certain, built on trust, honesty, and promises kept.", image: "images/event-10.jpg", alt: "Birthday anklet gift" },
  { month: "My Birthday — March 11, 2026", title: "Your Beautiful Surprise", text: "Then came my special day, March 11, 2026, and you turned it into a memory I will never forget. With love and thoughtfulness, you surprised me with a beautiful gift.", image: "images/event-11.jpg", alt: "Birthday surprise gift" },
  { month: "Growing Through Everything", title: "One Year of Us", text: "Day by day, we came to know each other more deeply through both happy moments and hard times, always making each other our first priority.", image: "images/event-12.jpg", alt: "One year of togetherness" },
];

const GALLERY = [
  { src: "images/gallery-1.jpg", alt: "we-1", caption: "the flowers you love" },
  { src: "images/gallery-2.jpg", alt: "we-2", caption: "the lovely duo" },
  { src: "images/gallery-3.jpg", alt: "we-3", caption: "moments worth keeping" },
  { src: "images/gallery-4.jpg", alt: "we-4", caption: "endless love" },
  { src: "images/gallery-5.jpg", alt: "we-5", caption: "the couple" },
  { src: "images/gallery-6.jpg", alt: "we-6", caption: "forever" },
  { src: "images/gallery-7.jpg", alt: "we-7", caption: "happiest moments" },
  { src: "images/gallery-8.jpg", alt: "we-8", caption: "cheeku & mickey" },
  { src: "images/gallery-9.jpg", alt: "we-9", caption: "bold mickey" },
  { src: "images/gallery-10.jpg", alt: "we-10", caption: "mickeys's cheeku" },
  { src: "images/gallery-11.jpg", alt: "we-11", caption: "mommy cheeku" },
  { src: "images/gallery-12.jpg", alt: "we-12", caption: "cheeku's mickey" },
  { src: "images/gallery-13.jpg", alt: "we-13", caption: "marappatti" },
  { src: "images/gallery-14.jpg", alt: "we-14", caption: "princess" },
  { src: "images/gallery-15.jpg", alt: "we-15", caption: "little mickey" },
  { src: "images/gallery-16.jpg", alt: "we-16", caption: "butterfly" },
  { src: "images/gallery-17.jpg", alt: "we-17", caption: "the world" },
  { src: "images/gallery-18.jpg", alt: "we-18", caption: "the alluvakashnam" },
  { src: "images/gallery-19.jpg", alt: "we-19", caption: "attractions" },
  { src: "images/gallery-20.jpg", alt: "we-20", caption: "chubby cheeku" },
  { src: "images/gallery-21.jpg", alt: "we-21", caption: "pretty as a child" },
  { src: "images/gallery-22.jpg", alt: "we-22", caption: "hubby teddy bear" },
  { src: "images/gallery-23.jpg", alt: "we-23", caption: "handsome mickey" },
  { src: "images/gallery-24.jpg", alt: "we-24", caption: "killing smile" },
  { src: "images/gallery-25.jpg", alt: "we-25", caption: "love like babies" },
  { src: "images/gallery-26.jpg", alt: "we-26", caption: "pretty cartoon" },
  { src: "images/gallery-27.jpg", alt: "we-27", caption: "beauty in anime" },
  { src: "images/gallery-28.jpg", alt: "we-28", caption: "precious" },
  { src: "images/gallery-29.JPG", alt: "we-29", caption: "cute smile" },
  { src: "images/gallery-30.jpg", alt: "we-30", caption: "everything" },
];

// Names
document.querySelectorAll(".hero-title span")[0].textContent = NAME_ONE;
document.querySelectorAll(".hero-title span")[2].textContent = NAME_TWO;
document.querySelector(".footer-sub").innerHTML = `made with love · ${NAME_ONE} &amp; ${NAME_TWO}`;

// Days
const days = Math.max(1, Math.floor((Date.now() - START_DATE.getTime()) / 86400000));
document.getElementById("days").textContent = days;

// Years range
const now = new Date();
document.getElementById("years").textContent = `${START_DATE.getFullYear()} — ${now.getFullYear()}`;

// Timeline render
const slideshow = document.getElementById("timeline-slideshow");
const slidesContainer = document.getElementById("slides-container");
const indicators = document.getElementById("slide-indicators");
let currentSlide = 0;

TIMELINE.forEach((it, i) => {
  const slide = document.createElement("div");
  slide.className = `slide ${i % 2 === 0 ? 'polaroid-left' : 'polaroid-right'}`;
  const rotation = (Math.random() - 0.5) * 6; // Random rotation between -3deg and 3deg
  slide.innerHTML = `
    <div class="polaroid" style="transform: rotate(${rotation}deg)">
      <img src="${it.image}" alt="${it.alt}" loading="lazy" />
    </div>
    <div class="slide-text">
      <p class="t-month">${it.month}</p>
      <h3 class="t-title">${it.title}</h3>
      <p class="t-text">${it.text}</p>
    </div>
  `;
  slidesContainer.appendChild(slide);

  const indicator = document.createElement("div");
  indicator.className = "slide-indicator";
  if (i === 0) indicator.classList.add("active");
  indicator.addEventListener("click", () => goToSlide(i));
  indicators.appendChild(indicator);
});

function updateSlides() {
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll(".slide-indicator").forEach((ind, i) => {
    ind.classList.toggle("active", i === currentSlide);
  });
}

function goToSlide(index) {
  currentSlide = index;
  updateSlides();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % TIMELINE.length;
  updateSlides();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + TIMELINE.length) % TIMELINE.length;
  updateSlides();
}

document.querySelector(".slide-nav.next").addEventListener("click", nextSlide);
document.querySelector(".slide-nav.prev").addEventListener("click", prevSlide);

// Optional: Auto-play
// setInterval(nextSlide, 5000);

// Gallery render
const gg = document.getElementById("gallery-grid");
GALLERY.forEach((g) => {
  const fig = document.createElement("figure");
  fig.className = "g-item";
  fig.innerHTML = `
    <img src="${g.src}" alt="${g.alt}" loading="lazy" />
    <figcaption class="g-cap">${g.caption}</figcaption>
  `;
  gg.appendChild(fig);
});

// Petals
const petals = document.getElementById("petals");
for (let i = 0; i < 18; i++) {
  const s = document.createElement("span");
  s.className = "petal";
  const left = (i * 53) % 100;
  const delay = (i * 1.7) % 12;
  const duration = 14 + ((i * 3) % 12);
  const size = 8 + ((i * 5) % 14);
  const opacity = 0.4 + ((i % 5) * 0.1);
  s.style.cssText = `left:${left}%;width:${size}px;height:${size}px;animation-delay:${delay}s;animation-duration:${duration}s;opacity:${opacity}`;
  petals.appendChild(s);
}

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { rootMargin: "-80px" });
document.querySelectorAll(".reveal-on-scroll").forEach(el => io.observe(el));

// Entry Gate Logic
const correctPassword = "mickey"; // Set your password here (lowercase)
const questions = [
  "Do you love me?",
  "Will you stay with me forever?",
  "Am I your favorite person?",
  "Do you want to spend your life with me?",
  "Are you ready to celebrate our anniversary?"
];
let currentQuestion = 0;

document.getElementById('submit-password').addEventListener('click', () => {
  const pass = document.getElementById('password-input').value.toLowerCase();
  if (pass === correctPassword) {
    document.getElementById('password-screen').style.display = 'none';
    document.getElementById('questions-screen').style.display = 'block';
    showQuestion();
  } else {
    alert('Wrong password! Try again. 💔');
  }
});

function showQuestion() {
  document.getElementById('question-text').textContent = questions[currentQuestion];
  document.getElementById('mickey-gif').src = `images/mickey-${currentQuestion + 1}.gif`;
}

document.getElementById('yes-btn').addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById('questions-screen').style.display = 'none';
    document.getElementById('success-screen').style.display = 'block';
  }
});

document.getElementById('no-btn').addEventListener('mouseover', moveNoButton);
document.getElementById('no-btn').addEventListener('click', moveNoButton);

function moveNoButton() {
  const btn = document.getElementById('no-btn');
  const container = document.querySelector('.buttons');
  const rect = container.getBoundingClientRect();
  const padding = 8;
  const maxX = Math.max(padding, rect.width - btn.offsetWidth - padding);
  const maxY = Math.max(padding, rect.height - btn.offsetHeight - padding);
  const newX = padding + Math.random() * (maxX - padding);
  const newY = padding + Math.random() * (maxY - padding);

  btn.style.left = `${newX}px`;
  btn.style.top = `${newY}px`;
  btn.style.transform = 'translate(0, 0) scale(1.04)';

  window.setTimeout(() => {
    btn.style.transform = 'translate(0, 0) scale(1)';
  }, 180);
}

document.getElementById('enter-site').addEventListener('click', () => {
  document.getElementById('entry').style.display = 'none';
  document.querySelector('main').style.display = 'block';
});
