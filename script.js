// Set today's date in the footer
document.getElementById("currentDate").textContent = new Date().toLocaleDateString();

// Handle loading spinner on odds pages
window.onload = function() {
    const spinner = document.getElementById("loadingSpinner");
    if (spinner) {
        spinner.style.display = 'none';
    }
};

// Handle admin login
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const phoneNumber = document.getElementById("phoneNumber").value;
    const token = document.getElementById("token").value;
    const adminPhoneNumber = "0769743249";
    const adminToken = "giv2890";
    
    if (phoneNumber === adminPhoneNumber && token === adminToken) {
        window.location.href = "landing-page.html";
    } else if (phoneNumber && token) {
        alert('Logged in successfully.');
        window.location.href = "subscription.html";
    } else {
        alert('Invalid login credentials.');
    }
});

// Admin uploading image and description on landing page
function adminUploadImage(newImageUrl, newDescription) {
    document.getElementById("landingImage").src = newImageUrl;
    document.getElementById("landingDescription").textContent = newDescription;
}

// Suggestions for league names and logos
const leagueSuggestions = [
    { name: 'Premier League', logo: 'premier-league-logo.jpg' },
    { name: 'La Liga', logo: 'la-liga-logo.jpg' },
    { name: 'Serie A', logo: 'serie-a-logo.jpg' },
    // Add more leagues
];

// Suggestions for team names and logos
const teamSuggestions = [
    { name: 'Manchester United', logo: 'man-utd-logo.jpg' },
    { name: 'Real Madrid', logo: 'real-madrid-logo.jpg' },
    { name: 'AC Milan', logo: 'ac-milan-logo.jpg' },
    // Add more teams
];

// Suggestion function for leagues
document.querySelectorAll('.league-input')?.forEach(input => {
    input.addEventListener('input', function() {
        const userInput = this.value.toLowerCase();
        let suggestions = leagueSuggestions.filter(league => league.name.toLowerCase().includes(userInput));
        // Show suggestions, replace input with selected suggestion when clicked
        // TODO: Implement dropdown suggestion UI
    });
});

// Suggestion function for teams
document.querySelectorAll('.team-input')?.forEach(input => {
    input.addEventListener('input', function() {
        const userInput = this.value.toLowerCase();
        let suggestions = teamSuggestions.filter(team => team.name.toLowerCase().includes(userInput));
        // Show suggestions, replace input with selected suggestion when clicked
        // TODO: Implement dropdown suggestion UI
    });
});

// Handle posting odds data
document.getElementById('postBtn')?.addEventListener('click', function() {
    // Post odds data to the precise page (e.g., Free Odds)
    // TODO: Implement POST logic (save data and refresh the page content)
    alert('Odds posted successfully!');
});
      
