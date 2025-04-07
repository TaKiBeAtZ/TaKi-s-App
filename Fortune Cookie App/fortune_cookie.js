let clickCount = 0;
const cookie = document.getElementById("cookie");
const fortuneMessage = document.getElementById("fortune-message");

// Image Stages of Breaking Cookie
const cookieStages = [
    "fortune_cookie.png",  // Whole Cookie
    "fortunecookie1.png",  // Small Crack
    "fortunecookie2.png",  // Bigger Crack
    "fortunecookie3.png",  // Almost Broken
    "fortunecookie4.png"   // Fully Broken, Revealing Fortune
];

// Fortune Messages
const fortunes = [
    "Good luck is coming your way!",
    "A big opportunity is on the horizon!",
    "Trust the process, great things take time!",
    "An unexpected surprise is in store for you!"
];

cookie.addEventListener("click", function () {
    console.log("Cookie clicked! Click count:", clickCount);

    // Apply Shake Effect
    cookie.classList.add("shake");

    // Wait for animation to complete before changing the image
    setTimeout(() => {
        cookie.classList.remove("shake");

        if (clickCount < cookieStages.length - 1) {
            clickCount++;
            cookie.src = cookieStages[clickCount]; // Change Image
            console.log("Image changed to:", cookieStages[clickCount]);
        }

        // If it's fully broken, reveal fortune
        if (clickCount === cookieStages.length - 1) {
            setTimeout(() => {
                cookie.style.display = "none"; // Hide Cookie
                fortuneMessage.innerText = fortunes[Math.floor(Math.random() * fortunes.length)]; // Show Fortune
                fortuneMessage.classList.remove("hidden");
            }, 500);
        }

    }, 300); // This matches the shake animation time
});
