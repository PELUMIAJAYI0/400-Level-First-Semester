// Services Slider
$(".owl-service").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: { items: 1, nav: false },
    600: { items: 1, nav: false },
    1024: { items: 3, nav: true },
    1200: { items: 3, nav: true },
  },
});
$(".owl-courses").owlCarousel({
  items: 4,
  loop: true,
  dots: true,

  autoplay: true,
  margin: 30,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
    },
  },
});
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $("nav ul li a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $(".nav ul li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
// Accordion
const accItems = document.querySelectorAll(".acc-item");
accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));
function toggleAcc() {
  // remove active class from all items exept the current item (this)
  accItems.forEach((item) =>
    item != this ? item.classList.remove("acc-item-active") : null
  );
  // toggle active class on current item
  if (this.classList != "acc-item-active") {
    this.classList.toggle("acc-item-active");
  }
}
// Digits Animation
const counters = document.querySelectorAll(".count-digit");
const speed = 200;
counters.forEach((counter) => {
  const animate = () => {
    const value = +counter.getAttribute("value");
    const data = +counter.innerText;
    const time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(animate, 1);
    } else {
      counter.innerText = value;
    }
  };
  animate();
});
// Open Sidenav
$("nav .menuBtn").on("click", function () {
  $(".menu").toggleClass("active");
}),
  // Close SideNav
  $("#menu .fa-times").on("click", function () {
    $(".menu").removeClass("active");
  });
// Close SideNav When Click Outside
$("html").on("click", function () {
  $(".menu").removeClass("active");
}),
  $(".menu, .menuBtn").click(function (e) {
    e.stopPropagation();
  });
// sticky Header
window.onscroll = function () {
  var header = document.getElementById("stickyHeader");
  var listItems = document.querySelectorAll("#menu li a");
  var menuBtn = document.querySelector(".menuBtn");
  var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("reverse-header");
    menuBtn.classList.add("reverse-menuBtn");
    listItems.forEach((item) => {
      item.classList.add("reverse-list");
    });
  } else {
    header.classList.remove("reverse-header");
    menuBtn.classList.remove("reverse-menuBtn");
    listItems.forEach((item) => {
      item.classList.remove("reverse-list");
    });
  }
};

// =============================================
// CONTACT FORM VALIDATION
// =============================================

(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  // DOM Elements
  const firstName = document.getElementById("firstName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");
  const charCount = document.getElementById("charCount");
  const charCounter = document.querySelector(".char-counter");

  // Error message elements
  const firstNameError = document.getElementById("firstNameError");
  const emailError = document.getElementById("emailError");
  const genderError = document.getElementById("genderError");
  const phoneError = document.getElementById("phoneError");
  const messageError = document.getElementById("messageError");

  // ---- REGEX PATTERNS ----

  // First Name: must contain at least one uppercase, one lowercase, and one number
  const firstNameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{3,}$/;

  // Email: must end with @student.aul.edu.ng
  const emailRegex = /^[a-zA-Z0-9._%+-]+@student\.aul\.edu\.ng$/;

  // Phone: exactly digits, max 11 characters
  const phoneRegex = /^\d{1,11}$/;

  // ---- HELPER FUNCTIONS ----

  function showError(input, errorEl, msg) {
    errorEl.textContent = msg;
    if (input) {
      input.classList.add("input-error");
      input.classList.remove("input-success");
    }
  }

  function showSuccess(input, errorEl) {
    errorEl.textContent = "";
    if (input) {
      input.classList.remove("input-error");
      input.classList.add("input-success");
    }
  }

  function clearState(input, errorEl) {
    errorEl.textContent = "";
    if (input) {
      input.classList.remove("input-error", "input-success");
    }
  }

  // ---- INDIVIDUAL VALIDATORS ----

  function validateFirstName() {
    const val = firstName.value.trim();
    if (val === "") {
      showError(firstName, firstNameError, "First name is required.");
      return false;
    }
    if (!firstNameRegex.test(val)) {
      showError(
        firstName,
        firstNameError,
        "Must contain uppercase, lowercase, and a number."
      );
      return false;
    }
    showSuccess(firstName, firstNameError);
    return true;
  }

  function validateEmail() {
    const val = email.value.trim();
    if (val === "") {
      showError(email, emailError, "Email is required.");
      return false;
    }
    if (!emailRegex.test(val)) {
      showError(
        email,
        emailError,
        "Must be a valid Anchor email (@student.aul.edu.ng)."
      );
      return false;
    }
    showSuccess(email, emailError);
    return true;
  }

  function validateGender() {
    const selected = form.querySelector('input[name="gender"]:checked');
    if (!selected) {
      genderError.textContent = "Please select a gender.";
      return false;
    }
    genderError.textContent = "";
    return true;
  }

  function validatePhone() {
    const val = phone.value.trim();
    if (val === "") {
      showError(phone, phoneError, "Phone number is required.");
      return false;
    }
    if (!phoneRegex.test(val)) {
      showError(phone, phoneError, "Enter up to 11 digits only.");
      return false;
    }
    if (val.length > 11) {
      showError(phone, phoneError, "Maximum 11 digits allowed.");
      return false;
    }
    showSuccess(phone, phoneError);
    return true;
  }

  function validateMessage() {
    const val = message.value;
    if (val.trim() === "") {
      showError(message, messageError, "Message is required.");
      return false;
    }
    if (val.length > 50) {
      showError(message, messageError, "Message cannot exceed 50 characters.");
      return false;
    }
    showSuccess(message, messageError);
    return true;
  }

  // ---- CHARACTER COUNTDOWN ----

  message.addEventListener("input", function () {
    const remaining = 50 - message.value.length;
    charCount.textContent = remaining;

    // Add warning class when low
    if (remaining <= 10) {
      charCounter.classList.add("warning");
    } else {
      charCounter.classList.remove("warning");
    }

    // Live validate message
    if (message.value.trim() !== "") {
      validateMessage();
    }
  });

  // ---- REAL-TIME VALIDATION ON INPUT ----

  firstName.addEventListener("input", function () {
    if (firstName.value.trim() !== "") validateFirstName();
    else clearState(firstName, firstNameError);
  });

  email.addEventListener("input", function () {
    if (email.value.trim() !== "") validateEmail();
    else clearState(email, emailError);
  });

  phone.addEventListener("input", function () {
    // Strip non-digits on input
    phone.value = phone.value.replace(/\D/g, "");
    if (phone.value.trim() !== "") validatePhone();
    else clearState(phone, phoneError);
  });

  // Gender radio change
  const genderRadios = form.querySelectorAll('input[name="gender"]');
  genderRadios.forEach(function (radio) {
    radio.addEventListener("change", validateGender);
  });

  // ---- FORM SUBMIT ----

  const submitBtn = document.getElementById("form-submit");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Run all validators
    const isFirstNameValid = validateFirstName();
    const isEmailValid = validateEmail();
    const isGenderValid = validateGender();
    const isPhoneValid = validatePhone();
    const isMessageValid = validateMessage();

    if (
      isFirstNameValid &&
      isEmailValid &&
      isGenderValid &&
      isPhoneValid &&
      isMessageValid
    ) {
      // Disable button and show sending state
      submitBtn.disabled = true;
      submitBtn.classList.add("sending");
      submitBtn.innerHTML =
        '<span class="spinner"></span> SENDING MESSAGE...';

      // After 6 seconds, show success
      setTimeout(function () {
        submitBtn.classList.remove("sending");
        submitBtn.classList.add("sent");
        submitBtn.innerHTML = '<i class="fa fa-check"></i> MESSAGE HAS BEEN SENT!';

        // After another 2 seconds, reset everything
        setTimeout(function () {
          form.reset();
          charCount.textContent = "50";
          charCounter.classList.remove("warning");

          // Clear all input states
          [firstName, email, phone, message].forEach(function (input) {
            input.classList.remove("input-success", "input-error");
          });
          genderError.textContent = "";

          // Reset button
          submitBtn.disabled = false;
          submitBtn.classList.remove("sent");
          submitBtn.innerHTML = "SEND MESSAGE NOW";
        }, 2000);
      }, 6000);
    }
  });
})();