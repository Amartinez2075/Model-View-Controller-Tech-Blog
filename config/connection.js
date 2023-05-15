// Declare a function called capitalize that takes a string parameter
function capitalize(str) {
    // If the string is empty, return an empty string
    if (str.length === 0) {
    return '';
    }
    
    // Convert the first character of the string to uppercase
    const firstChar = str.charAt(0).toUpperCase();
    
    // Return the capitalized string by concatenating the first character with the rest of the string
    return firstChar + str.slice(1);
    }
    
    // Export the capitalize function to make it available for use in other parts of the application
    module.exports = capitalize;