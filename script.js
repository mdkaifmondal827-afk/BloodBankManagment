// Hamburger menu toggle

// Hamburger menu toggle
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});



// Example functions for buttons
function registerDonor() {
  alert("Redirecting to Donor Registration Page...");
}

function requestBlood() {
  alert("Redirecting to Blood Request Page...");
}

// Example counters (dynamic update possible from backend/localStorage)
document.getElementById("donorsCount").innerText = 120;
document.getElementById("bloodUnits").innerText = 350;
document.getElementById("livesSaved").innerText = 200;


