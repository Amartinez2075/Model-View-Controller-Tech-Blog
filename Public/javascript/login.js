// Function to handle login form submission
async function loginFormHandler(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the email and password input values and remove any whitespace around them
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // Check if both email and password inputs are not empty
  if (email && password) {
    // Send a POST request to the '/api/accessRoutes/login' route with the email and password in the request body
    const response = await fetch('/api/accessRoutes/login', {
      method: 'post', // Request method is POST
      body: JSON.stringify({
        email,
        password
      }), // Request body contains email and password data in JSON format
      headers: { 'Content-Type': 'application/json' } // Set the content type header to JSON
    });

    // Check if the response status is OK (200)
    if (response.ok) {
      // If response status is OK, redirect to the dashboard page
      document.location.replace('/dashboard');
    } else {
      // If response status is not OK, show an alert message with the response status text
      alert(response.statusText);
    }
  }
}

// Add a submit event listener to the login form that calls the loginFormHandler function
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
