/**
 * Enhanced navigation functionality for Maco Painting website
 * - Improved mobile menu toggle
 * - Fixed dropdown behavior on touch devices
 * - Added scroll indicator functionality
 * - Added active class for current page in navigation
 */

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle with improved event handling
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const body = document.body;

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("active");
      menuToggle.classList.toggle("active");
      body.classList.toggle("menu-open"); // Prevent background scrolling when menu is open
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        mainNav.classList.contains("active") &&
        !e.target.closest(".main-nav") &&
        !e.target.closest(".menu-toggle")
      ) {
        mainNav.classList.remove("active");
        menuToggle.classList.remove("active");
        body.classList.remove("menu-open");
      }
    });
  }

  // Add scroll indicator to hero sections
  const heroSection = document.querySelector(".hero-section");
  if (heroSection && !document.querySelector(".scroll-indicator")) {
    const scrollIndicator = document.createElement("div");
    scrollIndicator.className = "scroll-indicator";
    scrollIndicator.textContent = "SCROLL";

    // Add it to the hero section
    heroSection.appendChild(scrollIndicator);

    // Add event listener for smooth scrolling
    scrollIndicator.addEventListener("click", function () {
      const firstContentSection = document.querySelector(
        "section:not(.hero-section)"
      );
      if (firstContentSection) {
        window.scrollTo({
          top: firstContentSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  }

  // Add background to header on scroll
  const header = document.querySelector(".site-header");
  if (header) {
    // Set initial state based on scroll position
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    }

    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // *** FIXED: Improved dropdown handling for mobile and touch devices ***
  const dropdownItems = document.querySelectorAll(".has-dropdown");

  if (dropdownItems.length) {
    dropdownItems.forEach((item) => {
      const link = item.querySelector("a.dropdown-trigger");

      if (link) {
        link.addEventListener("click", function (e) {
          // Always prevent default for dropdown triggers
          e.preventDefault();

          // Close other open dropdowns
          dropdownItems.forEach((otherItem) => {
            if (otherItem !== item && otherItem.classList.contains("active")) {
              otherItem.classList.remove("active");
              const otherDropdown = otherItem.querySelector(".dropdown-menu");
              if (otherDropdown) {
                otherDropdown.style.display = "none";
              }
            }
          });

          // Toggle current dropdown
          item.classList.toggle("active");
          const dropdown = item.querySelector(".dropdown-menu");

          if (dropdown) {
            // Set explicit display style to ensure it works on mobile
            dropdown.style.display = item.classList.contains("active")
              ? "block"
              : "none";
          }
        });
      }
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".has-dropdown")) {
        dropdownItems.forEach((item) => {
          item.classList.remove("active");
          const dropdown = item.querySelector(".dropdown-menu");
          if (dropdown) {
            dropdown.style.display = "none";
          }
        });
      }
    });
  }

  // Add active class to current page in navigation
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(
    ".nav-item a:not(.dropdown-trigger)"
  );

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    // Check if the href matches the current path
    if (
      href === currentPath ||
      (href !== "/" && currentPath.startsWith(href))
    ) {
      link.classList.add("active");

      // If the link is in a dropdown, also mark the parent dropdown as active
      const parentDropdown = link.closest(".has-dropdown");
      if (parentDropdown) {
        const dropdownTrigger =
          parentDropdown.querySelector(".dropdown-trigger");
        if (dropdownTrigger) {
          dropdownTrigger.classList.add("active");
        }
      }
    }
  });
});
