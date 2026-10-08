/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");

  menuToggle.setAttribute("aria-expanded", isOpen);

});


/* Close mobile menu when clicking a link */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    navLinks.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

  });

});


/* =========================================
   RESERVATION FORM
========================================= */

const reservationForm =
  document.getElementById("reservationForm");

const formMessage =
  document.getElementById("formMessage");


reservationForm.addEventListener("submit", function (event) {

  event.preventDefault();

  const name =
    document.getElementById("name").value.trim();

  const date =
    document.getElementById("date").value;

  const time =
    document.getElementById("time").value;

  const guests =
    document.getElementById("guests").value;


  if (!name || !date || !time || !guests) {

    formMessage.textContent =
      "Please complete the required fields.";

    return;
  }


  /*
     This is only a front-end demo.

     A real restaurant would send this information
     to a backend, email service, booking system,
     LINE integration, or database.
  */

  formMessage.textContent =
    `Thanks, ${name}! Your reservation request for ${guests} on ${date} at ${time} has been received. This is a demo website, so no real booking has been made.`;

  reservationForm.reset();

});


/* =========================================
   SET MINIMUM RESERVATION DATE
========================================= */

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1).padStart(2, "0");

const day = String(today.getDate()).padStart(2, "0");

const todayString = `${year}-${month}-${day}`;

dateInput.setAttribute("min", todayString);