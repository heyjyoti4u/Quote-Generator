// Array of quotes
const quotes = [
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    "It is never too late to be what you might have been. – George Eliot",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt"
];

// Function to generate a random quote
function generateRandomQuote() {
    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // Get the quote from the array using the random index
    const randomQuote = quotes[randomIndex];
    // Display the quote on the page
    document.getElementById("quoteDisplay").textContent = randomQuote;
}

// Event listener for the button
document.getElementById("generateBtn").addEventListener("click", generateRandomQuote);
