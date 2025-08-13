
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});
function registerDonor() {
  alert("Redirecting to Donor Registration Page...");
}

function requestBlood() {
  alert("Redirecting to Blood Request Page...");
}
document.getElementById("donorsCount").innerText = 120;
document.getElementById("bloodUnits").innerText = 350;
document.getElementById("livesSaved").innerText = 200;



