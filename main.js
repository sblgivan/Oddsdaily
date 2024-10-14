// Set today's date in the footer
document.getElementById("currentDate").textContent = new Date().toLocaleDateString();

// Show current time
function updateTime() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById("currentTime").textContent = currentTime;
}
setInterval(updateTime, 1000);

// Handle loading spinner on page load
window.addEventListener('load', function() {
    const spinner = document.getElementById("loadingSpinner");
    if (spinner) {
        spinner.style.display = 'none';
    }
});
