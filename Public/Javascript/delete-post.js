async function deleteFormHandler(event) {
  event.preventDefault();

  // Get the id of the post from the URL
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];

  // Send a DELETE request to the API to delete the post with the given id
  const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
          post_id: id
      }),
      headers: {
          'Content-Type': 'application/json'
      }
  });

  // If the response is ok, redirect the user to the dashboard. Otherwise, display an error message
  if (response.ok) {
      document.location.replace('/dashboard/');
  } else {
      alert(response.statusText);
  }

}

// Attach the deleteFormHandler function to the click event of the delete post button
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
