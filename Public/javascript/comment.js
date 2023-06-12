// This function handles the submission of the comment form
async function commentFormHandler(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get the text content of the comment input element
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    // Get the ID of the current post from the URL
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // If the comment input is not empty
    if (comment_text) {
        // Send a POST request to the server with the comment data
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // If the response is OK, refresh the page to show the new comment
        if (response.ok) {
            document.location.reload();
        } else { // Otherwise, display an error message
            alert(response.statusText);
        }
    }
}

// Attach the commentFormHandler function to the submit event of the comment form
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
