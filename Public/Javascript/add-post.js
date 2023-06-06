// get the post title and content values from the form input fields
const title = document.querySelector('input[name="post-title"]').value;
const post_content = document.querySelector('#post-content').value.trim();

async function newFormHandler(event) {

// make a POST request to the API endpoint for creating new posts, and send the title and content data as JSON in the request body
const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
        title,
        post_content
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});

// if the POST request is successful, redirect the user to the dashboard page
if (response.ok) {
    document.location.replace('/dashboard');
} else {
    // if there is an error, display an alert with the error message text
    alert(response.statusText);
}}

// add an event listener to the new post form submit button, which calls the newFormHandler function when the form is submitted
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);