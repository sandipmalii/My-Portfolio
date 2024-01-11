function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

 

// Function to toggle dark mode
function toggleDarkMode() {
  const checkbox = document.getElementById("toggle-switch"); // Updated ID
  const body = document.body;

  if (checkbox.checked) {
    // Dark mode is enabled
    body.classList.add("dark-mode");
  } else {
    // Dark mode is disabled
    body.classList.remove("dark-mode");
  }

  // You can also save the user's preference in localStorage for persistence
  const isDarkMode = checkbox.checked;
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

// Check for user's dark mode preference in localStorage
const savedMode = localStorage.getItem("darkMode");
if (savedMode === "enabled") {
  // Enable dark mode on page load if the preference is saved
  const checkbox = document.getElementById("toggle-switch"); // Updated ID
  checkbox.checked = true;
  toggleDarkMode();
}

// Add event listener to the checkbox for toggle
const toggleSwitchCheckbox = document.getElementById("toggle-switch"); // Updated ID
toggleSwitchCheckbox.addEventListener("change", toggleDarkMode);




/*
-------------------
77777777777777777
444444444444444455
555555555555
77777777

*/

 // JavaScript to hide the preloader after 3 seconds
 document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var preloader = document.querySelector(".preloader");
    preloader.style.display = "none";
  }, 3000);
});






const titleElement = document.querySelector('.typer');
const typewriter = new Typewriter(titleElement, {
    strings: [
        "Software Developer",
        "Content Creator",
        "Programmer",
        "Video Editor",
        "Open Source Contributor",
    ],
    autoStart: true,
    loop: true,
    delay: 100, // Delay between each string (milliseconds)
});

typewriter.start();




$(".owl-carousel").owlCarousel({
 
  //Basic Speeds
  slideSpeed : 200,
  paginationSpeed : 800,

  //Autoplay
  autoPlay : false,
  goToFirst : true,
  goToFirstSpeed : 1000,

  // Navigation
  navigation : false,
  navigationText : ["prev","next"],
  pagination : true,
  paginationNumbers: true,

  // Responsive
  responsive: true,
  items : 5,
  itemsDesktop : [1199,4],
  itemsDesktopSmall : [980,3],
  itemsTablet: [768,2],
  itemsMobile : [479,1]

})







document.addEventListener("click", function (event) {
  var menuLinks = document.querySelector(".menu-links");
  var menuContainer = document.querySelector(".menu-container");

  if (event.target !== menuLinks && event.target !== menuContainer) {
    // Clicked outside the menu, close it
    menuLinks.style.maxHeight = "0";
  }
});

menuContainer.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click event from propagating to the document
});









