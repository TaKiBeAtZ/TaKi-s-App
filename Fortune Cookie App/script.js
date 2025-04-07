const getFortuneButton = document.getElementById('getFortuneButton');
const cookie = document.getElementById('cookie');
const crack = document.getElementById('crack');
const quote = document.getElementById('quote');

// Array of inspirational quotes
const quotes = [
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones."
];

getFortuneButton.addEventListener('click', () => {
    // Show the cookie and initiate cracking
    cookie.style.display = 'flex';
    setTimeout(() => {
        crack.style.display = 'block';  // Simulate cracking of the cookie
        // Select a random quote
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quote.textContent = randomQuote;
        setTimeout(() => {
            quote.style.display = 'block'; // Show the quote after cracking the cookie
            quote.style.opacity = 1;
        }, 1000);
    }, 500);
});
