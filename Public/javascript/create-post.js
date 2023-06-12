// This is an async function that handles the creation of a new post.
async function createPostHandler(event) {
    event.preventDefault();

    // This redirects the user to the new post form.
    document.location.replace('/dashboard/new')
}

// This adds an event listener to the "create new post" button, and calls the createPostHandler function when the button is clicked.
document.querySelector('#create-new-post').addEventListener('click', createPostHandler);
