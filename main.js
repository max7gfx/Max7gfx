/* PRELOADER */

window.addEventListener("load", () => {

  document.querySelector(".preloader").style.display = "none";

});

/* CURSOR */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";

  cursor.style.top = e.clientY + "px";

});

/* NAVBAR SCROLL */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  navbar.classList.toggle("scrolled", window.scrollY > 50);

});

/* MOBILE MENU */

const menuBtn = document.querySelector(".menu-btn");

const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");

});

/* ACTIVE LINKS */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {

      link.classList.add("active");

    }

  });

});

/* REVEAL ANIMATION */

const reveals = document.querySelectorAll(
  "section,.service-card,.portfolio-item,.testimonial-card,.why-card,.process-card,.contact-card"
);

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("active");

    }

  });

}, {
  threshold: 0.1
});

reveals.forEach(el => {

  el.classList.add("reveal");

  observer.observe(el);

});

/* FAQ */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(btn => {

  btn.addEventListener("click", () => {

    const answer = btn.nextElementSibling;

    answer.style.maxHeight = answer.style.maxHeight
      ? null
      : answer.scrollHeight + "px";

  });

});

/* PORTFOLIO FILTER */

const filterBtns = document.querySelectorAll(".filter-btn");

const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    filterBtns.forEach(button => {

      button.classList.remove("active");

    });

    btn.classList.add("active");

    const filter = btn.dataset.filter;

    portfolioItems.forEach(item => {

      if (filter === "all" || item.classList.contains(filter)) {

        item.style.display = "block";

      }

      else {

        item.style.display = "none";

      }

    });

  });

});

/* LIGHTBOX */

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox img");

const closeLightbox = document.querySelector(".close-lightbox");

portfolioItems.forEach(item => {

  item.addEventListener("click", () => {

    lightbox.style.display = "flex";

    lightboxImg.src = item.querySelector("img").src;

  });

});

closeLightbox.addEventListener("click", () => {

  lightbox.style.display = "none";

});

/* PARALLAX */

window.addEventListener("mousemove", (e) => {

  document.querySelectorAll(".blur").forEach(layer => {

    const x = (window.innerWidth - e.pageX * 20) / 100;

    const y = (window.innerHeight - e.pageY * 20) / 100;

    layer.style.transform = `translate(${x}px, ${y}px)`;

  });

});