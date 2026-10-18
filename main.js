const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});
  
// Booking Popup
function openBooking() {
  document.getElementById("bookingForm").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}

function closeBooking() {
  document.getElementById("bookingForm").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

// Close on background click
document.getElementById("overlay").addEventListener("click", closeBooking);

// Booking Logic
function bookFlight() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let date = document.getElementById("date").value;
  let passengers = document.getElementById("passengers").value;

  if (from && to && date && passengers) {

    // Price calculation
    let price = passengers * 5000;

    // Save data
    let booking = {
      from,
      to,
      date,
      passengers,
      price
    };

    localStorage.setItem("bookingData", JSON.stringify(booking));

    alert(`✅ Booking Confirmed!
From: ${from}
To: ${to}
Date: ${date}
Passengers: ${passengers}
Total Price: ₹${price}`);

    closeBooking();

  } else {
    alert("❌ Please fill all details");
  }
}
