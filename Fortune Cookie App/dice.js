const dice = document.getElementById("dice");
const resultText = document.getElementById("dice-result");

// Animation frames (looped during rolling)
const animationFrames = [
    "dice1.png",
    "dice2.png",
    "dice3.png"
];

// Final dice faces
const diceFaces = [
    "diceresult6.png",
    "diceresult5.png",
    "diceresult4.png",
    "diceresult3.png",
    "diceresult2.png",
    "diceresult1.png"
];

// Result messages
const resultMessages = [
    "You rolled a 1! Something small, but meaningful, is on its way.",
    "You rolled a 2! A new opportunity will present itself.",
    "You rolled a 3! Stay strong, you're on the right track.",
    "You rolled a 4! Expect balance and stability ahead.",
    "You rolled a 5! Big changes are coming your way!",
    "You rolled a 6! This means great success in your future."
];

// Handle click event
dice.addEventListener("click", () => {
    // Generate a random number between 0 and 5 (inclusive) for the roll
    const rolledNumber = Math.floor(Math.random() * 6);

    // Start the rolling animation by changing dice images every 100ms
    let frame = 0;
    let rollInterval = setInterval(() => {
        dice.src = animationFrames[frame % animationFrames.length];
        frame++;
    }, 100); // Change image every 100ms

    // After 1 second, stop the animation and display the final result
    setTimeout(() => {
        clearInterval(rollInterval); // Stop the animation

        // Set the final dice image and the result message simultaneously
        dice.src = diceFaces[rolledNumber]; // Set the correct dice face
        resultText.innerText = resultMessages[rolledNumber]; // Set the message based on the roll
    }, 1000); // After 1 second, stop the animation and show the final result
});
