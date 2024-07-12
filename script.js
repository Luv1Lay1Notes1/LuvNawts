document.addEventListener('DOMContentLoaded', function() {
    // Date of March 1st, 2023
    const marchFirst2023 = new Date('2023-03-01');
    
    // Function to calculate days since a given date
    function calculateDaysSince(date) {
        const currentDate = new Date();
        const difference = currentDate - date;
        return Math.floor(difference / (1000 * 60 * 60 * 24));
    }
    
    // Display the days since message
    function displayDaysSinceMessage(date) {
        const daysSince = calculateDaysSince(date);
        const daysSinceText = document.getElementById('days-since-text');
        daysSinceText.textContent = `It has been ${daysSince} days since we started dating ❤️`;
    }
    
    // Call the function to display the message
    displayDaysSinceMessage(marchFirst2023);
    
    // Optional: Update the message every day
    setInterval(function() {
        displayDaysSinceMessage(marchFirst2023);
    }, 86400000); // Update every 24 hours (in milliseconds)
});
