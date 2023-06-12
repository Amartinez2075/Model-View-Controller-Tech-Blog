// Define an async function that handles form submission for editing a post
async function editFormHandler(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the input values for title and post content from the form
  const title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector('input[name="post-content"]').value;

  // Extract the post ID from the current URL
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];

  // Send a PUT request to update the post using the ID and new title and content values
  const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
          title,
          post_content
      }),
      headers: {
          'Content-Type': 'application/json'
      }
  });
  console.log(response);
  
  // If the response is OK, redirect the user to the dashboard
  if (response.ok) {
      document.location.replace('/dashboard/');
  } else {
      // Otherwise, display an error message with the response status text
      alert(response.statusText);
  }
}

// Add an event listener to the form that triggers the editFormHandler when submitted
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
