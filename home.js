document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById("home-link");
    
    homeLink.addEventListener("click", function (e) {
        e.preventDefault();
        
        window.location.href = "Home.html"; 
    });
});
    function navigateToPage(pageUrl) {
        // Change the button color when clicked
        event.target.classList.add("clicked");
        
        // Navigate to the specified page after a brief delay (for the color change to be visible)
        setTimeout(function() {
            window.location.href = pageUrl;
        }, 200);
    }