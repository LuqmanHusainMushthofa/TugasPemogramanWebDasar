// ==== SCRIPT.JS - UTS PREMIUM FINAL ====

// Tampilkan pesan UTS
document.getElementById("pesanBtn").addEventListener("click", function() {
  alert("Halo, Luqman Husain Mushthofa! Selamat mengerjakan UTS 🎓");
  document.body.style.transition = "background 0.5s";
  document.body.style.backgroundColor = "#e6e6fa";
  setTimeout(() => document.body.style.backgroundColor = "", 1500);
});

// Efek Scroll Fade In
const fadeEls = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  fadeEls.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100)
      el.classList.add("visible");
  });
});

// Tombol Mode Terang-Gelap
const modeBtn = document.getElementById("modeToggle");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const icon = modeBtn.querySelector("i");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
});

// Tombol Scroll ke Atas
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) scrollBtn.classList.add("show");
  else scrollBtn.classList.remove("show");
});
scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Efek Ketik Otomatis di Hero
const texts = [
  "Mahasiswa Sistem Informasi",
  "Calon Web Developer",
  "Penyuka Billiard & Teknologi"
];
let index = 0, char = 0;
const typingEl = document.getElementById("typing");

function typeEffect() {
  if (char < texts[index].length) {
    typingEl.textContent += texts[index].charAt(char);
    char++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => eraseEffect(), 1500);
  }
}

function eraseEffect() {
  if (char > 0) {
    typingEl.textContent = texts[index].substring(0, char - 1);
    char--;
    setTimeout(eraseEffect, 60);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(typeEffect, 400);
  }
}
typeEffect();

// Form kirim pesan alert
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Terima kasih! Pesan kamu sudah terkirim ✅");
  e.target.reset();
});
