/**
 * Copyright 2022 By Farid Vatani
 */

/**
 * toggle active class on header when clicked nav-toggle-btn
 */
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-menu-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});
