import "./index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



// Smooth Scrolling
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: target, offsetY: 70 },
      delay: 0.2,
    });
  });
});

const homeLink = document.querySelector('a[href="#home"]');

homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  gsap.to(window, { duration: 1, scrollTo: { y: 0 }, delay: 0.2 });
});

const heroIcon = document.querySelector('#home a[href="#about"]');

heroIcon.addEventListener("click", (e) => {
  e.preventDefault();
  const target = document.querySelector(heroIcon.getAttribute("href"));
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: target, offsetY: 70 },
    delay: 0.2,
  });
});

// Mobile Menu
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const navLinksMobile = document.querySelectorAll(".nav-link-mobile");
const hamburgerIcon = document.getElementById("hamburger-icon");
const xIcon = document.getElementById("x-icon");

mobileMenuButton.addEventListener("click", () => {
  const isExpanded = mobileMenu.classList.toggle("hidden");
  mobileMenuButton.setAttribute("aria-expanded", isExpanded);
  hamburgerIcon.classList.toggle("hidden");
  xIcon.classList.toggle("hidden");
});

navLinksMobile.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.add("hidden");
    mobileMenuButton.setAttribute("aria-expanded", false);
    hamburgerIcon.classList.remove("hidden");
    xIcon.classList.add("hidden");
    const target = document.querySelector(link.getAttribute("href"));
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: target, offsetY: 70 },
      delay: 0.2,
    });
  });
});

// Simple Fade-in Animations
gsap.from("#home h1, #home p", {
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.2,
});

gsap.utils.toArray("section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 20,
    duration: 0.5,
  });
});

// Project Modal
const projectModal = document.getElementById("project-modal");
const closeModal = document.getElementById("close-modal");
const projectCards = document.querySelectorAll(".project-card");

const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTechStack = document.getElementById("modal-tech-stack");
const modalLinks = document.getElementById("modal-links");

const projects = [
  {
    title: "Artis At Auction",
    description:
      "With the rise of ultra-fast fashion retailers like Shein and Temu, local brand owners and artisans are struggling to grow their markets both locally and internationally. Competing with such platforms’ low prices leaves little to no profit margin for small creators. The art and fashion industry remains heavily gatekept, with high startup costs and limited networks making it hard for new artisans to break through. As a result, many talented creators never get the chance to showcase their work. Artis at Auction bridges this gap by connecting artisans and art lovers — allowing creators to upload and share their artwork, tell the story behind their inspiration, and let buyers bid for their pieces.",
    techStack: ["HTML/CSS", "C#", "ASP.NET", "SQL Server"],
    links: {
      github: "https://github.com/lk-montoedi/Auction-Website",
      live: "#",
    },
  },
];

projectCards.forEach((card, index) => {
  card.querySelector(".btn-details").addEventListener("click", () => {
    const project = projects[index];
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalTechStack.innerHTML = project.techStack
      .map((tech) => `<span class="skill-tag">${tech}</span>`)
      .join("");
    modalLinks.innerHTML = `
      <a href="${project.links.github}" target="_blank" class="btn btn-secondary">GitHub</a>
      <a href="${project.links.live}" target="_blank" class="btn btn-primary">Live Demo</a>
    `;
    projectModal.classList.remove("hidden");
  });
});

closeModal.addEventListener("click", () => {
  projectModal.classList.add("hidden");
});

projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    projectModal.classList.add("hidden");
  }
});

document.addEventListener("DOMContentLoaded", () => {

  // Header background change on scroll

  const header = document.querySelector("header");



  if (window.location.pathname.includes("blog.html")) {

    // On blog page, header is always solid

    header.classList.add("bg-secondary");

  } else {

    // On home page, header is transparent on top

    // The header is already transparent by default from the HTML.

    // We only need to add the background when scrolling down.

    ScrollTrigger.create({

      trigger: "#home",

      start: "bottom top",

      onEnter: () => header.classList.add("bg-secondary"),

      onLeaveBack: () => header.classList.remove("bg-secondary"),

    });

  }



  // Initialize Swiper
  const swiper = new Swiper(".quote-swiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Mobile-first: 1 slide by default
    slidesPerView: 1,
    spaceBetween: 10,

    // Breakpoints for web: 3 slides
    breakpoints: {
      // when window width is >= 768px (md)
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});
