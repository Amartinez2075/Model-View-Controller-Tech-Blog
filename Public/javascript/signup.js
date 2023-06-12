// Define the function that will handle form submission
async function signupFormHandler(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the values of the input fields and trim whitespace
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // Check that the required fields are not empty
  if (username && email && password) {
    // Send a POST request to the server with user data
    const response = await fetch('/api/accessRoutes', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    // Check the response status waka
    if (response.ok) {
      console.log('success'); // Log success message to console
      document.location.replace('/dashboard'); // Redirect user to dashboard
    } else {
      alert(response.statusText); // Show an alert with the error message
    }
  }
}

// Add an event listener to the signup form
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
