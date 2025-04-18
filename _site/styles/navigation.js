// Navigation and UI interactions

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  // Scroll indicator click handler
  const scrollIndicator = document.querySelector(".scroll-indicator");
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", function () {
      const firstSection = document.querySelector("section:not(.hero-section)");
      if (firstSection) {
        window.scrollTo({
          top: firstSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  }

  // Add background to header on scroll
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // Handle dropdown menu touch events on mobile
  const dropdownItems = document.querySelectorAll(".has-dropdown");
  if (dropdownItems.length) {
    dropdownItems.forEach((item) => {
      const link = item.querySelector("a");
      const dropdown = item.querySelector(".dropdown-menu");

      // For touch devices
      if ("ontouchstart" in window) {
        link.addEventListener("click", function (e) {
          if (!dropdown.classList.contains("active")) {
            e.preventDefault();
            dropdown.classList.add("active");
          }
        });
      }
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".has-dropdown")) {
        document.querySelectorAll(".dropdown-menu.active").forEach((menu) => {
          menu.classList.remove("active");
        });
      }
    });
  }
});
