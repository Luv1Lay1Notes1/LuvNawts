document.addEventListener('DOMContentLoaded', function() {
  // Date of March 1st, 2023
  const marchFirst2023 = new Date('2023-03-01');
  
  // Current date
  const currentDate = new Date();
  
  // Calculate the difference in milliseconds
  const difference = currentDate - marchFirst2023;
  
  // Convert milliseconds to days
  const daysSince = Math.floor(difference / (1000 * 60 * 60 * 24));
  
  // Display the result
  const daysSinceText = document.getElementById('days-since-text');
  daysSinceText.textContent = `It has been ${daysSince} days since we dated eachother<3`;
});
