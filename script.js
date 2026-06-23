/**********************************

GOOD PASTEL

Devi Yolanda

Documentation • Analytics

Creative Portfolio Hub

***********************************/

/* =======================
AOS
======================= */

AOS.init({
  once: true,

  duration: 1000,
});

/* =======================
GSAP HERO
======================= */

gsap.registerPlugin(TextPlugin);

gsap.to(".lead", {
  duration: 2,

  delay: 1,

  text: "Documentation • Analytics • Creative Portfolio Hub",
});

gsap.from(".display-4", {
  duration: 1,

  opacity: 0,

  y: -30,

  ease: "power2.out",
});

gsap.from(".hero-desc", {
  duration: 1,

  delay: 0.5,

  opacity: 0,

  y: 20,
});

gsap.from(".hero-buttons", {
  duration: 1,

  delay: 1,

  opacity: 0,

  y: 20,
});

/* =======================
CONTACT FORM
======================= */

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzFxgRffMf4aUZMlJ1IiSgghCAtdM24vN7LFKTs7tx6Cx5TrNa5TFLHeyopSzBKNz7Zqw/exec";

const form = document.forms["Form-Good-Pastel"];

const btnKirim = document.querySelector(".btn-kirim");

const btnLoading = document.querySelector(".btn-loading");

const myAlert = document.querySelector(".my-alert");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    btnLoading.classList.remove("d-none");

    btnKirim.classList.add("d-none");

    fetch(scriptURL, {
      method: "POST",

      body: new FormData(form),
    })
      .then((response) => {
        btnLoading.classList.add("d-none");

        btnKirim.classList.remove("d-none");

        myAlert.classList.remove("d-none");

        form.reset();
      })

      .catch((error) => {
        console.log(error);

        btnLoading.classList.add("d-none");

        btnKirim.classList.remove("d-none");

        alert("Something went wrong.");
      });
  });
}

/* =======================
NAVBAR SHADOW
======================= */

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,.08)";
  } else {
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.04)";
  }
});

/* =======================
PREMIUM CARD EFFECT
======================= */

const cards = document.querySelectorAll(".premium-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});
